import Species from './Species';

const SpeciesTable = ({id}) => {
    return(
        <div>
            <table className="table table-species">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Classification</th>
                        <th scope="col">Eye Color</th>
                    </tr>
                </thead>
                <tbody>
                    <Species id={id}/>
                </tbody>
            </table>
        </div>
    )
}
export default SpeciesTable;