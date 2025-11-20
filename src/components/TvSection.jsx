import { useData } from "../Context/GeneralContext"
import Card from "./Card"

export default function TvSection() {

    const { filteredTv } = useData()

    return (
        <>
            <div className="row" >
                <h1 className="fw-bold">Serie TV</h1>
                {filteredTv &&
                    filteredTv.map(obj =>
                        <Card key={obj.id} obj={obj} />
                    )
                }
            </div>
        </>
    )
}