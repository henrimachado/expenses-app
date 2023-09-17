import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

//Page imports
import Dashboard, { dashboardAction, dashboardLoader } from "./pages/Dashboard";
import { Error } from "./pages/Error";
import { Overview } from "./pages/Overview";

//Lib imports
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//Actions
import { logoutAction } from "./actions/logout";





const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
    loader: dashboardLoader,
    action: dashboardAction,
    errorElement: <Error />,
    children: [
      
      {
        path: "logout",
        action: logoutAction
      },
      
    ]
  },
  
  {
    path: "overview",
    element: <Overview />

  },
  

]);


function App() {

  return <div className="App">
    <RouterProvider router={router} />
    <ToastContainer />
  </div>;
}

export default App
