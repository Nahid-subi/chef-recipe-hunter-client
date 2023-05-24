import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from './components/ErrorPage.jsx';
import Home from './components/Home/Home.jsx';
import Login from './components/Login-Register/Login.jsx';
import Register from './components/Login-Register/Register.jsx';
import Blog from './components/Blog.jsx';
import ChefDetail from './components/Home/ChefDetail.jsx';
import { Toaster } from 'react-hot-toast';
import PrivateRoute from './Routes/PrivateRoute.jsx';




const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
      {
        path:'/',
        element:<Home></Home>,
        loader: ()=>fetch("https://recipe-server-side-nahid-subi.vercel.app/data"),
      },
      {
        path:'blog',
        element:<Blog></Blog>,
      },
      {
        path:'login',
        element:<Login></Login>,
      },
      {
        path:'register',
        element:<Register></Register>,
      },
      {
        path: "chefdetail/:id",
        element:<PrivateRoute><ChefDetail></ChefDetail>,</PrivateRoute>,
        loader: ({params}) => fetch(`https://recipe-server-side-nahid-subi.vercel.app/data/${params.id}`)
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <Toaster></Toaster>
  </React.StrictMode>,
)
