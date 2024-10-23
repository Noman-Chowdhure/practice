import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Layout from "./layout/Layout";
import Home from "./component/home/Home";
import Login from "./component/login/Login";
import Info from "./component/info/Info";

const router = createBrowserRouter([
  {
    path: "/",
    element:<Layout></Layout>,
    children:[
      {
        path:'/',
        element:<Home></Home>,
        loader:()=> fetch('http://localhost:3000/user')
      },
      {
        path:'info/:id',
        element:<Info></Info>,
        loader:({params})=>fetch(`http://localhost:3000/user/${params.id}`)
      },
      {
        path:'/login',
        element:<Login></Login>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
