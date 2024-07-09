import { useEffect } from "react"
import MovieCard from "./MovieCard"
import { fetchAPI } from "../utils/axios"
import { randomChar } from "../utils/radomChar"

const Hero = () => {
    const heroStyle = {
      backgroundImage: `url("https://www.omdbapi.com/src/poster.jpg")`,
       backgroundRepeat: "no-repeat",
       backgroundPosition: "center",
        backgroundSize: "cover",
    }

    useEffect(()=>{
     fetchMovie()
    },[])

    
    const fetchMovie =  async()=>{
      const str = randomChar()
      console.log(str)
      const movie =  await fetchAPI(str)
      console.log(movie)
    }
  return (
    <>
      <nav className="fixed-top  py-3 text-danger">
        <div className="container">
          <h2>Movie world</h2>
        </div>
      </nav>
      <div
        className="hero text-center text-light d-flex flex-column justify-content-center align-items-center "
        style={heroStyle}
      >
        <div>
          <h4 className="fs-3">Search Millions Of Movies</h4>
          <p className="fw-bold">Find about the more before watching them....</p>

          <div className="input-group mb-3 w-75 m-auto" >
            <input type="text" className="form-control" placeholder="Movie Name" />
            <button className="btn btn-danger light text-light " type="button">
              Search
            </button>
          </div>
        </div>
        <div className="  ">
            <MovieCard/>
        </div>
      </div>
      
    </>
  )
}
export default Hero