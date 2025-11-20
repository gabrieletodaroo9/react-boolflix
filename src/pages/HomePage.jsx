import SearchBar from "../components/SearchBar"
import { useData } from "../Context/GeneralContext"


export default function HomePage() {

    const { filteredMovies } = useData()


    return (
        <>
            <div className="container">
                <SearchBar />
                <div className="row" >
                    {filteredMovies &&
                        filteredMovies.map(obj => (
                            <div key={obj.id} className="col-12 col-md-6 col-lg-4">
                                <div className="card">
                                    <div className="card-header">
                                        <img className="card-img-top" src={`https://image.tmdb.org/t/p/w300/${obj.backdrop_path}`} alt="" />
                                    </div>
                                    <div className="card-body">
                                        <h1 > {obj.original_title}</h1>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>


        </>
    )
}