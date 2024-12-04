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
import AllMovies from './Components/AllMovies';
import MovieDetails from './Components/MovieDetails';
import SignIn from './Components/SignIn';
import SignUp from './Components/SignUp';
import AuthProvider from './providers/AuthProvider';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>
  },
  {
    path: "/movie/:id",
    element: <MovieDetails></MovieDetails>,
    loader: ({params}) => fetch(`http://localhost:5000/movie/${params.id}`),
  },
  {
    path: "/allMovies",
    element: <AllMovies></AllMovies>,
    loader: () => fetch('http://localhost:5000/addMovie'),
  },
  {
    path: "/addMovie",
    element: <AddMovie></AddMovie>,
  },
  {
    path: "/updateMovie/:id",
    element: <UpdateMovie></UpdateMovie>,
    loader: ({params}) => fetch(`http://localhost:5000/movie/${params.id}`),
  },
  {
    path: "/signin",
    element: <SignIn></SignIn>,
  },
  {
    path: "/signup",
    element: <SignUp></SignUp>,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
