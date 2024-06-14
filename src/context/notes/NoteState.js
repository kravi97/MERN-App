import React, { useState } from 'react'
import NoteContext from './noteContext'

const NoteState = ({ children }) => {
    const notesInitial = [
        {
            "_id": "66605dd614e6306f3cf73274",
            "user": "665fe7b01f33ec68cf591d2f",
            "title": "My Title",
            "description": "Please wake up early..",
            "tag": "personal",
            "date": "2024-06-05T12:45:10.182Z",
            "__v": 0
        }
    ]

    const [notes, setNotes] = useState(notesInitial)

    // Add a note
    const addNote = (title, description, tag) => {
        const note = {
            "_id": "66605dd614e6306f3cf73274",
            "user": "665fe7b01f33ec68cf591d2f",
            "title": title,
            "description": description,
            "tag": tag,
            "date": "2024-06-05T12:45:10.182Z",
            "__v": 0
        }
        setNotes(notes.concat(note))
    }

    // Delete a note
    const deleteNote = (id) => {
        console.log("deleting note with id", id)

    }

    // Edit a note
    const editNote = (id, title, description, tag) => {
        console.log("editing note with id", id)

    }

    return (
        <NoteContext.Provider value={{ notes, addNote, setNotes }}>
            {children}
        </NoteContext.Provider>
    )
}

export default NoteState;