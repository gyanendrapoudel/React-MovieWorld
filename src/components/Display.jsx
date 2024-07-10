import { useEffect, useState } from "react"
import MovieCard from "./MovieCard"

const Display = ({ genres }) => {
  const [filterMovies, setFilterMovies] = useState([])
 const handleFilterBtns = (str)=>{
    if(str==='all'){
      setFilterMovies([...genres])
      return
    }
      const items = genres.filter((item)=>item.category===str)
      setFilterMovies(items)
  }
  useEffect(()=>{
    setFilterMovies(genres)
  },[genres])
  console.log(filterMovies)
  return (
    <div className="pt-5 display container bg-dark ">
      <div className="row  rounded text-light p-3">
        <div className="col">
          <div
            className="btn-group"
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

      <div className="d-flex justify-content-around flex-wrap row-gap-2 mt-5 pb-5">
        {filterMovies.map((genre, i) => {
          return <MovieCard foundMovie={genre} key={i} />
        })}
      </div>
    </div>
  )
}
export default Display