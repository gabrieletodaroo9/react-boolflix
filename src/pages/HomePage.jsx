import TvSection from '../components/TvSection'
import MoviesSection from "../components/MoviesSection"


export default function HomePage() {

    return (
        <>
            <div className="container">
                <MoviesSection />
                <TvSection />
            </div>
        </>
    )
}