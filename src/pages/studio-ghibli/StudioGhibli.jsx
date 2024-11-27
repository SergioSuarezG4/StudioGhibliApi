import Film from "../../components/film/Film";
import Loading from "../../components/loading/Loading";
import useFetch from "../../hooks/useFetch";

const StudioGhibli = () => {

    const {data, isLoading} = useFetch({name:'films'})    

    return(
        <div className="container">
            <div className="row row-cols-1 row-cols-md-4 g-4">
            {isLoading ? <Loading/> : ''}
            {!isLoading && data.map(film => (
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