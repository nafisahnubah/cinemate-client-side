const MovieCard = (movie) => {
    const {title, genre, poster, duration, year, rating, summary} = movie.movie;
    console.log(movie)
    return (
        <div className="card card-side bg-teal-50 shadow-xl">
            <figure>
                <img
                className="w-full p-4"
                src={poster}
                alt="Movie" />
            </figure>
            <div className="card-body">
                <h2 className="card-title text-teal-900">{title}</h2>
                <p>{summary}</p>
                <div className="card-actions justify-end">
                <button className="btn rounded-md bg-teal-700 border-none text-white w-full">Details</button>
                </div>
            </div>
        </div>
    );
};

export default MovieCard;