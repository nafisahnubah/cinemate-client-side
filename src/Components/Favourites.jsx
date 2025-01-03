import { useLoaderData } from "react-router-dom";
import Footer from "./Footer";
import NavBar from "./NavBar";
import FavMovieCard from "./FavMovieCard";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { PiEmptyBold } from "react-icons/pi";

const Favourites = () => {

    const favMovies = useLoaderData();
    const {user} = useContext(AuthContext);

    return (
        <div className='bg-teal-100'>
            <NavBar></NavBar>
            <h1 className="underline decoration-double decoration-teal-700 md:px-96 my-6 text-center font-extrabold text-4xl">Favourites</h1>
            {
                favMovies.length > 0?
                <div className='grid md:grid-cols-3 mx-4 md:mx-12 gap-4 my-4'>
                    {
                        favMovies.filter(elem => elem.user == user.email).map((movie) => (
                        <FavMovieCard key={movie._id} movie={movie}/>
                        ))
                    }
                </div>
                :
                <div className="my-24">
                    <PiEmptyBold className="text-center text-black text-9xl mx-auto"/>
                    <p className="text-center font-semibold text-2xl mt-3">No content to display</p>
                </div>
            }
            <Footer></Footer>
        </div>
    );
};

export default Favourites;