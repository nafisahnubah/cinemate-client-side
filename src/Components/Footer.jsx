import logo from "../assets/logo.png";

const Footer = () => {
    return (
        <footer className="footer footer-center bg-teal-900 text-primary-content md:px-12 pb-10">
            <aside>
                <img src={logo} alt="Logo" className="w-40"/>
                <p className="font-bold">
                A hub for all movie enthusiasts
                </p>
                <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
            </aside>
        </footer>
    );
};

export default Footer;