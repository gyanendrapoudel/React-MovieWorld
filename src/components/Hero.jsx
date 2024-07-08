import MovieCard from "./MovieCard"

const Hero = () => {
    const heroStyle = {
      backgroundImage: `url("https://www.omdbapi.com/src/poster.jpg")`,
       backgroundRepeat: "no-repeat",
       backgroundPosition: "center",
        backgroundSize: "cover",
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

          <div class="input-group mb-3 w-75 m-auto" >
            <input type="text" class="form-control" placeholder="Movie Name" />
            <button class="btn btn-danger light text-light " type="button">
              Search
            </button>
          </div>
        </div>
        <div className="movie-card-display rounded text-dark p-3 ">
            <MovieCard/>
        </div>
      </div>
      
    </>
  )
}
export default Hero