import { useEffect, useState } from "react"
import MovieCard from "./MovieCard"

const Display = ({ genres, handleDeleteDisplay }) => {
  const [filterMovies, setFilterMovies] = useState([])
  const handleFilterBtns = (str) => {
    if (str === 'all') {
      setFilterMovies([...genres])
      return
    }
    const items = genres.filter((item) => item.category === str)
    setFilterMovies(items)
  }
  useEffect(() => {
    setFilterMovies(genres)
  }, [genres])

  return (
    <div className="pt-5 box-shadow container bg-dark mt-3  rounded-3 ">
      <div className="row  rounded text-light p-3">
        <div className="col  ">
          <div
            className="btn-group box-shadow"
            role="group"
            aria-label="Basic mixed styles example"
          >
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => handleFilterBtns('all')}
            >
              All
            </button>
            <button
              type="button"
              className="btn btn-warning"
              onClick={() => handleFilterBtns('drama')}
            >
              Drama
            </button>
            <button
              type="button"
              className="btn btn-info"
              onClick={() => handleFilterBtns('action')}
            >
              Action
            </button>
          </div>
        </div>
        <h5 className="mt-3">{filterMovies.length} Movies Listed</h5>
      </div>

      <div className="d-flex justify-content-around  flex-wrap row-gap-5 mt-5 pb-5 ">
        {filterMovies.map((genre, i) => {
          return (
            <MovieCard
              foundMovie={genre}
              key={i}
              deleteMovie={handleDeleteDisplay}
            />
          )
        })}
      </div>
    </div>
  )
}
export default Display