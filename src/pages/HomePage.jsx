import TvSection from '../components/TvSection'
import MoviesSection from "../components/MoviesSection"
import SearchBar from "../components/SearchBar"


export default function HomePage() {

    return (
        <>
            <div className="container">
                <SearchBar />
                <MoviesSection />
                <TvSection />
            </div>
        </>
    )
}