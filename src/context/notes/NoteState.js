import React, { useState } from 'react'
import NoteContext from './noteContext'

const NoteState = ({ children }) => {
    const notesInitial = [
        {
            "notes": [
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
        }
    ]

    const [notes, setNotes] = useState(notesInitial)

    return (
        <NoteContext.Provider value={{ notes, setNotes }}>
            {children}
        </NoteContext.Provider>
    )
}

export default NoteState;