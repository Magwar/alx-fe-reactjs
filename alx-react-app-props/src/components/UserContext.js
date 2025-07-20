//The main use of this file is to create a UserContext
// that can be used to provide user data throughout the application.
// This allows components to access user information without passing
// props down manually at every level.

//UserContext.js exists to define a shared state container (context)
// that can be provided at a high level (like in App.jsx) and consumed deeply
// (like in UserDetails.jsx)—eliminating the need to pass data through intermediate
// components like ProfilePage and UserInfo.
import {createContext, useContext } from "react";

const UserContext = createContext();

export default UserContext;