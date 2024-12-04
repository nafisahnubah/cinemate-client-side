import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

const NavBar = () => {
    return (
        <div className="navbar bg-teal-900 md:px-12">
            <div className="navbar-start">
                <img src={logo} alt="Logo" className="w-20"/>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 flex gap-4">
                    <li><NavLink className="btn rounded-md bg-teal-700 border-none text-white">Home</NavLink></li>
                    <li><NavLink className="btn rounded-md bg-teal-700 border-none text-white">All Movies</NavLink></li>
                    <li><NavLink className="btn rounded-md bg-teal-700 border-none text-white">Add Movie</NavLink></li>
                    <li><NavLink className="btn rounded-md bg-teal-700 border-none text-white">My Favourites</NavLink></li>
                    <li><NavLink className="btn rounded-md bg-teal-700 border-none text-white">Our Policies</NavLink></li>
                </ul>
            </div>
            <div className="navbar-end flex gap-4">
                <NavLink className="btn rounded-md bg-teal-700 border-none text-white">Login</NavLink>
                <div className="w-10">
                <img
                    className="rounded-full"
                    alt="Tailwind CSS Navbar component"
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                </div>
            </div>
        </div>
    );
};

export default NavBar;