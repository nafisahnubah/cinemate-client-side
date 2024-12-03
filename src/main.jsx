import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';
import App from './App';
import AddMovie from './Components/AddMovie';
import UpdateMovie from './Components/UpdateMovie';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },
  {
    path: "/addMovie",
    element: <AddMovie></AddMovie>,
  },
  {
    path: "/updateMovie",
    element: <UpdateMovie></UpdateMovie>,
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
