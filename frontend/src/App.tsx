import React, {useEffect, useState} from 'react';
import './App.css';
import axios from "axios";

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
    <section className="App">






    </section>
  );
}

export default App;
