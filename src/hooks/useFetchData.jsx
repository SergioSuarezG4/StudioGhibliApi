import { useState, useEffect } from "react";

const useFetchData = ({ name, id }) => {

  const [data, setData] = useState([]);       
  const [filterItem, setFilterItem] = useState([]);
  const [isLoading, setLoading] = useState(true); 

  useEffect(() => {
    fetch(`https://ghibliapi.vercel.app/${name}`)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setLoading(false);   
      })
  }, [name]); 

  useEffect(() => {
    if (data.length > 0 && id) {
      const filteredItems = data.filter((item) =>
        item.films.some((filmUrl) => filmUrl.includes(id))
      );
      setFilterItem(filteredItems);
    }
  }, [data, id]); 

  return {filterItem, isLoading };
};

export default useFetchData;
