import { useEffect, useState } from 'react';

const Species = ({id}) => {

    const [species, setSpecies] = useState([]);


    useEffect(() => {
        fetch('https://ghibliapi.vercel.app/species')
        .then(response => response.json())
        .then(data => {
            setSpecies(data);
        });
    }, []);

    const filterSpecies = species.filter((specie) =>
        specie.films.some((url) => url.includes(id))
    )

    return(
        <> 
        {filterSpecies.length === 0 ? (
            <tr>
                <td>No hay Species para esta Pelicula.</td>
            </tr>
        ) : (
            filterSpecies.map((specie) => (
                <tr key={specie.id}>
                    <td>{specie.name}</td>
                    <td>{specie.classification}</td>
                    <td>{specie.eye_colors}</td>
                </tr>
            ))
        )}
        </>

    )
}

export default Species;