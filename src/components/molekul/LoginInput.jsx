import React, { Component } from 'react';

export default class LoginInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };

    this.onEmailChangeHandler = this.onEmailChangeHandler.bind(this);
    this.onPasswordChangeHandler = this.onPasswordChangeHandler.bind(this);
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
  }

  onEmailChangeHandler(event) {
    this.setState(() => {
      return { email: event.target.value };
    });
  }

  onPasswordChangeHandler(event) {
    this.setState(() => {
      return { password: event.target.value };
    });
  }

  onSubmitHandler(event) {
    event.preventDefault();

    this.props.login({
      email: this.state.email,
      password: this.state.password,
    });
  }

  render() {
    return (
      <form className='grid grid-cols-1' onSubmit={this.onSubmitHandler}>
        <input
          type='text'
          placeholder='Email'
          value={this.state.email}
          onChange={this.onEmailChangeHandler}
          required
        />
        <input
          type='text'
          placeholder='Password'
          value={this.state.password}
          onChange={this.onPasswordChangeHandler}
          required
        />
        <button type='submit'>Login</button>
      </form>
    );
  }
}
