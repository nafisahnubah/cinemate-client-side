import { useLoaderData } from "react-router-dom";
import Footer from "./Footer";
import MovieCard from "./MovieCard";
import NavBar from "./NavBar";

const AllMovies = () => {

    const movies = useLoaderData();
    
    return (
        <div className='bg-teal-100'>
            <NavBar></NavBar>
            <h1 className="underline decoration-double decoration-teal-700 md:px-96 my-6 text-center font-extrabold text-4xl">All Movies</h1>
            <div className='grid md:grid-cols-3 md:mx-12 mx-4 gap-4 my-4'>
            {
                movies.map((movie) => (
                <MovieCard key={movie._id} movie={movie} />
                ))
            }
            </div>
            <Footer></Footer>
        </div>
    );
};

export default AllMovies;