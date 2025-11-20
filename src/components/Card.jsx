import noImg from '../assets/img-noimg.jpg';


export default function Card({ obj }) {

    const lang = obj.original_language
    const flagCode = (lang === 'en') ? 'gb' : (lang === 'ja') ? 'jp' : (lang === 'zh') ? 'cn' : lang;

    const starRating = Math.ceil(obj.vote_average / 2);
    const stars = []

    for (let i = 0; i < 5; i++) {
        const starClass = i < starRating ? 'bi bi-star-fill text-warning pe-1' : 'bi bi-star text-secondary pe-1'
        stars.push(<i key={i} className={starClass}></i>)
    }

    return (
        <div className="col-12 col-md-6 col-lg-4">
            <div className="card h-100">
                <div className="card-header">
                    <img className="card-img-top" src={obj.backdrop_path ? `https://image.tmdb.org/t/p/w300/${obj.backdrop_path}` : noImg} />
                </div>
                <div className="card-body">
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