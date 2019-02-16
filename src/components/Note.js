import React, { Component } from 'react';


export default class Note extends Component {
  constructor(props) {
    super(props);

    this.state = {
      editTitle: props.title,
      editContent: props.content,
      isEditing: false,
    }
  }
  handleTitleChange = (ev) => {
    this.setState({
      editTitle: ev.target.value
    })
  }
  handleContentChange = (ev) => {
    this.setState({
      editContent: ev.target.value
    })
  }
  handleSave = () => {
    this.props.editNote({
      title: this.state.editTitle,
      content: this.state.editContent,
    })

    // Close editing inputs
    this.toggleEditing();
  }
  toggleEditing = () => {
    this.setState({
      isEditing: !this.state.isEditing
    })
  }
  render() {
    const isEditing = this.state.isEditing;

    return (
      <div className="card">
        <header className="card-header">
          <p className="card-header-title">
            {isEditing === false
              ? this.props.title
              : <input value={this.state.editTitle} onChange={this.handleTitleChange} className="input" />}
          </p>
        </header>
        <div className="card-content">
          <div className="content">
            {isEditing === false
              ? this.props.content
              : <textarea value={this.state.editContent} onChange={this.handleContentChange} className="textarea" />}
          </div>
          <footer className="card-footer">
            <a className="card-footer-item" onClick={this.toggleEditing}>
              {isEditing === false ? 'Edit' : 'Cancel'}
            </a>
            {isEditing === false
              ? <a className="card-footer-item" onClick={this.props.deleteNote}>Delete</a>
              : <a className="card-footer-item" onClick={this.handleSave}>Save</a>}
          </footer>
        </div>
      </div>
    )
  }
}