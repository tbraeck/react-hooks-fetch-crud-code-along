import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import Header from "./Header";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  function handleDarkModeClick() {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  }

  return (
    <div className={"App " + (isDarkMode ? "dark" : "light")}>
      <Header isDarkMode={isDarkMode} onDarkModeClick={handleDarkModeClick} />
      <ShoppingList />
    </div>
  );
}

export default App;

// [
//   {
//     "id": 1,
//     "name": "Yogurt",
//     "category": "Dairy",
//     "isInCart": false
//   },
//   {
//     "id": 2,
//     "name": "Pomegranate",
//     "category": "Produce",
//     "isInCart": false
//   },
//   {
//     "id": 3,
//     "name": "Lettuce",
//     "category": "Produce",
//     "isInCart": false
//   },
//   {
//     "id": 4,
//     "name": "String Cheese",
//     "category": "Dairy",
//     "isInCart": false
//   },
//   {
//     "id": 5,
//     "name": "Swiss Cheese",
//     "category": "Dairy",
//     "isInCart": false
//   },
//   {
//     "id": 6,
//     "name": "Cookies",
//     "category": "Dessert",
//     "isInCart": false
//   }
// ]