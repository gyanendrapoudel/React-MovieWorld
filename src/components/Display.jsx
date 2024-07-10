import MovieCard from "./MovieCard"

const Display = ({ genres }) => {
  console.log(genres)
  return (
    <div className="pt-5 display container bg-dark ">
      <div className="row  rounded text-light p-3">
        <div className="col">
          <div
            className="btn-group"
            role="group"
            aria-label="Basic mixed styles example"
          >
            <button type="button" className="btn btn-primary">
              All
            </button>
            <button type="button" className="btn btn-warning">
              Drama
            </button>
            <button type="button" className="btn btn-info">
              Action
            </button>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-around flex-wrap row-gap-5 mt-5 pb-5">
        {/* <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard /> */}
      </div>
    </div>
  )
}
export default Display