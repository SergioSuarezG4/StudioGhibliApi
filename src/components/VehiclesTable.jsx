import Vehicles from './Vehicles'

const VehiclesTable = ({id}) => {

    return(
        <div>
            <table className='table table-vehicles'>
                <thead>
                    <tr>
                        <th scope='col'>Name</th>
                        <th scope='col'>Description</th>
                        <th scope='col'>Vehicle Class</th>                     
                    </tr>
                </thead>

                <tbody>
                    <Vehicles id={id}/>
                </tbody>
            </table>
        </div>
    )   
}
export default VehiclesTable;