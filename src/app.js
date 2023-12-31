// first step is to import everything
import React from "react";
import { createRoot } from "react-dom";
import { animals } from "./animal";

// Next we need to initialize our constants
const container = document.getElementById("app");
const root = createRoot(container);
const title = "";

const background = (
  <img className="background" alt="ocean" src="/images/ocean.jpg" />
);

const showBackground = true;
const animalNames = Object.keys(animals);

const images = [];
for (const animal of animalNames) {
  // Use for...of loop to iterate over the animal names
  const imgElement = (
    <img
      key={animal}
      className="animal"
      alt={animal}
      src={`/images/${animal}.jpg`}
      aria-label={animal}
      role="button"
      onClick={displayFact}
    />
  );
  images.push(imgElement);
}

// Setting up our display fact function
function displayFact(e) {
  const animalName = e.target.alt;
  const animalFacts = animals[animalName].facts;
  const randomIndex = Math.floor(Math.random() * animalFacts.length);
  const funFact = animalFacts[randomIndex];
  const factElement = document.getElementById("fact");
  factElement.innerHTML = funFact;
}

// This code sets us up to display everything
const animalFacts = (
  <div>
    <div>
      {showBackground && background}
      <h1>{title || "Click an animal for a fun fact"}</h1>
    </div>
    <div className="animals">{images}</div>
    <p id="fact"></p>
  </div>
);

// Finally, our code is called with this line
root.render(animalFacts);
