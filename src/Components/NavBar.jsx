import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import { useContext, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { CgProfile } from "react-icons/cg";

const NavBar = () => {
    
    const [showName, setShowName] = useState(false);
    const {user, signOutUser} = useContext(AuthContext);

    const handleMouseOverProfile = () => {
        setShowName(true);
    }

    const handleMouseOutProfile = () => {
        setShowName(false);
    }

    return (
        <div className="navbar bg-teal-900 md:px-12">
            <div className="navbar-start">
                <img src={logo} alt="Logo" className="w-20"/>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 flex gap-4">
                    <li><NavLink to={'/'} className="btn rounded-md bg-teal-700 border-none text-white">Home</NavLink></li>
                    <li><NavLink to={'/allMovies'} className="btn rounded-md bg-teal-700 border-none text-white">All Movies</NavLink></li>
                    <li><NavLink to={'/addMovie'} className="btn rounded-md bg-teal-700 border-none text-white">Add Movie</NavLink></li>
                    <li><NavLink to={'/favourites'} className="btn rounded-md bg-teal-700 border-none text-white">My Favourites</NavLink></li>
                    <li><NavLink to={'/policies'} className="btn rounded-md bg-teal-700 border-none text-white">Our Policies</NavLink></li>
                </ul>
            </div>
            <div className="navbar-end flex gap-4">
                {
                    user? <button onClick={signOutUser} className="btn rounded-md bg-teal-700 border-none text-white">Sign Out</button> : <NavLink to={'/signin'} className="btn rounded-md bg-teal-700 border-none text-white">Sign In</NavLink>
                }
                <div className="relative">
                    {
                        user && 
                        <div className="w-10">
                            <CgProfile onMouseOver={handleMouseOverProfile} onMouseOut={handleMouseOutProfile} className="text-3xl text-white"/>
                        </div>
                    }
                    {
                        showName &&
                        <p className="text-white absolute top-8">{user?.email}</p>
                    }
                </div>
            </div>
        </div>
    );
};

export default NavBar;