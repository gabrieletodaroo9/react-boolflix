import { useData } from "../Context/GeneralContext"
import Card from "./Card"

export default function MoviesSection() {

    const { filteredMovies } = useData()

    return (
        <>
            <div className="row" >
                <h1 className="fw-bold">Film</h1>
                {filteredMovies &&
                    filteredMovies.map(obj =>
                        <Card key={obj.id} obj={obj} />
                    )
                }
            </div>
        </>
    )
}