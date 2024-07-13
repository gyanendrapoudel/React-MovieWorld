import { useEffect, useRef, useState } from "react"
import MovieCard from "./MovieCard"
import { fetchAPI } from "../utils/axios"
import { randomChar } from "../utils/radomChar"
import { toast } from "react-toastify"
const Hero = ({handleGenres,}) => {
  const [foundMovie, setFoundMovie] = useState({})
  const shouldFetchRef = useRef(true)
  const searchStringRef = useRef('')
  const [searching, setSearching] = useState(false)
  const [normalBgImage, setNormalBgImage] = useState('')

  const heroStyle = {
    backgroundImage: `url(${foundMovie.Poster?foundMovie.Poster: normalBgImage})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
  }

  useEffect(() => {
    if (shouldFetchRef.current) {
      fetchMovie(randomChar())
      shouldFetchRef.current = false
    }
  }, [])

  const fetchMovie = async (str) => {
    const movie = await fetchAPI(str)
    setFoundMovie(movie)
    
    setSearching(false)
   
  }
  const handleClick = () => {
    const str = searchStringRef.current.value
    if(!str){
      toast.error("Please enter any character!")
      return

    }
    fetchMovie(str)
    searchStringRef.current.value = ''
  }
 
  // handling Delete BTN
  const handleDelete = () => {
    setNormalBgImage(foundMovie.Poster)
    setFoundMovie({})
    setSearching(true)
  }
  const handleBtn = (category) => {
    handleGenres({ ...foundMovie, category })
    let capitalizedCategory = category[0].toUpperCase()+category.slice(1)
    toast.success(`Movie added to ${capitalizedCategory} Category`)
    setFoundMovie({})
    setSearching(true)
  }
  return (
    <>
      <nav className="fixed-top  py-2 text-danger">
        <div className="container">
          <h2>Movie world</h2>
        </div>
      </nav>
      <div
        className="hero text-center text-light d-flex flex-column justify-content-center align-items-center "
        style={heroStyle}
      >
        <div className={searching ? 'hero-content' : 'hero-content top'}>
          <div className="search-section">
            {searching && <h4 className="fs-3">Search Millions Of Movies</h4>}
            {searching && (
              <p className="fw-bold">
                Find about the more before watching them....
              </p>
            )}

            <div className="input-group mb-3 w-100 m-auto">
              <input
                onFocus={() => setSearching(true)}
                type="text"
                className="form-control"
                placeholder="Movie Name"
                ref={searchStringRef}
              />
              <button
                className="btn btn-danger light text-light "
                type="button"
                onClick={handleClick}
              >
                Search
              </button>
            </div>
          </div>
          {!searching && (
            <div className="movie-card show-movie  ">
              <MovieCard
                foundMovie={foundMovie}
                deleteMovie={handleDelete}
                handleBtn={handleBtn}
              />
            </div>
          )}
        </div>
      </div>
    </>
  )
}
export default Hero