import React, { Component } from 'react'

export default class NoteInput extends Component {
  constructor(props) {
    super(props)

    this.state = {
      title: '',
      body: ''
    }

    this.onTitleChangeHandler = this.onTitleChangeHandler.bind(this);
    this.onBodyChangeHanlder = this.onBodyChangeHanlder.bind(this);
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
  }

  onTitleChangeHandler(event) {
    this.setState(() => {
      return {
        title: event.target.value
      }
    })
  }

  onBodyChangeHanlder(event) {
    this.setState(() => {
      return {
        body: event.target.innerHTML
      }
    })
  }

  onSubmitHandler(event) {
    event.preventDefault()
    this.props.addNote(this.state)
  }

  render() {
    return (
      <form onSubmit={this.onSubmitHandler}>
        <input type="text" placeholder='Title' value={this.state.title} onChange={this.onTitleChangeHandler} />
        <div data-placeholder='Body' contentEditable onInput={this.onBodyChangeHanlder} />
        <button type='submit'>Add</button>
      </form>
    )
  }
}
