import React from 'react'
import { useState ,useEffect } from 'react'
import Card from '../Card/Card'
import './MovieList.css'
import { useParams } from 'react-router-dom'

function MovieList() {
        const [movieList, setmovieList] = useState([]);
        const {type}=useParams()

        useEffect(() => {
            getData()
        }, []);
        
        useEffect(() => {
            getData()
        }, [type]);

    const getData=()=>{
        fetch(`https://api.themoviedb.org/3/movie/${type ? type :'popular'}?api_key=6f5f64ef17d8caf9df73f52bab2946a7`)
        .then(res=>res.json())
        .then(data=> setmovieList(data.results))
     }
    return (
 <>
       <div className="movie__list">
          <h2 className="list__title">{(type ? type : "POPULAR").toUpperCase()}</h2>
            <div className="list__cards">
                {
                    movieList.map(movie => (
                        <Card movie={movie} />
                 ))
                }
            </div>
        </div>
 </>

)
}

export default MovieList