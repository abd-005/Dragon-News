import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";

const router= createBrowserRouter(
    [
        {
            path:'/',
            element:<HomeLayout />
        }, 
        {
            path:'/auth',
            element:<h2>Authenticate Layout</h2>
        }, 
        {
            path:'/news',
            element:<h2>News</h2>
        }, 
        {
            path:'/*',
            element:<h2>404-not-found</h2>
        }, 
    ]
);

export default router;

 