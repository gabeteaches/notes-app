import React, { Component } from 'react';

export default class Header extends Component {
  state = {
    title: '',
    content: '',
  }
  handleTitleUpdate = (ev) => {
    this.setState({
      title: ev.target.value,
    })
  }
  handleContentUpdate = (ev) => {
    this.setState({
      content: ev.target.value,
    })
  }
  handleSubmit = (event) => {
    event.preventDefault();

    this.props.addNote({
      title: this.state.title,
      content: this.state.content,
    })

    // Reset the input fields to blank after save
    this.setState({
      title: '',
      content: '',
    })
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit} className="box">
        <h1 className="title">Create a Note!</h1>
        <div className="field">
          <label className="label">Title</label>
          <div className="control">
            <input className="input" placeholder="Title" onChange={this.handleTitleUpdate} value={this.state.title} />
          </div>
        </div>
        <div className="field">
          <label className="label">Content</label>
          <div className="control">
            <textarea className="textarea" placeholder="Content" onChange={this.handleContentUpdate} value={this.state.content}/>
          </div>
        </div>
        <button className="button">Save Note</button>
      </form>
    )
  }
}