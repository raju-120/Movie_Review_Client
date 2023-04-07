import { createBrowserRouter } from "react-router-dom";
import Main from "../LayOut/Main";
import Blog from "../Pages/Blog/Blog";
import Home from "../Pages/Homes/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import CheckOut from "../Pages/CheckOut/CheckOut";
import MyComments from "../Pages/MyComment/MyComments";
import PrivateRoutes from "./PrivateRoutes/PrivateRoutes";



const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children:[
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/mycomments',
                element: <PrivateRoutes><MyComments></MyComments></PrivateRoutes>
            },
            {
                path: '/checkout/:id',
                element: <PrivateRoutes><CheckOut></CheckOut>,</PrivateRoutes>,
                loader: ({params}) => fetch(`http://localhost:5000/reviewLists/${params.id}`)
            }
            
        ]
    }
])

export default router;