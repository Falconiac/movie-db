import movie from "../../model/movie";
import Movie from "../Movie/Movie";
import React from "react";
import "./MovieGalleryStyled.css";
import AddMovie from "../AddMovie/AddMovie";


type MovieGalleryProps ={
    movies : movie[];
}


export default function MovieGallery( props:MovieGalleryProps){

    const noMovies = props.movies.length == 0;

    return (
        <>
            <AddMovie />
        <section className={"movgal"}>

            {noMovies && <h2>No Movies found !!!</h2>}

            {props.movies.map((movie)=>{
                return <Movie key={movie.id} movie={movie} />
            })}
        </section>
        </>
    )
}