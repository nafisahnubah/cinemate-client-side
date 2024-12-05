import Swal from "sweetalert2";

const FavMovieCard = (movie) => {
    const {_id, title, genre, poster, duration, year, rating} = movie.movie;
    console.log(movie)

    const handleRemove = (id) => {
        console.log(id)
        Swal.fire({
            title: "Are you sure you want to remove this movie from Favourites?",
            text: "You can Like it again later.",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, remove it!"
          }).then((result) => {
            if (result.isConfirmed) {
              fetch(`http://localhost:5000/favourites/${id}`, {
                method: 'DELETE'
              })
              .then(res => res.json())
              .then(data => {
                console.log(data)
                if(data.deletedCount > 0){
                    Swal.fire({
                        title: "Removed!",
                        text: "This movie has been removed.",
                        icon: "success"
                    });
                    window.location.reload(); 
                }
              })
            }
          });
    }

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
                <div className="card-actions w-full">
                    <button onClick={() => handleRemove(_id)} className="btn rounded-md bg-teal-700 border-none text-white w-full">Remove</button>
                </div>
            </div>
        </div>
    );
};

export default FavMovieCard;