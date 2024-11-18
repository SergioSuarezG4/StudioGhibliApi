import { useEffect } from "react";
import { useState } from "react";

const People = ({id}) => {


    const  [peoples, setPeople] = useState([]);

    useEffect(() => {
        fetch('https://ghibliapi.vercel.app/people/')
            .then(response => response.json())
            .then(data => setPeople(data));
    }, []);

    const filteredPeoples = peoples.filter((people) =>
        people.films.some((filmUrl) => filmUrl.includes(id))
    )
    
    return (
        <> 
        {filteredPeoples.length === 0 ? (
            <tr>
                <td>No hay personajes para esta Pelicula.</td>
            </tr>
        ) : (
            filteredPeoples.map((person) => (
                <tr key={person.id}>
                    <td>{person.name}</td>
                    <td>{person.age || "Desconocida"}</td>
                    <td>{person.gender || "Desconocido"}</td>
                    <td>{person.hair_color}</td>
                </tr>
            ))
        )}
        </>
    );
    
}
export default People;