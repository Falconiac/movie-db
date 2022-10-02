import movie from "../../model/movie";
import "./MovieStyled.css";
import {useEffect, useState} from "react";
import axios from "axios";
import { MdThumbUpOffAlt } from "react-icons/md";


const url = "/movie/";





export default function Movie(props:{movie : movie}){

    const thisID = props.movie.id;

    return(
        <article className={"moviecard"}>
            <h2>{props.movie.title}</h2>
            <img src={`${props.movie.poster}`}/>
            <p>{`${props.movie.marked}`}</p>



            <MdThumbUpOffAlt size={"2em"} className={`${props.movie.marked ? "aqua" : "red"}`}  onClick={()=>
                axios.put(url+thisID, {
                    "id": `${props.movie.id}`,
                    "title": `${props.movie.title}`,
                    "release": `${props.movie.release}`,
                    "poster": `${props.movie.poster}`,
                    "marked": props.movie.marked ? false:true
                })
            }/>


        </article>
    )
}