import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";

//styles
import './assets/pages/FormsStyles.css'
import "./index.css";
//pages
import MainPage from './assets/pages/MainPage';
import SignIn from './assets/pages/SignIn';
import SignUp from './assets/pages/SignUp';
import ErrorPage from './assets/pages/ErrorPage';
import MessagesPage from "./assets/pages/MessagesPage";
import SupportPage from "./assets/pages/SupportPage";
import CommunityPage from "./assets/pages/CommunityPage";
import ProfilePage from "./assets/pages/ProfilePage";
import SubscribePage from "./assets/pages/SubscribePage";
//components
import Layout1 from './layouts/Layout1';
import Layout2 from './layouts/Layout2';



const router = createBrowserRouter([
{
  path: '/',
  element: (
    <Layout1>
      <MainPage/>
    </Layout1>
  ),
  errorElement:<ErrorPage/>,
},
{
  path:'/signin',
  element:<Layout1><SignIn/></Layout1>,
},
{
  path: '/signup',
  element: <Layout1><SignUp/></Layout1>,
},

{
 path: '/messages',
 element: <Layout2><MessagesPage/></Layout2>
},

{
 path: '/help',
 element: <Layout1><SupportPage/></Layout1>
},

{
  path: '/community',
  element: <Layout2><CommunityPage/></Layout2>
 },

 {
  path: '/profile',
  element: <Layout2><ProfilePage/></Layout2>
 },

 {
  path: '/subscribe',
  element: <Layout2><SubscribePage/></Layout2>
 },

]);

 



ReactDOM.createRoot(document.getElementById("root")).render(
    <RouterProvider router={router}>
    <Layout1/>
    </RouterProvider> 
  
);







