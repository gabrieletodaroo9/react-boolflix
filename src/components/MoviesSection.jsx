import { useData } from "../Context/GeneralContext"
import Card from "./Card"

export default function MoviesSection() {

    const { filteredMovies } = useData()

    return (
        <>
            <div className="row g-5 pt-4" >
                <h1 className="fw-bold my-4 text-second text-center">Film</h1>
                {filteredMovies &&
                    filteredMovies.map(obj =>
                        <Card key={obj.id} obj={obj} />
                    )
                }
            </div>
        </>
    )
}