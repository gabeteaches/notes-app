import React from 'react';
import Note from './Note';


export default function Notes(props) {
  return (
    <div className="container">
      {props.notes != null ? props.notes.map((note) => {
        return (
          <div key={note.id}>
            <Note
              title={note.title}
              content={note.content}
              deleteNote={() => props.deleteNote(note.id)}
              editNote={(editedNote) => props.editNote({
                // Pass editor note with same id
                id: note.id,
                title: editedNote.title,
                content: editedNote.content,
              })}
            />
            <br />
          </div>
        )
      }) : null}
    </div>
  )
}
