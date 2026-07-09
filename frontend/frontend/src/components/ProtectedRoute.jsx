import { Navigate } from "react-router-dom";

import { 
    isAuthenticated,
    getRole
} from "../utils/auth";



function ProtectedRoute({ children, adminOnly = false }) {



    // Check login status

    if (!isAuthenticated()) {


        return (

            <Navigate 
                to="/" 
                replace 
            />

        );


    }






    // Check admin access

    if(adminOnly && getRole() !== "ADMIN"){


        return (

            <Navigate

                to="/dashboard"

                replace

            />

        );


    }







    return children;


}



export default ProtectedRoute;