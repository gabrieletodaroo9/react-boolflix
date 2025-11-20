import { Link } from 'react-router-dom'
import logoBoolfix from '../assets/logo-boolfix.png'
import SearchBar from "../components/SearchBar"

export default function Header() {
    return (
        <>
            <header className='bg-black'>
                <div className="container-fluid d-flex justify-content-between align-items-center text-white py-3 px-5">
                    <div className='me-4'>
                        <Link to="/">
                            <img className='logo' src={logoBoolfix} alt="Logo Boolfix" />
                        </Link>
                    </div>
                    <div>
                        <ul className='d-flex align-items-center list-unstyled mb-0 gap-4'>
                            <li>
                                <Link className='text-second text-decoration-none fw-bold'>Home</Link>
                            </li>
                            <li>
                                <Link className='text-second text-decoration-none fw-bold'>Film</Link>
                            </li>
                            <li>
                                <Link className='text-second text-decoration-none fw-bold'>Serie TV</Link>
                            </li>
                            <li>
                                <Link className='text-second text-decoration-none fw-bold'>Popolari</Link>
                            </li>
                            <li>
                                <Link className='text-second text-decoration-none fw-bold'>Social</Link>
                            </li>
                        </ul>
                    </div>
                    <div className='align-self-end'>
                        <SearchBar />
                    </div>
                </div>
            </header>
        </>
    )
}