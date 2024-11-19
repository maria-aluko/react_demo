import { createBrowserRouter } from "react-router-dom";
import About from "../pages/About";
import List from "../pages/List";
import Root from "../pages/Root";
import ErrorPage from "../pages/ErrorPage";

export const router = createBrowserRouter([
  { 
    path: '/', 
    element: <Root />, 
    errorElement: <ErrorPage/>, 
    children: [
      { path: '/list', element: <List /> },
      { path: '/about', element: <About /> },
  ],
},  
]);