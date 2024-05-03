import React, { useEffect, useState } from 'react';
import getGiphy from '../services/getGiphy';

const useResults = (query) => {
    const [results, setResults] = useState([]);

    const updateResults = async ()=>{
        const newResults = await getGiphy(query);        
        setResults(newResults);         
    }


    useEffect(()=>{
        updateResults()
    }, [query]);

    return {results};
};

export default useResults;