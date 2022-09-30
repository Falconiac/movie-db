import movieType from "./MovieType";

export default function Movie(props:{movie : movieType}){
    return(
        <article>
            <h2>{props.movie.title}</h2>
            <img src={`${props.movie.poster}`}/>
        </article>
    )
}