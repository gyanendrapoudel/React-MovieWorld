import { useState } from 'react'

import './App.css'
import Hero from './components/Hero'
import Display from './components/Display'

function App() {
  const [genres, setGenres] = useState([])
  const handleGenres=(movie)=>{
   
      setGenres([...genres,movie])
  }
  console.log(genres)
  return (
    <div className='wrapper'>
     <Hero handleGenres={handleGenres}/>
     <Display genres={genres}/>
    </div>
  )
}

export default App
