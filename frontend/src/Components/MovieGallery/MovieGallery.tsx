import movie from "../../model/movie";
import Movie from "../Movie/Movie";
import React from "react";
import "./MovieGalleryStyled.css";


type MovieGalleryProps ={
    movies : movie[];
}


export default function MovieGallery( props:MovieGalleryProps){

    const noMovies = props.movies.length == 0;

    return (
        <section className={"movgal"}>

            {noMovies && <h2>No Movies found !!!</h2>}

            {props.movies.map((movie)=>{
                return <Movie movie={movie} />
            })}
        </section>
    )
}