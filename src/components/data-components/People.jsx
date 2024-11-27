import DataTable from "../table/DataTable";
import Loading from "../loading/Loading";
import useFetchData from "../../hooks/useFetchData";

const People = ({ id }) => {

  const { filterItem, isLoading } = useFetchData({name:'people' , id });

  const columns = [
    { label: "Name" },
    { label: "Age" },
    { label: "Gender" },
  ];


  if (isLoading) {
    return <Loading></Loading> 
  }

  return (
    <>
      <DataTable filterItem={filterItem} columns={columns}></DataTable>
    </>
  );
};

export default People;
