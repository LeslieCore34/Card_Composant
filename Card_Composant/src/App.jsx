import { useState } from 'react'
import './App.css'
import Card from './Components/Card'
import ReactStars from 'react-stars'
import React from 'react'
import './styles.scss';


const ratingChanged = (newRating) => {
  console.log(newRating)
}


function App() {
  const [count, setCount] = useState(0)


  return (
    <>
      <div>
        <Card /> {Card}
        <ReactStars
          count={5}
          onChange={ratingChanged}
          size={24}
          color2={'#ffd700'}
        />
      </div>
    </>
  )
}

export default App
