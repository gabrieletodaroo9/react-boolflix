import { useData } from "../Context/GeneralContext"

export default function SearchBar() {

    const { search, setSearch, handleSearch } = useData()

    return (
        <>
            <div className="input-group mb-3">
                <input type="search" className="form-control-sm bg-dark" placeholder="Scrivi un film..." value={search} onChange={e => setSearch(e.target.value)} />
                <button className="btn btn-outline-dark" type="button" id="button-addon2" onClick={handleSearch}>Cerca</button>
            </div>
        </>
    )
}