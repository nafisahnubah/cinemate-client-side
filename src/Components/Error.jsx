import { BiError } from "react-icons/bi";

const Error = () => {
    return (
        <div className="bg-teal-100 pt-40 pb-80">
            <BiError className="text-center text-9xl mx-auto mb-2"/>
            <h1 className='text-teal-900 pb-6 font-extrabold text-7xl text-center'>404</h1>
            <p className="text-center font-semibold text-3xl">Page Not Found!</p>
        </div>
    );
};

export default Error;