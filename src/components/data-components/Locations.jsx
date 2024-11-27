import useFetchData from '../../hooks/useFetchData';
import Loading from '../loading/Loading';
import DataTable from '../table/DataTable';


const Locations = ({id}) => {

    const {filterItem, isLoading} = useFetchData({ name:'locations', id })

    const columns = [
        { label: "Name" },
        { label: "Climate" },
        { label: "Terrain" },
      ];
    
    if(isLoading){
        return <Loading></Loading>
    }
    return(
        <>
        <DataTable filterItem={filterItem} columns={columns}></DataTable>           
        </>
    )
}

export default Locations;