import logo from "../assets/logo.png";

const SignIn = () => {

    const handleSignIn = (e) => {
        e.preventDefault();
        const form = e.target;

    }

    return (
        <div className="bg-teal-900 py-10">
            <div className="card bg-teal-50 w-full max-w-sm mx-auto shrink-0 shadow-2xl">
                <h1 className="underline decoration-double decoration-teal-700 m-4 text-center font-extrabold text-4xl">Sign In</h1>
                <img src={logo} className="w-5/6 mx-auto" alt="Logo" />
                <form onSubmit={handleSignIn} className="card-body pt-0">
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
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                    </div>
                    <div className="form-control mt-6">
                    <button className="btn rounded-md bg-teal-700 border-none text-white">Sign In</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignIn;