import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import {RouterProvider, createBrowserRouter} from "react-router-dom";
import BackOfficeApp from "./backOffice/BackOfficeApp.jsx";
//import { Authenticator } from "@aws-amplify/ui-react";

// ReactDOM.createRoot(document.getElementById("root")).render(
//     <React.StrictMode>
//         <Authenticator>
//             <App />
//         </Authenticator>
//     </React.StrictMode>
// );

const router = createBrowserRouter([
    {path: '/', element: <App />},
    {path: '/BackOffice', element: <BackOfficeApp />}
])

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router = {router} />
    </React.StrictMode>
);