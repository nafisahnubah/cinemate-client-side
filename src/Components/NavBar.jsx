import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const NavBar = () => {

    let showName = false;

    const {user, signOutUser} = useContext(AuthContext);

    const handleMouseOverProfile = () => {
        showName = true;
    }

    const handleMouseOutProfile = () => {
        showName = false;
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
                {
                    user && 
                    <div className="w-10">
                        <img
                            onMouseOver={handleMouseOverProfile}
                            onMouseOut={handleMouseOutProfile}
                            className="rounded-full"
                            alt="Tailwind CSS Navbar component"
                            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                    </div>
                }
                {
                    showName && user &&
                    <p>{user.name}</p>
                }
            </div>
        </div>
    );
};

export default NavBar;