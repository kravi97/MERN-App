import React from 'react'
import contextValue from '../context/notes/noteContext'
import { useContext } from 'react'

const NoteItem = (props) => {
    const context = useContext(contextValue);
    const { deleteNote } = context;
    const { note } = props;



    return (
        <div className='col-md-3'>
            <div className="card my-3">
                <div className="card-body">
                    <h5 className="card-title">{note.title}</h5>
                    <p className="card-text">{note.description}</p>
                    <i className="far fa-trash-alt mx-2" onClick={() => { deleteNote(note._id) }}></i>
                    <i className="far fa-edit mx-2"></i>
                </div>
            </div>
        </div>
    )
}

export default NoteItem
