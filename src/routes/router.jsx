import { createBrowserRouter } from "react-router";

const router= createBrowserRouter(
    [
        {
            path:'/',
            element:<h2>Home Layout</h2>
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

 