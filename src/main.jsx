import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Components/Root/Root";
import Home from "./Components/Home/Home";
import DonationDetails from "./Components/DonationDetails/DonationDetails";
import Donation from "./Components/Donation/Donation";
import Statistics from "./Components/Statistics/Statistics";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch ('data.json')
      },
      {
        path: "/Donation",
        element: <Donation></Donation>
      },
      {
        path: "/Statistics",
        element: <Statistics></Statistics>
      },

      {
        path: "/Home/:id",
        element: <DonationDetails></DonationDetails>,
        loader: () => fetch('../data.json')
      },


    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    
  </React.StrictMode>
);
