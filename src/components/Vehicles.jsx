import { useEffect, useState } from "react";


const Vehicles = ({id}) =>{

    const [vehicles, setVehices] = useState([]);

    useEffect(() => {
        fetch('https://ghibliapi.vercel.app/vehicles')
        .then(reponse => reponse.json())
        .then(data =>{
            setVehices(data);
        });
    },[]);

    const filterVehicles = vehicles.filter((vehicle)=> 
        vehicle.films.some((url) => url.includes(id))
    )

    return(
        <>
        {filterVehicles.length === 0 ? (
            <tr>
                <td>No hay Vehiculos por mostrar para esta Pelicula</td>
            </tr>
        ): (
            filterVehicles.map((vehicle) => (
                <tr key={vehicle.id}>
                    <td>{vehicle.name}</td>
                    <td>{vehicle.description}</td>
                    <td>{vehicle.vehicle_class}</td>
                </tr>
            ))
        )}
        </>
    );
}
export default Vehicles;