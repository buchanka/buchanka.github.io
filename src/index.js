import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import MainPage from './assets/pages/MainPage';
import SignIn from './assets/pages/SignIn';
import './assets/pages/SignUp+SignIn.css'
import SignUp from './assets/pages/SignUp';


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage/>,
  },

  {
    path:"/signup",
    element:<SignUp/>
  },

  {
    path:"/signin",
    element:<SignIn/>
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);





