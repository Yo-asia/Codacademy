import { animals } from './animals';

import React from 'react';
import ReactDOM from 'react-dom';

const title = '';
const background = (<img class='background' alt='ocean' src='/images/ocean.jpg'/>);
const showBackground = true;
const images = [];
for (const animal in animals) {
  images.push(<img 
    key = {animal}
    className = 'animal'
    alt = {animal}
    src = {animals[animal].image}
    aria-label = {animal}
    role = 'button'
    onClick = {displayFact}
    />)
}
const animalFacts = (
  <div>
    <h1>{
      title === '' ? 'Click an animal for a fun fact' : title
    }</h1>
    {showBackground && background}
    <p id = 'fact'></p> 
    <div className = 'animals'>
      {images}
    </div>
    
  </div>
)

function displayFact(e) {
 const animal = e.target.alt;
 const randomIndex = Math.floor(Math.random()*animals[animal].facts.length);
 const funFact = animals[animal].facts[randomIndex];
 document.getElementById('fact').innerHTML = funFact;
}

ReactDOM.render(animalFacts, document.getElementById('root'));