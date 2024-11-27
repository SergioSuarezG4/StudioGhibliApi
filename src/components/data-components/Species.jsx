import useFetchData from '../../hooks/useFetchData';
import Loading from '../loading/Loading';
import DataTable from '../table/DataTable';

const Species = ({id}) => {

    const {filterItem, isLoading} = useFetchData({name:'species',id})

    const columns = [
        { label: "Name" },
        { label: "Classification" },
        { label: "Eye Color" },
      ];
    
    if(isLoading){
        return <Loading></Loading>
    }

    return(
        <> 
        <DataTable filterItem={filterItem} columns={columns} ></DataTable>
        </>

    )
}

export default Species;