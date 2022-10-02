import "./AddMovieStyled.css";
import {ChangeEvent, useState} from "react";
import movie from "../../model/movie";

export default function AddMovie(){



    const [inputs, setInputs] = useState({});

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values,[name]:value}))
    }

    const emptyMovieElement : movie = {
        id:"",
        title:"",
        release:"",
        poster:"",
        isMarked:false
    }

    return(
        <section className={"addmovie"}>
            <form className={"form"}>
                <label htmlFor={"title"}>Title:</label>
                <input name={"title"} id={"title"} type={"text"} onChange={handleChange}/>

                <label htmlFor={"release"}>Title:</label>
                <input name={"release"} id={"release"} type={"text"} onChange={handleChange}/>

                <label htmlFor={"poster"}>Title:</label>
                <input name={"poster"} id={"poster"} type={"text"} onChange={handleChange}/>
            </form>
        </section>
    )
}