import { useContext } from "react";
import Footer from "./Footer";
import NavBar from "./NavBar";
import Swal from 'sweetalert2';
import { AuthContext } from "../providers/AuthProvider";

const AddMovie = () => {

    const {error, setError} = useContext(AuthContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const title = form.title.value;

        if(title.length<2){
            setError("Title must have at least 2 characters.");
            return;
        }

        const genre = form.genre.value;

        if(genre === "Genre"){
            setError("Genre is not selected.");
            return;
        }

        const poster = form.poster.value;

        if(!poster.startsWith("http")){
            setError("Poster URL must be a link.");
            return;
        }

        const duration = form.duration.value;

        if(duration<=60){
            setError("Duration must be greater than 60 minutes.");
            return;
        }

        const year = form.year.value;

        if(year === "Released Year"){
            setError("Released Year is not selected.");
            return;
        }

        const rating = form.rating.value;

        if(rating<0 || rating>5){
            setError("Rating must be between 0 and 5.");
            return;
        }

        const summary = form.summary.value;

        if(summary.length<10){
            setError("Summary must be at least 10 characters.");
            return;
        }

        const newMovie = {title, genre, poster, duration, year, rating, summary};

        fetch('http://localhost:5000/addMovie', {
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(newMovie)
        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedId){
                Swal.fire({
                    title: 'Success!',
                    text: 'Movie added successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                })
                form.reset();
                setError('');
            }
        })
    };

    return (
        <div className="bg-teal-50">
            <NavBar></NavBar>
            <h1 className="underline decoration-double decoration-teal-700 md:px-96 my-6 text-center font-extrabold text-4xl">Add a Movie</h1>
            <form className="md:px-96 px-4" onSubmit={handleSubmit}>
                <div className="grid gap-4 my-4">
                    <div className="w-full">
                        <div>
                        <input name="title" required className="w-full input input-bordered" placeholder="Title" />
                        </div>
                    </div>
                    <select name="genre" required className="select select-bordered w-full">
                        <option disabled selected>Genre</option>
                        <option>Sci-fi</option>
                        <option>Drama</option>
                        <option>Action</option>
                        <option>Romance</option>
                        <option>Fantasy</option>
                        <option>History</option>
                        <option>Reality</option>
                        <option>Documentary</option>
                        <option>Mystery</option>
                        <option>Horror</option>
                    </select>
                </div>
                <div className="flex gap-4">
                    <div className="w-full">
                        <div>
                        <input name="poster" className="w-full input input-bordered" placeholder="Poster URL" />
                        </div>
                    </div>
                    <div className="w-full">
                        <div>
                        <input name="duration" required className="w-full input input-bordered" placeholder="Duration (minutes)" />
                        </div>
                    </div>
                </div>
                <div className="grid gap-4 my-4">
                    <select name="year" required className="select select-bordered">
                        <option disabled selected>Released Year</option>
                        <option>2024</option>
                        <option>2023</option>
                        <option>2022</option>
                        <option>2021</option>
                        <option>2020</option>
                        <option>2019</option>
                        <option>2018</option>
                        <option>2017</option>
                        <option>2016</option>
                        <option>2015</option>
                        <option>2014</option>
                        <option>2013</option>
                        <option>2012</option>
                        <option>2011</option>
                        <option>2010</option>
                        <option>2009</option>
                        <option>2008</option>
                        <option>2007</option>
                        <option>2006</option>
                        <option>2005</option>
                        <option>2004</option>
                        <option>2003</option>
                        <option>2002</option>
                        <option>2001</option>
                        <option>2000</option>
                    </select>
                    <div className="w-full">
                        <div>
                        <input name="rating" required className="w-full input input-bordered" placeholder="Rating (1-5)" />
                        </div>
                    </div>
                </div>
                <textarea name="summary" required className="w-full textarea-lg textarea text-base textarea-bordered" placeholder="Summary"></textarea>
                {
                    error && 
                    <p className="text-red-400">{error}</p>
                }
                <input className="my-4 btn rounded-md bg-teal-700 border-none text-white w-full" type="submit" value="Add Movie"/>
            </form>
            <Footer></Footer>
        </div>
    );
};

export default AddMovie;