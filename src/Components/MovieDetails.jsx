import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { MdDelete } from "react-icons/md";
import { FaEdit, FaHeart } from "react-icons/fa";

const MovieDetails = () => {
    const { id } = useParams();
    console.log("Movie ID:", id);

    const [movie, setMovie] = useState(null);

    useEffect(() => {
        fetch('http://localhost:5000/addMovie')
          .then((res) => res.json())
          .then((data) => {
            const selectedMovie = data.find((el) => el._id === id);
            setMovie(selectedMovie);
          })
          .catch((error) => console.error('Error fetching movie data:', error));
    }, [id]);

    if (!movie) {
        return (
            <div className="flex justify-center my-28">
                <span className="loading loading-bars loading-xs"></span>
                <span className="loading loading-bars loading-sm"></span>
                <span className="loading loading-bars loading-md"></span>
                <span className="loading loading-bars loading-lg"></span>
            </div>
        )
    }

    const {_id, title, genre, poster, duration, year, rating, summary} = movie;

    return (
        <div className='bg-teal-100'>
            <NavBar></NavBar>
            <div className="card card-side bg-teal-50 shadow-xl md:grid-cols-2 grid md:my-20 my-5 md:w-2/3 md:mx-auto mx-5">
                <figure>
                    <img
                    className="w-1/2 p-4 m-0"
                    src={poster}
                    alt="Movie" />
                </figure>
                <div className="card-body grid">
                    <h2 className="card-title text-4xl text-teal-900 font-extrabold">{title}</h2>
                    <div>
                        <p><span className="font-bold">Genre: </span>{genre}</p>
                        <p><span className="font-bold">Duration: </span>{duration} minutes</p>
                        <p><span className="font-bold">Released on: </span>{year}</p>
                        <p><span className="font-bold">Rating: </span>{rating}/5</p>
                        <p><span className="font-bold">Summary: </span>{summary}</p>
                    </div>
                    <div className="card-actions justify-between flex mt-4">
                    <button className="btn rounded-md bg-teal-700 border-none text-white w-1/4 text-2xl"><MdDelete/></button>
                    <button className="btn rounded-md bg-teal-700 border-none text-white w-1/4 text-2xl"><FaEdit/></button>
                    <button className="btn rounded-md bg-teal-700 border-none text-white w-1/4 text-2xl"><FaHeart/></button>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MovieDetails;