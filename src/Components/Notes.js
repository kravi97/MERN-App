import React from 'react'
import { useContext } from 'react'
import contextValue from '../context/notes/noteContext'
import NoteItem from './NoteItem';
import AddNote from './AddNote';

const Notes = () => {
    const context = useContext(contextValue);
    const { notes, addNote } = context;
    return (
        <>
            <AddNote />
            <div className='container my-3'>
                <h2>Your Notes</h2>
                {notes.map((note) => {
                    return <NoteItem note={note} key={note._id} />
                })}
            </div>
        </>
    )
}

export default Notes
