import React, { useEffect, useState } from 'react'
import axios from 'axios'
import requests from './request'
import "./banner.css"


const Banner = () => {

    const [movie,setMovies]=useState([]);



    useEffect(()=>{
        async function fetchdata() {
            const res= await axios.get(requests.fetchNetflixOriginals);

            setMovies(
                res.data.results[
                    Math.floor(Math.random() * res.data.results.length-1)

                ]
            );
        }
        fetchdata();
    },[]);

    console.log(movie);
  return (
    <header className='banner'
    style={{
    backgroundImage:`url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
}}
    >
        <div className='container'>
           <h1 className='title'>{movie.name  || movie?.title || movie?.orginal_name}</h1> 
        


        <div className='banner_button'>
            <button className='play_btn'>play</button>
            <button className='my _list'>my list</button>

        </div>

        <div className='description'>
            {movie.overview}
        </div>
        


        </div>
        

    </header>
  )
}

export default Banner