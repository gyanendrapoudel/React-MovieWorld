const MovieCard = ({}) => {
    const poster = 'https://www.omdbapi.com/src/poster.jpg'
  return (
    <div className="row ">
      <div className="col-md">
        <img className="rounded" src={poster} alt="" />
      </div>
      <div className="col-md text-start ">
        <p>Movie name</p>
        <>description</>
        <div className="mt-2 pe-2 d-flex justify-content-evenly">
          <button className="btn btn-warning me-1 ">Drama</button>
          <button className="btn btn-info">Action</button>
        </div>
        <div className=" pe-2">
          <button className="btn btn-danger mt-2 w-100">Delete</button>
        </div>
      </div>
    </div>
  )
}
export default MovieCard