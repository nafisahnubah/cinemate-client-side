import { useContext } from "react";
import logo from "../assets/logo.png";
import { AuthContext } from "../providers/AuthProvider";
import { Link, useNavigate } from "react-router-dom";

const SignIn = () => {

    const {signInUser, setUser, error, setError} = useContext(AuthContext);
    const navigate = useNavigate();
    setError('');

    const handleSignIn = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        signInUser(email, password)
        .then((userCredential) => {
        console.log(userCredential.user);
        const user = {name, email};
        setUser(user);
        setError('');
        navigate('/');
        })
        .catch((error) => {
            const errorMessage = error.message;
            setError(errorMessage);
        });
    }

    return (
        <div className="bg-teal-900 py-12">
            <div className="card bg-teal-50 w-full max-w-sm mx-auto shrink-0 shadow-2xl">
                <h1 className="underline decoration-double decoration-teal-700 m-4 text-center font-extrabold text-4xl">Sign In</h1>
                <img src={logo} className="w-1/2 mx-auto" alt="Logo" />
                <form onSubmit={handleSignIn} className="card-body pt-0 pb-2">
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" placeholder="Name" name="name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                    <label className="label">
                        <p>New to CineMate? <Link to={'/signup'} className="underline decoration-solid decoration-teal-700">Sign Up</Link> </p>
                    </label>
                    </div>
                    {
                        error &&
                        <p className="text-red-400">${error}</p>
                    }
                    <div className="form-control m-6">
                    <button className="btn rounded-md bg-teal-700 border-none text-white">Sign In</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignIn;