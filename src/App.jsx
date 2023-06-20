import { useState, useEffect } from 'react'
import './App.css'
import SearchIcon from './assets/search.svg'
import MoviesCard from './Movies/MoviesCard'

function App() {
 const [movies, setMovies] = useState([]);
 const [searchTerm, setSerchTerm] = useState('')

//  API KEY
 const API_URL =  'http://www.omdbapi.com/?apikey=bea0c735'
 
//  Function for API call
const searchMovie = async(title) =>{
    const response = await fetch(`${API_URL}&s=${title}`)
    const data = await response.json();

    setMovies(data.Search);

  }

 
  useEffect(() =>{
     searchMovie('spiderman')
  }, [])



  const handleSearchMovie = () =>{
    searchMovie(searchTerm);
    setSerchTerm('')

  }

  return (
    <>
      <div className='app'>
        <h1>Movie Island</h1>

        <div className="search">
          <input type="text"
          placeholder='Search for movies' 
          value={searchTerm} 
          onChange={(e)=> setSerchTerm(e.target.value)}
          />

          <img src={SearchIcon} alt="search" 
          onClick={handleSearchMovie}
      />
        </div>


     
       
       {movies?.length > 0 
        ? (
        <div className="container">
           {movies.map((movie) =>(
         
         <MoviesCard movie={movie} key={movie.imdbID}/>

         ))}
          </div>

          ) : (
            <div className="empty">
              <h2>No Movies found</h2>
            </div>
          )}



      
      </div>
     
     
    </>
  )
}

export default App
