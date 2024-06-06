import React, { useContext, useEffect } from 'react'
import NoteContext from '../context/notes/noteContext';

function About() {
    const a = useContext(NoteContext);

    useEffect(() => {
        a.update();
        // eslint-disable-next-line
    }, [])

    return (
        <div>
            <h1>About {a.state.name} and he is in {a.state.class} class</h1>
        </div>
    )
}

export default About
