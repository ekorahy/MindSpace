import React, { Component } from 'react';

export default class RegisterInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      password: '',
    };

    this.onNameChangeHandler = this.onNameChangeHandler.bind(this);
    this.onEmailChangeHandler = this.onEmailChangeHandler.bind(this);
    this.onPasswordChangeHandler = this.onPasswordChangeHandler.bind(this);
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
  }

  onNameChangeHandler(event) {
    this.setState(() => {
      return { name: event.target.value };
    });
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

    this.props.register({
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
    });
  }

  render() {
    return (
      <form className='grid grid-cols-1' onSubmit={this.onSubmitHandler}>
        <input
          type='text'
          placeholder='Name'
          value={this.state.name}
          onChange={this.onNameChangeHandler}
        />
        <input
          type='text'
          placeholder='Email'
          value={this.state.email}
          onChange={this.onEmailChangeHandler}
        />
        <input
          type='text'
          placeholder='Password'
          value={this.state.password}
          onChange={this.onPasswordChangeHandler}
        />
        <button type='submit'>Register</button>
      </form>
    );
  }
}
