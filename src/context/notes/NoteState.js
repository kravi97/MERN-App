import React, { useState } from 'react'
import NoteContext from './noteContext'

const NoteState = ({ children }) => {
    const s1 = {
        "name": "Harry",
        "class": "5th"
    }

    const [state, setState] = useState(s1);

    const update = () => {
        setTimeout(() => {
            setState({
                "name": "Rohan",
                "class": "7th"
            });
        }, 2000);
    }

    return (
        <NoteContext.Provider value={{ state: state, update: update }}>
            {children}
        </NoteContext.Provider>
    )
}

export default NoteState;