import { React } from 'react';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('app');
const root = createRoot(container);
const title = '';
const background = (
  <img
    className = 'background'
    alt = 'ocean'
    src = '/images/ocean.jpg'
  />
);

const animals = ['dolphin', 'lobster', 'starfish'];

const images = [];
for (const animal in animals) {
  const imgElement = (
    <img
      key={animal}
      className='animal'
      alt={animals[animal]}
      src={`/images/${animals[animal]}.jpg`}
      aria-label={animals[animal]}
      role='button'
    />
  );
  images.push(imgElement);
}

const animalFacts = (
  <div>
    <div>
      {background}
      <h1>{title === '' ? 'Click an animal for a fun fact' : title}</h1>
    </div>

    <div className = 'animals'>
      {images}
    </div>
  </div>
);

function displayFact(e) {
  const animalName = e.target.alt;
  const animalFacts = animals[animalName].facts;
  const randomIndex = Math.floor(Math.random() * animalFacts.length);

  const funFact = animalFacts[randomIndex];

  console.log(funFact);
}

root.render(animalFacts);
