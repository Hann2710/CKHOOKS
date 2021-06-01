import React, { useState } from 'react'
import './App.css'
import NavBar from './Components/NavBar.js'
import MovieList from './Components/MoviesList.js'
import { MovieData } from './Components/MoviesData.js'
import RatingSearch from './Components/RatingSearch'

function App() {
  const [rateSearch, setRateSearch] = useState(0)
  const [titleSearch, setTitleSearch] = useState('')
  const [movies, setMovies] = useState(MovieData)

  return (
    <div className="App">
      <NavBar
        setTitleSearch={setTitleSearch}
        setMovies={setMovies}
        movies={movies}
      />

      <RatingSearch setRateSearch={setRateSearch} rateSearch={rateSearch} />

      <MovieList
        movies={movies}
        titleSearch={titleSearch}
        rateSearch={rateSearch}
      />
    </div>
  )
}

export default App
