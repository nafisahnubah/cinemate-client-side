import { useContext } from "react";
import { AuthContext } from "./providers/AuthProvider";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);

    if(loading){
        return (
            <div className="my-60 mx-auto flex justify-center text-teal-900 w-full">
                <span className="loading loading-bars loading-xs"></span>
                <span className="loading loading-bars loading-sm"></span>
                <span className="loading loading-bars loading-md"></span>
                <span className="loading loading-bars loading-lg"></span>
            </div>
        )
    }
    if(user){
        return children;
    }
    return <Navigate to={'/signin'}></Navigate>
};

export default PrivateRoute;