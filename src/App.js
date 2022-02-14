import React, { useState } from "react";
import './App.css';

import Navbar from "./components/Navbar/Navbar";
import MustWatchList from "./components/MustWatchList/MustWatchList"

let idMovie = 0;
const generateMovieId = () => {
  idMovie = idMovie + 1
  return idMovie;
}

function App() {
    const [movie, setMovie] = useState([])

  const addMovie = (title, state) => {
    const newMovie = {
      id: generateMovieId,
      title,
      state
    }
    setMovie((existingMovie) => {
      return [...existingMovie, newMovie];

    });
  };

  const updateMovie = (id, title, state) => {
    setMovie((existingMovie) => {
      return existingMovie.map((movieTitleAndId) => {
        if(movieTitleAndId.id === id) {
          return { ...movieTitleAndId, title, state}
        } else {
          return movieTitleAndId;
        }
      });
    });
  };
  const deleteMovie = (id) => {
    setMovie((existingMovie)=> {
      return existingMovie.filter((movieTitleAndId) => movieTitleAndId.id !== id)
    })
  }

  return (
    <div className="App">
      <Navbar/>
      <div className="container">
      <MustWatchList 
      title="Quero assistir" 
      onAddMovie={addMovie} 
      movieState="queroAssistir"
      movie={movie.filter((t) => t.state === "queroAssistir")} 
      onMovieUpdate={updateMovie}
      onDeleteMovie={deleteMovie}
      />
      <MustWatchList 
      title="Assistindo" 
      onAddMovie={addMovie} 
      movieState="assistindo"
      movie={movie.filter((t) => t.state === "assistindo")} 
      onMovieUpdate={updateMovie}
      onDeleteMovie={deleteMovie}

      />
      <MustWatchList 
      title="Já Assisti" 
      onAddMovie={addMovie} 
      movieState="jaAssisti"
      movie={movie.filter((t) => t.state === "jaAssisti")} 
      onMovieUpdate={updateMovie}
      onDeleteMovie={deleteMovie}

      />
      </div>
  </div>
  );
}

export default App;
