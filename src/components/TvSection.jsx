import { useData } from "../Context/GeneralContext"
import Card from "./Card"

export default function TvSection() {

    const { filteredTv } = useData()

    return (
        <>
            <div className="row g-5 mt-4 pb-5" >
                <h1 className="fw-bold my-4 text-second">Serie TV</h1>
                {filteredTv &&
                    filteredTv.map(obj =>
                        <Card key={obj.id} obj={obj} />
                    )
                }
            </div>
        </>
    )
}