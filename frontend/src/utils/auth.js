// Save logged-in user details

export const setUser = (user) => {

    localStorage.setItem(
        "user",
        JSON.stringify(user)
    );

};




// Get logged-in user details

export const getUser = () => {

    return JSON.parse(

        localStorage.getItem("user")

    );

};




// Check whether user is logged in

export const isAuthenticated = () => {

    return localStorage.getItem("user") !== null;

};




// Get user role

export const getRole = () => {


    const user = getUser();


    return user ? user.role : null;


};




// Logout user

export const logout = () => {

    localStorage.removeItem("user");

};