import movie from "../../model/Movie";
import Movie from "../Movie/Movie";
import React from "react";
import "./MovieGalleryStyled.css";


type MovieGalleryProps ={
    movies : movie[];
}

export default function MovieGallery( props:MovieGalleryProps){
    return (
        <section className={"movgal"}>
            {props.movies.map((movie)=>{
                return <Movie movie={movie} />
            })}
        </section>
    )
}