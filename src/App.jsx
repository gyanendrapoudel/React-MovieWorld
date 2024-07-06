import { useState } from 'react'

import './App.css'
import Hero from './components/Hero'
import Display from './components/Display'

function App() {

  return (
    <div className='wrapper'>
     <Hero/>
     <Display/>
    </div>
  )
}

export default App
