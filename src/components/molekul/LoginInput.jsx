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
          className='p-2 border rounded-md mb-2'
          type='text'
          placeholder='Email'
          value={this.state.email}
          onChange={this.onEmailChangeHandler}
          required
        />
        <input
          className='p-2 border rounded-md mb-2'
          type='text'
          placeholder='Password'
          value={this.state.password}
          onChange={this.onPasswordChangeHandler}
          required
        />
        <button
          className='p-2 bg-violet-400 rounded-md mb-4 hover:bg-violet-500 bg-4'
          type='submit'
        >
          Login
        </button>
      </form>
    );
  }
}
