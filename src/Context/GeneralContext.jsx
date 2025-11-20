import { createContext, useContext, useState } from "react";
import axios from 'axios';
import { useEffect } from 'react';

const CountContext = createContext();

function GeneralProvider({ children }) {

    const apiUrlDiscover = import.meta.env.VITE_API_URL_DISCOVER;
    const GMkey = import.meta.env.VITE_GOOGLE_MAPS_KEY;
    const apiUrlSearch = import.meta.env.VITE_API_URL_SEARCH;

    // VARIABILI DI STATO

    const [filteredMovies, setFilteredMovies] = useState([])
    const [search, setSearch] = useState("")
    const [popularMovies, setPopularMovies] = useState([]);

    // CHIAMATA API PER FAVOURITE MOVIES

    useEffect(() => {
        const options = {
            method: 'GET', url: apiUrlDiscover, params: { key: GMkey, include_adult: 'false', include_video: 'false', language: 'it-IT', page: '1', sort_by: 'popularity.desc' },
            headers: {
                accept: 'application/json', Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4YjJkNDIzZWFiNWQyYzM3OWYyMzNkMGQyN2JlM2JmNyIsIm5iZiI6MTc2MzU0OTA1MS4wODYwMDAyLCJzdWIiOiI2OTFkOWY3YjQ3MGYwOWQ1MzJjMmE4OGQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.UXORCe1oWCPbLm2J7NpYe7V83hhGyPCaARVFWyTm_FU'
            }
        }
        axios.request(options)
            .then(res => {
                setFilteredMovies(res.data.results)
                setPopularMovies(res.data.results)
            })
            .catch(err => console.error(err))
    }, [])

    // CHIAMATA API PER FILTERED MOVIE AL CLICK

    const handleSearch = () => {

        const options = {
            method: 'GET', url: apiUrlSearch, params: { query: search, include_adult: 'false', language: 'it-IT', page: '1' },
            headers: {
                accept: 'application/json', Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4YjJkNDIzZWFiNWQyYzM3OWYyMzNkMGQyN2JlM2JmNyIsIm5iZiI6MTc2MzU0OTA1MS4wODYwMDAyLCJzdWIiOiI2OTFkOWY3YjQ3MGYwOWQ1MzJjMmE4OGQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.UXORCe1oWCPbLm2J7NpYe7V83hhGyPCaARVFWyTm_FU'

            }
        }

        axios
            .request(options)
            .then(res => search.length > 0 ? setFilteredMovies(res.data.results) : setFilteredMovies(popularMovies))
            .catch(err => { console.log(err) })
    }

    return (
        <CountContext.Provider value={{ search, setSearch, filteredMovies, handleSearch }}>
            {children}
        </CountContext.Provider>
    )
}

function useData() {
    return useContext(CountContext);
}

export { GeneralProvider, useData }