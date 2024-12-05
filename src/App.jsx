import { NavLink, useLoaderData } from 'react-router-dom';
import './App.css'
import Footer from './Components/Footer'
import NavBar from './Components/NavBar'
import { MdMovieFilter } from "react-icons/md";
import MovieCard from './Components/MovieCard';

function App() {
  
  const movies = useLoaderData();
  
  return (
    <div className='bg-teal-100'>
      <NavBar></NavBar>
      <div className='flex justify-center md:px-12 gap-16 py-8 bg-teal-50'>
        <div className="carousel carousel-vertical rounded-box h-96">
          <div className="carousel-item h-full">
            <img
              className='w-full'
              src="https://m.media-amazon.com/images/M/MV5BNTU1MzgyMDMtMzBlZS00YzczLThmYWEtMjU3YmFlOWEyMjE1XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
              alt="Harry Potter" />
          </div>
          <div className="carousel-item h-full">
            <img
              className='w-full'
              src="https://m.media-amazon.com/images/M/MV5BMTg0NjEwNjUxM15BMl5BanBnXkFtZTcwMzk0MjQ5Mg@@._V1_.jpg"
              alt="Sherlock Holmes" />
          </div>
          <div className="carousel-item h-full">
            <img
              className='w-full'
              src="https://m.media-amazon.com/images/M/MV5BNzE1OTkwOTkwMV5BMl5BanBnXkFtZTgwNTcwMDk4NTE@._V1_.jpg"
              alt="Frozen" />
          </div>
          <div className="carousel-item h-full">
            <img
              className='w-full'
              src="https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_FMjpg_UX1000_.jpg"
              alt="Inception" />
          </div>
        </div>
        <div className='w-4/6'>
          <h1 className='text-teal-900 my-6 font-extrabold text-5xl'>Welcome to CineMate!</h1>
          <p className='text-lg my-4'>Your ultimate destination for exploring, discovering, and managing your favorite movies. Browse an ever-growing catalog, dive into detailed movie insights, and create your personalized collection—all in one place.</p>
          <p className='flex items-center gap-2 text-lg'><MdMovieFilter/>Add Movies You Love</p>
          <p className='flex items-center gap-2 text-lg'><MdMovieFilter/>Explore Endless Stories</p>
          <p className='flex items-center gap-2 text-lg'><MdMovieFilter/>Save Your Favorites</p>
          <p className='flex items-center gap-2 text-lg'><MdMovieFilter/>Organize with Ease</p>
          <p className='text-lg my-4'>Start your cinematic journey today!</p>
        </div>
      </div>
      <h1 className="underline decoration-double decoration-teal-700 md:px-96 my-6 text-center font-extrabold text-4xl mt-10">Featured Movies</h1>
      <div className='grid md:grid-cols-3 md:mx-12 gap-4 my-4'>
        {
          movies.slice(0, 6).map((movie) => (
          <MovieCard key={movie._id} movie={movie} />
          ))
        }
      </div>
      <div className='md:mx-12'>
        <NavLink to={'/allMovies'} className="btn rounded-md bg-teal-700 border-none text-white mb-4 w-full">See All Movies</NavLink>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default App
