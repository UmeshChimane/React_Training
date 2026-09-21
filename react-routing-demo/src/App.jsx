import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import { Home } from "./components/Home";
import { Dashboard } from "./components/Dashboard";
import { Navbar } from "./components/Navbar";
import ParamComp from "./components/ParamComp";
import { Courses } from "./components/Courses";
import {NotFound} from "./components/NotFound";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Navbar />
          <Home />
        </>
      ),
    },
    {
      path: "/dashboard",
      element: 
        <>
          <Navbar />
          <Dashboard />
        </>
      ,
      children:[
        {
          path:"courses",
          element:<Courses/>
        }
      ]
    },
    {
      path: "/student/:id",
      element: (
        <>
          <Navbar />
          <ParamComp />
        </>
      ),
    },
    {
      path:"*",
      element:<NotFound/>
    }
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
export default App;