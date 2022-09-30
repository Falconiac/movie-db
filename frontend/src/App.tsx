import React, {useEffect, useState} from 'react';
import './App.css';
import axios from "axios";
import Movie from "./Components/Movie/Movie";
import MovieGallery from "./Components/MovieGallery/MovieGallery";

function App() {

  const url = "/movie/";

  let [movies, setMovies] = useState([]);

  function getAllMovies(link:string){
    axios.get(link)
        .then((response)=>{
          return response.data
        }).then((data)=>{
          setMovies(data)
    }).catch((error)=>{
      console.log(error)
    })
  }

  useEffect(()=>{
    getAllMovies(url);
  },[])

  {console.log(movies)}

  return (

    <body className="App">

      <MovieGallery key={"moviegallery"} movies={movies}/>

    </body>
  );
}

export default App;
