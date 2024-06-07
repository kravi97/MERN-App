import React from 'react'
import { useContext } from 'react'
import contextValue from '../context/notes/noteContext'

function Home() {
    const context = useContext(contextValue);
    const { notes, setNotes } = context;

    return (
        <div>
            <div className='container my-3'>
                <h2>Add a Note</h2>
                <form>
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" />
                    </div>
                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label" for="exampleCheck1">Check me out</label>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
                <div className='container my-3'>
                    <h2>Your Notes</h2>
                    {notes.map((note) => {
                        return note.notes.map((note) => {
                            return <div className="note">
                                <div className="note-title">{note.title}</div>
                                <div className="note-description">{note.description}</div>
                            </div>
                        })
                    }
                    )}
                </div>
            </div>
        </div>
    )
}

export default Home
