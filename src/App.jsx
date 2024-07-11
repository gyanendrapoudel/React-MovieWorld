import { useEffect, useState } from 'react'

import './App.css'
import Hero from './components/Hero'
import Display from './components/Display'
import { getItemFromLocalStorage, storeItemToLocalStorage } from './utils/localStroage'

function App() {
  const [genres, setGenres] = useState([])
  const handleGenres=(movie)=>{
      // avoiding duplication
      const tempMovie = genres.filter((item)=>item.imdbID!==movie.imdbID)
      setGenres([...tempMovie,movie])
      storeItemToLocalStorage([...tempMovie, movie])
  }
 const handleDeleteDisplay = (imdbID) => {
  confirm("Are you sure, you want to delete") &&
   setGenres(genres.filter((gen)=>gen.imdbID!==imdbID))

 }
 useEffect(()=>{
  const mvList = getItemFromLocalStorage()
  mvList?.length && setGenres(mvList)
 },[])
  return (
    <div className='wrapper'>
     <Hero handleGenres={handleGenres} />
     <Display genres={genres} handleDeleteDisplay={handleDeleteDisplay}/>
    </div>
  )
}

export default App
