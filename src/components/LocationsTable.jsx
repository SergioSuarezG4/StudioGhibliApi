import Locations from "./Locations";


const LocationsTable = ({id}) => {
    return (
        <div>
            <table className="table table-locations">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Climate</th>
                        <th scope="col">Terrain</th>
                    </tr>
                </thead>
                <tbody>
                    <Locations id={id}/>
                </tbody>
            </table>
        </div>
    );
}
export default LocationsTable;