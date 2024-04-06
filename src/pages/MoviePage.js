import React, { useState } from "react";
import { useEffect } from "react";
import './App.css';
import SearchIcon from '../search.svg';
import MovieCard from '../MovieCard';



const API_URL = 'https://www.omdbapi.com?apikey=7c50e322';



const MoviePage = () =>{
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('')
 
   useEffect(() => {
       searchMovies('superman')
   }, []);
   
const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`)
    const data = await response.json()
    setMovies(data.Search);
}  

const handleKeyPress = (event) => {
    if(event.key==='Enter'){
        searchMovies(searchTerm)
    }
}


   
    return (
       
<div className="App">
        <h1>MovieLand</h1>
        <div className="search">
            <input placeholder="Search for movies" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} onKeyPress={handleKeyPress}/>
            <img src={SearchIcon} alt="search" onClick={()=> searchMovies(searchTerm)} />
        </div>
        
    
        {
movies?.length >0
 ?  (<div className="container">
{movies.map((movie) =>(<MovieCard movie={movie} />))}
</div>
) : (
<div className="empty">
    <h2>No movies found</h2>
</div>
)
   }  
</div>  



)
}

export default MoviePage;