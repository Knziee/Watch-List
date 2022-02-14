import React, { useState } from "react";  
import "./movieitem.css";
import PropTypes from "prop-types";


export default function MovieItem({id, title, movieState, onMovieUpdate, onDeleteMovie}) {
    const [isEditing, setIsEditing] = useState(false);
    const [editableTitle, setEditableTitle] = useState(title);
    const ontitleChange = (event) => {
        const newTitle = event.target.value;
        setEditableTitle(newTitle)
        onMovieUpdate(id, newTitle, movieState);
    };

    const onKeyPress = (event) => {
        if (event.key === "Enter") {
            setIsEditing(false);
            if(editableTitle.length === 0) {
                onDeleteMovie(id);
            }
        }
    }

    const onMovieStateChange = (event) => {
        onMovieUpdate(id, title, event.target.value)
    }

    if(isEditing) {
        return (
            <div className="movieitem">
        <input 
        type="text" 
        value={editableTitle} 
        onChange={ontitleChange} 
        onKeyPress={onKeyPress}
         />;
            </div>
         )
    } else {
        return (
            <div className="movieitem">
        <div onClick={(e) => setIsEditing(true)}>{editableTitle}</div>
        <select onChange={onMovieStateChange} value={movieState}>
            <option value="queroAssistir">Quero Assistir</option>
            <option value="assistindo">Assistindo</option>
            <option value="jaAssisti">Já Assisti</option>
        </select>
        </div>

        )
    }

}

MovieItem.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    movieState: PropTypes.string.isRequired
}