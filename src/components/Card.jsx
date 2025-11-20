import { useEffect } from 'react';
import noImg from '../assets/img-noimg.png';


export default function Card({ obj }) {

    const lang = obj.original_language
    const flagCode = (lang === 'en') ? 'gb' : (lang === 'ja') ? 'jp' : (lang === 'zh') ? 'cn' : lang;

    const starRating = Math.ceil(obj.vote_average / 2);
    const stars = []

    for (let i = 0; i < starRating; i++) {
        stars.push(<i key={`fill${i}`} className=" bi bi-star-fill text-warning pe-1"></i>)
    }
    for (let i = starRating; i < 5; i++) {
        stars.push(<i key={`unfill${i}`} className="bi bi-star text-secondary pe-1"></i>)
    }

    return (
        <div className="col-6 col-lg-4 col-xxl-3">
            <div className="card position-relative border-0 h-100 bg-black rounded-5">
                <div className='p-0 m-0 ratio-2x3'>
                    <img className="card-img-top object-fit-cover d-block" src={obj.poster_path ? `https://image.tmdb.org/t/p/w300/${obj.poster_path}` : noImg} />
                </div>
                <div className="position-absolute card-overlay text-second">
                    <h1 > {obj.original_title ? obj.original_title : obj.original_name}</h1>
                    <div className="mb-3">
                        {stars}
                    </div>
                    <p className="card-text">
                        Lingua Originale:{flagCode ? <span className={`fi fi-${flagCode} ms-2`}></span> : <span>{obj.original_language}</span>}
                    </p>
                </div>
            </div>
        </div>
    )

}