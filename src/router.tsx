import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import HomePage from "./page/HomePage";
import CartPage from "./page/CartPage";

export const router = createBrowserRouter([
    {
        path:'/',
        Component:App,
        children:[
            {
                path:'',
                Component:HomePage
            },
            {
                path:'cart',
                Component:CartPage
            }
        ]
    }
])