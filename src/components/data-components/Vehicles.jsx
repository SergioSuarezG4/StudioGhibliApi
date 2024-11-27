import useFetchData from "../../hooks/useFetchData";
import Loading from "../loading/Loading";
import DataTable from "../table/DataTable";


const Vehicles = ({id}) =>{

    const {filterItem, isLoading} = useFetchData({name : 'vehicles', id})

    const columns = [
        { label: "Name" },
        { label: "Description" },
        { label: "Vehicle Class" },
      ];
    
    if(isLoading){
        return <Loading></Loading>
    }
    return(
        <>
        <DataTable filterItem={filterItem} columns={columns}></DataTable>
        </>
    );
}
export default Vehicles;