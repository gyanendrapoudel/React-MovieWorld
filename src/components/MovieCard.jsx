const MovieCard = ({foundMovie}) => {
    const {Poster,Title, imdbRataing,Plot} = foundMovie
      return (
    <div className="row movie-card-display p-3 rounded text-dark ">
      <div className="col-md">
        <img className="rounded" src={Poster} alt="" />
      </div>
      <div className="col-md text-start d-grid">
        <h3>{Title}</h3>
        <p>IMDB Rating: {imdbRataing}</p>
        <p>{Plot?.slice(0,70)}...</p>
        <div className="  mt-3 ">
          <button className="btn me-5 btn-warning  ">Drama</button>
          <button className="btn btn-info">Action</button>
        </div>
        <div className=" pe-2  ">
          <button className="btn btn-danger mt-2 w-100">Delete</button>
        </div>
      </div>
    </div>
  )
}
export default MovieCard