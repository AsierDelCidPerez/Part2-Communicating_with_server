import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from 'react';
import Note from './components/Note';
import axios from 'axios';

const App = () => {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState({
    text : "a new note...",
    important : false
  });
  const [showAll, setShowAll] = useState(true);

  useEffect(() => {
    axios
      .get('http://localhost:3001/notes')
      .then(response => setNotes(response.data));
  }, [])

  const notesToShow = showAll ? notes : notes.filter(note => note.important===true)

  const actualizaImportancia = event => {
    setNewNote({
      ...newNote, 
      important: event.target.checked
    })
  }

  const actualizarNewNote = event => {
    setNewNote({
      ...newNote,
      text : event.target.value
    });
  }
  const actualizaPreferencias = event => {
    event.preventDefault();
    setShowAll(!showAll);
  }
  const addNote = event => {
    event.preventDefault();
    const noteObj = {
      content: newNote.text,
      date: new Date().toString(),
      important: newNote.important,
    };
    axios.post('http://localhost:3001/notes', noteObj)
        .then(response => (response.status === 201) ? setNotes(notes.concat(response.data)) : null);
    setNewNote("a new note...");
  }
  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {
          notesToShow.map(note => <Note key={note.id} note={note}/>)
        }
      </ul>
      <form>
        <input type="text" value={newNote.text} onChange={actualizarNewNote}/><br/>
        <label><input type="checkbox" onChange={actualizaImportancia}/>Importancia de la nota</label><br/>
        <button onClick={actualizaPreferencias}>{showAll ? ("Mostrar solo notas importantes") : ("Mostrar todas las notas")}</button><br/>
        <button type="submit" onClick={addNote}>Save</button>
      </form>
    </div>
  );
}

export default App;
