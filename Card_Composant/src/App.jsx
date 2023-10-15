import React, { useState } from 'react';
import './App.css';
import './styles.scss';
import CardFile from './Components/CardFile';
import StarsRating from './Components/StarsRating';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <CardFile />
        <StarsRating
          count={5}
          onChange={(newRating) => console.log(newRating)}
          size={34}
          color2="#ffd700"
        />
      </div>
    </>
  );
}

export default App;
