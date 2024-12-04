import './App.css'
import Footer from './Components/Footer'
import NavBar from './Components/NavBar'

function App() {return (
    <div className='bg-teal-100'>
      <NavBar></NavBar>
      <h1 className='underline decoration-double decoration-teal-700 md:px-96 my-6 text-center font-extrabold text-4xl'>CineMate</h1>
      <Footer></Footer>
    </div>
  )
}

export default App
