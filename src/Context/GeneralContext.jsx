import { createContext, useContext, useState } from "react";
import axios from 'axios';
import { useEffect } from 'react';

const CountContext = createContext();

function GeneralProvider({ children }) {

    const [data, setData] = useState([]);
    const apiUrl = import.meta.env.VITE_API_URL;
    const GMkey = import.meta.env.VITE_GOOGLE_MAPS_KEY;

    useEffect(() => {
        const options = {
            method: 'GET',
            url: apiUrl,
            params: {
                key: GMkey,
                include_adult: 'false',
                include_video: 'false',
                language: 'it-IT',
                page: '6',
                sort_by: 'popularity.desc'
            },
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4YjJkNDIzZWFiNWQyYzM3OWYyMzNkMGQyN2JlM2JmNyIsIm5iZiI6MTc2MzU0OTA1MS4wODYwMDAyLCJzdWIiOiI2OTFkOWY3YjQ3MGYwOWQ1MzJjMmE4OGQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.UXORCe1oWCPbLm2J7NpYe7V83hhGyPCaARVFWyTm_FU'
            }
        };

        axios
            .request(options)
            .then(res => {
                setData(res.data.results)
                console.log(res.data.results)
            }
            )
            .catch(err => console.error(err));
    }, [])


    return (
        <CountContext.Provider value={{ data, setData }}>
            {children}
        </CountContext.Provider>
    )
}

function useData() {
    return useContext(CountContext);
}

export { GeneralProvider, useData }