import movieType from "./MovieType";
import "./MovieStyled.css";

export default function Movie(props:{movie : movieType}){
    return(
        <article className={"moviecard"}>
            <h2>{props.movie.title}</h2>
            <img src={`${props.movie.poster}`}/>

        </article>
    )
}