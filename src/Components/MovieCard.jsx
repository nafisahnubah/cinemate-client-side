import { Link } from "react-router-dom";

const MovieCard = (movie) => {
    const {_id, title, genre, poster, duration, year, rating} = movie.movie;
    console.log(movie)
    return (
        <div className="card card-side bg-teal-50 shadow-xl grid-cols-2 grid">
            <figure>
                <img
                className="w-full p-4"
                src={poster}
                alt="Movie" />
            </figure>
            <div className="card-body grid">
                <h2 className="card-title text-teal-900 font-extrabold">{title}</h2>
                <div>
                    <p><span className="font-bold">Genre: </span>{genre}</p>
                    <p><span className="font-bold">Duration: </span>{duration} minutes</p>
                    <p><span className="font-bold">Released on: </span>{year}</p>
                    <p><span className="font-bold">Rating: </span>{rating}/5</p>
                </div>
                <div className="card-actions justify-end">
                <Link to={`/movie/${_id}`} className="w-full"><button className="btn rounded-md bg-teal-700 border-none text-white w-full">Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default MovieCard;