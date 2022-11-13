import React from 'react'
import { useEffect ,useState } from 'react';
import './Home.css'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';
import MovieList from '../../Components/MovieList/MovieList';

const Home=()=> {
    const [popularMovies,setPopularMovies]=useState([])

    useEffect(() => {
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=6f5f64ef17d8caf9df73f52bab2946a7')
        .then(res=>res.json())
        .then(data=> setPopularMovies(data.results))
    }, [])

  return (
   <>
<div className="poster">
     <Carousel showThumbs={false} autoPlay={true}
      transitionTime={3} infiniteLoop={true} showStatus={false} >
    {
      popularMovies.map(movie=>(
      <Link to={`/movie/${movie.id}`} >
          <div className="posterimg">
            <img src={`https://image.tmdb.org/t/p/original${movie && movie.backdrop_path}`} alt="Poster" />
          </div>
        <div className="poster_overlay">
         <div className="posterImg_title">{movie ? movie.original_title : ""} </div>
         <div className="posterImg_runtime">{movie? movie.release_date : ""}
            <span className="posterImg_rating">
              {movie?movie.vote_average : ""}
              <i class="fa fa-star" />{" "}
            </span>
          </div>
        <div className="posterImg_des">
          {movie ? movie.overview : ""}
        </div>   
        </div>     
    </Link>
        ))//--
      }
      </Carousel>
      <MovieList />
    </div>
   </>
  )
}

export default Home