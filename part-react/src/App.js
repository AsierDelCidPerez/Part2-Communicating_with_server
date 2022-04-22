import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import Note from './components/Note';

const App = () => {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState("a you new note...");
  let contador = 1;
  const actualizarNewNote = event => {
    setNewNote(event.target.value);
  }

  const addNote = event => {
    event.preventDefault();
    setNotes(notes.concat({
      id: contador,
      content: newNote,
      date: new Date().toString(),
      important: true,
    }));
    setNewNote("a you new note...");
    contador++;
  }
  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {
          notes.map(note => <Note key={contador} note={note}/>)
        }
      </ul>
      <form onSubmit={addNote}>
        <input type="text" value={newNote} onChange={actualizarNewNote}/>
        <button type="submit">save</button>
      </form>
    </div>
  );
}

export default App;
