import "./AddMovieStyled.css";
import {ChangeEvent, FormEvent, useState} from "react";
import movie from "../../model/movie";
import axios from "axios";



const url = "/movie/";

export default function AddMovie(){



    const [inputs, setInputs] = useState({});

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values,[name]:value}))
    }

    const handleSubmit=(event:FormEvent<HTMLFormElement>)=>{
        event.preventDefault()
        console.log("Output from Form: " + inputs)
        axios.post(url,inputs);
    }
    const emptyMovieElement : movie = {
        id:"",
        title:"",
        release:"",
        poster:"",
        isMarked:false
    }

    return(
        <section className={"addmovie"} onSubmit={handleSubmit}>
            <form className={"form"}>
                <label htmlFor={"title"}>Title:</label>
                <input name={"title"} id={"title"} type={"text"} onChange={handleChange}/>

                <label htmlFor={"release"}>Release:</label>
                <input name={"release"} id={"release"} type={"text"} onChange={handleChange}/>

                <label htmlFor={"poster"}>Poster-URL:</label>
                <input name={"poster"} id={"poster"} type={"text"} onChange={handleChange}/>

                <input type={"submit"}/>
            </form>
        </section>
    )
}