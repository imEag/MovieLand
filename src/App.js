import { React, useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import './App.css';
import SearchIcon from './search.svg';

// ae4c8ae5

const API_URL = 'http://www.omdbapi.com/?apikey=ae4c8ae5';

const App = () => {

    const [movies, setMovies] = useState([]);

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();
        setMovies(data.Search);
    }

    useEffect(() => {
        searchMovies('back to the future');
    }, []);

    return (
        <div className="app">
            <h1>MovieLand</h1>

            <div className="search">
                <input
                    placeholder="Search for movies..."
                    value="Back to the future"
                    onChange={() => { }}
                />
                <img
                    src={SearchIcon}
                    alt='search'
                    onClick={() => { }}
                />
            </div>

            {
                movies?.length > 0
                    ? (
                        <div className="container">
                            {movies.map((movie) => (
                                <MovieCard movie={movie} />
                            ))}
                        </div>
                    ) : (
                        <div className="empty">
                            <h2>No movies found.</h2>
                        </div>
                    )
            }


        </div>
    );
}

export default App;