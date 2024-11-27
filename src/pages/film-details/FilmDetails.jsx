import { useParams } from "react-router-dom"
import Loading from "../../components/loading/Loading"
import ExtraInfoFilm from "../../components/film/ExtraInfoFilm";
import useFetch from "../../hooks/useFetch";


const FilmDetails = () => {

    const {id} = useParams();

    const {data, isLoading} = useFetch({name:`films/${id}`})    

    return (
        <div>
            {isLoading ? <Loading/> : ''}
            {!isLoading && 
            <ExtraInfoFilm
                key={data.id}
                id={data.id}
                image={data.image}
                title={data.title}
                original_title={data.original_title}
                description={data.description}
                director={data.director}
                producer={data.producer}
                release_date={data.release_date}
                rt_score={data.rt_score}
                 />}
         </div>
    )
}

export default FilmDetails;