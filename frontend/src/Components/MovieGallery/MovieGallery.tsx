import MovieType from "../Movie/MovieType";
import Movie from "../Movie/Movie";
import React from "react";


type MovieGalleryProps ={
    movies : MovieType[];
}

export default function MovieGallery( props:MovieGalleryProps){
    return (
        <>
            {props.movies.map((movie)=>{
                return <Movie movie={movie} />
            })}
        </>
    )
}