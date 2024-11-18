import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import Loading from "./Loading";
import ExtraInfoFilm from "./ExtraInfoFilm";


const FilmDetails = () => {

    const {id} = useParams();
    const [film, setFilm] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch(`https://ghibliapi.vercel.app/films/${id}`)
        .then(response => response.json())
        .then(data => {
            setFilm(data);
            setIsLoading(false);
        });
    }, [id]);

    return (
        <div>
            {isLoading ? <Loading/> : ''}
            {!isLoading && 
            <ExtraInfoFilm
                key={film.id}
                id={film.id}
                image={film.image}
                title={film.title}
                original_title={film.original_title}
                description={film.description}
                director={film.director}
                producer={film.producer}
                release_date={film.release_date}
                rt_score={film.rt_score}
                 />}
         </div>
    )
}

export default FilmDetails;