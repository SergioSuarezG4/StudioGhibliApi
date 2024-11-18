import { useState, useEffect } from 'react';


const Locations = ({id}) => {

    const  [locations , setLocations] = useState([]);

    useEffect(() => {
        fetch('https://ghibliapi.vercel.app/locations')
        .then(response => response.json())
        .then(data => {
            setLocations(data);
        });
    }, []);

    const filterLocations = locations.filter((location) => 
        location.films.some((url) => url.includes(id))
    )
    
    return(
        <>
        {filterLocations.length === 0 ? (
            <tr>
                <td>No hay locations por mostrar en esta pelicula.</td>
            </tr>

        ):(
            filterLocations.map((location) => (
                <tr key={location.id}>
                    <td>{location.name}</td>
                    <td>{location.climate}</td>
                    <td>{location.terrain}</td>     
                </tr>
            ))
        )}             
        </>
    )
}

export default Locations;