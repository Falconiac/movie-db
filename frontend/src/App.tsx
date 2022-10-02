import React, {useEffect, useState} from 'react';
import './App.css';
import axios from "axios";
import Movie from "./Components/Movie/Movie";
import MovieGallery from "./Components/MovieGallery/MovieGallery";
import AddMovie from "./Components/AddMovie/AddMovie";

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


  return (

    <header className="App">
      <AddMovie />
      <MovieGallery key={"moviegallery"} movies={movies}/>

    </header>
  );
}

export default App;
