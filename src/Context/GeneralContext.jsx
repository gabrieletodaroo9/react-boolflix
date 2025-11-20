import { createContext, useContext, useState } from "react";
import axios from 'axios';
import { useEffect } from 'react';

const CountContext = createContext();

function GeneralProvider({ children }) {

    const apiUrlDiscoverMovies = import.meta.env.VITE_API_URL_DISCOVER_MOVIE;
    const GMkey = import.meta.env.VITE_GOOGLE_MAPS_KEY;
    const apiUrlSearchMovies = import.meta.env.VITE_API_URL_SEARCH_MOVIE;
    const apiUrlSearchTv = import.meta.env.VITE_API_URL_SEARCH_TV;
    const apiUrlDiscoverTv = import.meta.env.VITE_API_URL_DISCOVER_TV;

    // VARIABILI DI STATO


    const [filteredMovies, setFilteredMovies] = useState([])
    const [popularMovies, setPopularMovies] = useState([])
    const [filteredTv, setFilteredTv] = useState([])
    const [popularTv, setPopularTv] = useState([])
    const [search, setSearch] = useState("")

    // CHIAMATA API PER FAVOURITE MOVIES

    useEffect(() => {
        const options = {
            method: 'GET', url: apiUrlDiscoverMovies, params: { key: GMkey, include_adult: 'false', include_video: 'false', language: 'it-IT', page: '1', sort_by: 'popularity.desc' },
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

        const options2 = {
            method: 'GET', url: apiUrlDiscoverTv, params: {
                include_adult: 'false', language: 'it-IT', page: '1', sort_by: 'popularity.desc'
            },
            headers: {
                accept: 'application/json', Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4YjJkNDIzZWFiNWQyYzM3OWYyMzNkMGQyN2JlM2JmNyIsIm5iZiI6MTc2MzU0OTA1MS4wODYwMDAyLCJzdWIiOiI2OTFkOWY3YjQ3MGYwOWQ1MzJjMmE4OGQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.UXORCe1oWCPbLm2J7NpYe7V83hhGyPCaARVFWyTm_FU'
            }
        };

        axios
            .request(options2)
            .then(res => {
                setFilteredTv(res.data.results)
                setPopularTv(res.data.results)
            })
            .catch(err => console.error(err));


    }, [])

    // CHIAMATA API PER FILTERED MOVIE AL CLICK

    const handleSearch = () => {

        const options = {
            method: 'GET', url: apiUrlSearchMovies, params: { query: search, include_adult: 'false', language: 'it-IT', page: '1' },
            headers: {
                accept: 'application/json', Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4YjJkNDIzZWFiNWQyYzM3OWYyMzNkMGQyN2JlM2JmNyIsIm5iZiI6MTc2MzU0OTA1MS4wODYwMDAyLCJzdWIiOiI2OTFkOWY3YjQ3MGYwOWQ1MzJjMmE4OGQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.UXORCe1oWCPbLm2J7NpYe7V83hhGyPCaARVFWyTm_FU'

            }
        }

        axios
            .request(options)
            .then(res => search.length > 0 ? setFilteredMovies(res.data.results) : setFilteredMovies(popularMovies))
            .catch(err => { console.log(err) })


        const options2 = {
            method: 'GET',
            url: apiUrlSearchTv,
            params: { api_key: GMkey, language: 'it-IT', query: search },
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4YjJkNDIzZWFiNWQyYzM3OWYyMzNkMGQyN2JlM2JmNyIsIm5iZiI6MTc2MzU0OTA1MS4wODYwMDAyLCJzdWIiOiI2OTFkOWY3YjQ3MGYwOWQ1MzJjMmE4OGQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.UXORCe1oWCPbLm2J7NpYe7V83hhGyPCaARVFWyTm_FU'
            }
        };

        axios
            .request(options2)
            .then(res => search.length > 0 ? setFilteredTv(res.data.results) : setFilteredTv(popularTv))
            .catch(err => console.error(err));
    }

    return (
        <CountContext.Provider value={{ search, setSearch, filteredMovies, filteredTv, handleSearch }}>
            {children}
        </CountContext.Provider>
    )
}

function useData() {
    return useContext(CountContext);
}

export { GeneralProvider, useData }