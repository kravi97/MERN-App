import React from 'react'
import { useContext } from 'react'
import contextValue from '../context/notes/noteContext'
import NoteItem from './NoteItem';

const Notes = () => {
    const context = useContext(contextValue);
    const { notes, setNotes } = context;
    return (
        <div className='container my-3'>
            <h2>Your Notes</h2>
            {notes.map((note) => {
                return <NoteItem note={note} key={note._id} />
            })}
        </div>
    )
}

export default Notes
