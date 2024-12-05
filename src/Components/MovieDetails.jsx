import { Link, NavLink, useLoaderData, useNavigate } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { MdDelete } from "react-icons/md";
import { FaEdit, FaHeart } from "react-icons/fa";
import Swal from "sweetalert2";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const MovieDetails = () => {
    const movie = useLoaderData();
    const navigate = useNavigate();
    const {user} = useContext(AuthContext);

    const {title, genre, poster, duration, year, rating, summary} = movie;
    const id = movie._id;

    const handleFavourite = (movie) => {
        fetch(`http://localhost:5000/favourites/${id}`, {
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify({...movie, user: user.email})
          })
          .then(res => res.json())
          .then(data => {
            if(data.insertedId){
                Swal.fire({
                    title: 'Success!',
                    text: 'Movie added to Favourites',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                })
            }
          })
    }

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
              fetch(`http://localhost:5000/movie/${id}`, {
                method: 'DELETE'
              })
              .then(res => res.json())
              .then(data => {
                if(data.deletedCount > 0){
                    Swal.fire({
                        title: "Deleted!",
                        text: "This movie has been deleted.",
                        icon: "success"
                    });
                    navigate("/allMovies");
                }
              })
            }
          });
    }

    return (
        <div className='bg-teal-100'>
            <NavBar></NavBar>
            <div className="card card-side bg-teal-50 shadow-xl md:grid-cols-2 grid md:mt-20 my-5 md:w-2/3 md:mx-auto mx-5">
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
                    <button onClick={() => handleDelete(id)} className="btn rounded-md bg-teal-700 border-none text-white w-1/4 text-2xl"><MdDelete/></button>
                    <Link to={`/updateMovie/${id}`} className="w-1/4"><button className="btn rounded-md bg-teal-700 border-none text-white w-full text-2xl"><FaEdit/></button></Link>
                    <button onClick={() => handleFavourite(movie)} className="btn rounded-md bg-teal-700 border-none text-white w-1/4 text-2xl"><FaHeart/></button>
                    </div>
                </div>
            </div>
            <div className='md:mb-20 md:w-2/3 md:mx-auto mx-5'>
                <NavLink to={'/allMovies'} className="btn rounded-md bg-teal-700 border-none text-white mb-4 w-full">See All Movies</NavLink>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MovieDetails;