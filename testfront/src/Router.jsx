import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { WithFetch } from "./WithFetch";
import { WithAxios } from "./WithAxios";
import App from './App.jsx'

const router = createBrowserRouter([
    { path: "/", element: <App /> },
    { path: "/home", element: <App /> },
    { path: "/fetch", element: <WithFetch /> },
    { path: "/axios", element: <WithAxios /> },
]);

export const RoutesProvider = () => <RouterProvider router={router} />;