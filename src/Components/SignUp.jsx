import { useContext } from "react";
import logo from "../assets/logo.png";
import { AuthContext } from "../providers/AuthProvider";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {

    const {createUser, setUser, error, setError} = useContext(AuthContext);
    const navigate = useNavigate();
    setError('');

    const handleSignUp = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password)

        createUser(email, password)
        .then(result => {
            console.log(result.user);
            const newUser = {name, email};
            fetch('http://localhost:5000/users', {
                method: 'POST',
                headers: {
                    'content-type' : 'application/json'
                },
                body: JSON.stringify(newUser)
            })
            .then(res => res.json())
            .then(data => {
                if(data.insertedId){
                    Swal.fire("Your account has been created!");
                }
                setUser(newUser);
                setError('');
                navigate('/');
            })
        })
        .catch(error => {
            const errorMessage = error.message;
            setError(errorMessage);
        })
    }

    return (
        <div className="bg-teal-900 py-12">
            <div className="card bg-teal-50 w-full max-w-sm mx-auto shrink-0 shadow-2xl">
                <h1 className="underline decoration-double decoration-teal-700 m-4 text-center font-extrabold text-4xl">Sign Up</h1>
                <img src={logo} className="w-1/2 mx-auto" alt="Logo" />
                <form onSubmit={handleSignUp} className="card-body pt-0">
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
                    <input type="email" placeholder="Email" name="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" placeholder="Password" name="password" className="input input-bordered" required />
                    <label className="label">
                        <p>Already have an account? <Link to={'/signin'} className="underline decoration-solid decoration-teal-700">Sign In</Link> </p>
                    </label>
                    </div>
                    {
                        error &&
                        <p className="text-red-400">${error}</p>
                    }
                    <div className="form-control mt-6">
                        <button className="btn rounded-md bg-teal-700 border-none text-white">Sign up</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignUp;