import { useEffect, useState } from "react";
import Film from "./Film";
import Loading from "./Loading";

const StudioGhibli = () => {

    const [films, setFilms] = useState([]) 
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch('https://ghibliapi.vercel.app/films')
        .then(response => response.json())
        .then(data =>{
            setFilms(data);
            setIsLoading(false);
        });

    }, []);

    return(
        <div className="container">
            <div className="row row-cols-1 row-cols-md-4 g-4">
            {isLoading ? <Loading/> : ''}
            {!isLoading && films.map(film => (
                <Film
                key={film.id}
                id={film.id}
                image={film.image}
                title={film.title} 
                description={film.description}
                director={film.director}
                />
            ))}
            </div>
        </div>
        
    )
}

export default StudioGhibli;