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

        axios.get(apiUrlDiscoverMovies, { params: { api_key: GMkey, include_adult: 'false', include_video: 'false', language: 'it-IT', page: '1', sort_by: 'popularity.desc' } })
            .then(res => {
                setFilteredMovies(res.data.results)
                setPopularMovies(res.data.results)
            })
            .catch(err => console.error(err))


        axios.get(apiUrlDiscoverTv, { params: { api_key: GMkey, include_adult: 'false', language: 'it-IT', page: '1', sort_by: 'popularity.desc' } })
            .then(res => {
                setFilteredTv(res.data.results)
                setPopularTv(res.data.results)
            })
            .catch(err => console.error(err));
    }, [])

    // CHIAMATA API PER FILTERED MOVIE AL CLICK

    const handleSearch = () => {
        axios.get(apiUrlSearchMovies, { params: { api_key: GMkey, query: search, include_adult: 'false', language: 'it-IT', page: '1' } })
            .then(res => search.length > 0 ? setFilteredMovies(res.data.results) : setFilteredMovies(popularMovies))
            .catch(err => { console.log(err) })

        axios.get(apiUrlSearchTv, { params: { api_key: GMkey, language: 'it-IT', query: search } })
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