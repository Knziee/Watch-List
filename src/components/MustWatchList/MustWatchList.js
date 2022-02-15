import React from "react";
import "./mustwatchlist.css";
import PropTypes from "prop-types";
import icons8 from "../../img/icons8-mais.svg"
import MovieItem from "../MovieItem/MovieItem";
import propTypes from "prop-types";


export default function MustWatchList({ title, onAddMovie, movie, onMovieUpdate, movieState, onDeleteMovie}) {
    const addMovie = () => {

        onAddMovie("Novo Filme", movieState)
    }

    return(
        <div className="mustwatchlist">
            <div className="title">{title}</div>
            <div className="content">
                {movie.map((movieTitleAndId) => {
                    return (
                    <MovieItem 
                    key={movieTitleAndId.id} 
                    id={movieTitleAndId.id} 
                    title={movieTitleAndId.title} 
                    movieState={movieTitleAndId.state}
                    onMovieUpdate={onMovieUpdate}
                    onDeleteMovie={onDeleteMovie}

                    />
                    )
                })}
                { movie.length === 0 && <div className="emptyList">Lista Vazia</div>}
                <button onClick={addMovie} className="btn">
                    <img src={icons8} alt="icon" className="btnImg"/>
                    Adicionar Filme
                    </button>
            </div>
        </div>
    )
}

MustWatchList.propTypes = {
    title: PropTypes.string.isRequired,
    onAddMovie: PropTypes.func.isRequired,
    movie: PropTypes.array.isRequired,
    onMovieUpdate: propTypes.func.isRequired,
    onDeleteMovie: PropTypes.func.isRequired
}