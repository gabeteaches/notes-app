import React, { Component } from 'react';
import Header from './components/Header';
import Notes from './components/Notes';

class App extends Component {
  state = {
    notes: [
      {
        id: 1,
        title: 'Hello',
        content: 'World'
      }, 
      {
        id: 2,
        title: 'Yo',
        content: 'Class'
      }
    ]
  }
  addNote = (note) => {
    note.id = this.state.notes.length + 1;
    this.setState({
      // Add new note to the beginning of the array
      notes: [note].concat(this.state.notes),
    })
  }
  deleteNote = (noteId) => {
    const newNotes = this.state.notes.filter((note) => {
      return note.id !== noteId;
    })

    this.setState({
      notes: newNotes,
    });
  }
  editNote = (newNote) => {
    const newNotes = this.state.notes.map((note) => {
      if (note.id === newNote.id) {
        return newNote;
      }

      return note;
    })

    this.setState({
      notes: newNotes,
    });
  }
  render() {
    return (
      <div className="section">
        <Header addNote={this.addNote} />
        <br />
        <Notes notes={this.state.notes} deleteNote={this.deleteNote} editNote={this.editNote} />
      </div>
    );
  }
}

export default App;
