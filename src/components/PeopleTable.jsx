import People from "./People"

const PeopleTable = ({id}) =>{

    return(
        <div>
            <table className="table table-people">
                <thead>
                    <tr>
                        <th scope="col">Nombre</th>
                        <th scope="col">Edad</th>
                        <th scope="col">Genero</th>
                        <th scope="col">Color De Pelo</th>
                    </tr>
                </thead>
                <tbody>
                    <People id={id}/>
                </tbody>
            </table>
        </div>
    )
}
export default PeopleTable;