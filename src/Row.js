import axios from 'axios';
import React, { useEffect,useState } from 'react'
import "./row.css"
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';


// const base="https://image.tmdb.org/t/p/orginal/";

const Row = ({title,fetchUrl}) => {
    const [movies, setMovies] = useState();
    const [trailerUrl,setTrailerUrl]=useState("");
    useEffect(()=>{
        async function fetchdata() {
            const requests =await axios.get(fetchUrl);
            setMovies(requests.data.results)
            // console.log(requests);
            return requests;
        }
        fetchdata();

    },[fetchUrl]);
    // console.table(movies);

    const opts ={
      height:"390",
      width:"100%",
      playerVars:{
        autoplay:1,
      },
    };
    const handleClick=(movie)=>{
      if(trailerUrl){
        setTrailerUrl('');
      }
      else{
        movieTrailer(movie?.name || "")
        .then((url) =>{
          const urlParams= new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((error)=>console.log("treaser not found"))
      }
    }
  return (
    <div>
        <h3> {title}</h3>

        <div className='row'>
           { movies && movies.map(movie=>(
            // <h1>{movie.name}</h1>
            <img key={movie.name} 
            onClick={()=>handleClick(movie)}
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.poster_path}/>
           ))}
       
        </div>
        {trailerUrl && <YouTube videoId={trailerUrl} opts={opts}></YouTube>}
    </div>
  )
}

export default Row