import { useEffect, useRef, useState } from "react"
import MovieCard from "./MovieCard"
import { fetchAPI } from "../utils/axios"
import { randomChar } from "../utils/radomChar"

const Hero = () => {
   const [foundMovie , setFoundMovie] = useState({})
   const shouldFetchRef = useRef(true)
   const searchStringRef = useRef('')
    const heroStyle = {
      backgroundImage: `url(${foundMovie.Poster})`,
       backgroundRepeat: "no-repeat",
       backgroundPosition: "center",
        backgroundSize: "cover",
    }

    useEffect(()=>{
      if(shouldFetchRef.current){
            fetchMovie(randomChar())
            shouldFetchRef.current=false
      }
     
    },[])


    const fetchMovie =  async(str)=>{
      const movie =  await fetchAPI(str)
      setFoundMovie(movie)
    }
    const handleClick = ()=>{
      const str = searchStringRef.current.value
      fetchMovie(str)
      searchStringRef.current.value=''
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
        <div className="search-section">
          <h4 className="fs-3">Search Millions Of Movies</h4>
          <p className="fw-bold">
            Find about the more before watching them....
          </p>

          <div className="input-group mb-3 w-75 m-auto">
            <input
              type="text"
              className="form-control"
              placeholder="Movie Name"
              ref={searchStringRef}
            />
            <button className="btn btn-danger light text-light " type="button" onClick={handleClick}>
              Search
            </button>
          </div>
        </div>
        <div className="movie-card ">
          <MovieCard foundMovie={foundMovie} />
        </div>
      </div>
    </>
  )
}
export default Hero