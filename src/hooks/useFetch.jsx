import { useState, useEffect } from "react";

const useFetch =({name}) => {

    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    
    useEffect(() => {
        fetch(`https://ghibliapi.vercel.app/${name}`)
          .then((response) => response.json())
          .then((data) => {
            setData(data);
            setIsLoading(false);   
          })
      }, [name]);
      
    return {data, isLoading};
}

export default useFetch;