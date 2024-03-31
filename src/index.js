import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";

import "./index.css";
import MainPage from './assets/pages/MainPage';
import SignIn from './assets/pages/SignIn';
import './assets/pages/SignUp+SignIn.css'
import SignUp from './assets/pages/SignUp';
import ErrorPage from './assets/pages/ErrorPage';
//components
import Layout from './layouts/Layouts'



const router = createBrowserRouter([
{
  path: '/',
  element: (
    <Layout>
      <MainPage/>
    </Layout>
  ),
  errorElement:<ErrorPage/>,
},
{
  path:'/signin',
  element:<Layout><SignIn/></Layout>,
},
{
  path: '/signup',
  element: <Layout><SignUp/></Layout>,
},
]);

 



ReactDOM.createRoot(document.getElementById("root")).render(
    <RouterProvider router={router}>
    <Layout/>
    </RouterProvider> 
  
);







