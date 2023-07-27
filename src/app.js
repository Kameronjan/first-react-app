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

const images[];
for (const animal in animals) {
  const imgElement = document.createElement('img');
  imgElement.key = animal;
  imgElement.className = 'animal';
  imgElement.alt = animal;
  imgElement.src = animals[animal].image;
  imgElement['aria-label'] = animal;
  imgElement.role = 'button';
  images.push(imgElement);
}

const animalFacts = (
  <div>
    {background}
    <h1>{title === '' ? 'Click an animal for a fun fact' : title}</h1>
  </div>
);

root.render(animalFacts);
