import React from "react";

const name = 'Gio'
const thoughts = 'Amazing'
// const noVowel = "Gio Talabong"
const noVowel = (str) => {
  return str.replace(/[aeuio]gmi/, "")
}

function JSXVariables() {
  return (
    <div className="main-container">
      <div className="container">
        <div className="jumbotron">
        <h1>Hi! My name is {name}</h1>
          <h2>My name has {name.length} letters</h2>
          <h2>I think React is {thoughts}</h2>
          <h2>My name without any vowels is: { noVowel(name)}</h2>
        </div>
      </div>
    </div>
  );
}

export default JSXVariables;
