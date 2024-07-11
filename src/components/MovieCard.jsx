import { useState } from "react"

const MovieCard = ({ foundMovie, deleteMovie, handleBtn }) => {
 
 
  const { Poster, Title, imdbRating, Plot, imdbID } = foundMovie
  return (
    <div className="row movie-card-display p-1 rounded text-dark  ">
      <div className="col-md">
        <img className="rounded" src={Poster} alt="" />
      </div>
      <div className="col-md text-start d-grid">
        <div className="fw-bold fs-4">{Title}</div>
        <div className="fw-bold fs-5">IMDB Rating: {imdbRating}</div>
        <div>{Plot?.slice(0, 70)}...</div>
        {!foundMovie.category && (
          <div className=" mt-2 d-flex justify-content-between  gap-2 ">
            <button
              className="btn flex-grow-1 btn-warning "
              onClick={() => handleBtn('drama')}
            >
              Drama
            </button>
            <button
              className="btn flex-grow-1 btn-info"
              onClick={() => handleBtn('action')}
            >
              Action
            </button>
          </div>
        )}
        <div className="pb-1">
          <button
            className="btn btn-danger mt-2 w-100"
            onClick={() => deleteMovie(imdbID)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  )
}
export default MovieCard