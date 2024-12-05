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
import PrivateRoute from './PrivateRoute';
import Favourites from './Components/Favourites';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>
  },
  {
    path: "/movie/:id",
    element: (
      <PrivateRoute>
        <MovieDetails></MovieDetails>
      </PrivateRoute>
    ),
    loader: ({params}) => fetch(`http://localhost:5000/movie/${params.id}`),
  },
  {
    path: "/allMovies",
    element: <AllMovies></AllMovies>,
    loader: () => fetch('http://localhost:5000/addMovie'),
  },
  {
    path: "/addMovie",
    element: (
      <PrivateRoute>
        <AddMovie></AddMovie>
      </PrivateRoute>
    ),
  },
  {
    path: "/favourites",
    element: (
      <PrivateRoute>
        <Favourites></Favourites>
      </PrivateRoute>
    ),
  },
  {
    path: "/updateMovie/:id",
    element: (
      <PrivateRoute>
        <UpdateMovie></UpdateMovie>
      </PrivateRoute>
    ),
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
