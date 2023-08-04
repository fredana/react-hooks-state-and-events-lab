// import React from "react";
// import ShoppingList from "./ShoppingList";
// import itemData from "../data/items";

// function App() {

//   // replace 'false' with a state variable that can be toggled between true and false
//   // this will be used for the Dark Mode Toggle feature
//   const appClass = false ? "App dark" : "App light"

//   return (
//     <div className={appClass}>
//       <header>
//         <h2>Shopster</h2>
//         <button>Dark Mode</button>
//       </header>
//       <ShoppingList items={itemData} />
//     </div>
//   );
// }

// export default App;


import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const appClass = darkMode ? "App dark" : "App light";

  const handleToggleDarkMode = () => {
    setDarkMode((prevDarkMode) => !prevDarkMode);
  };

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleToggleDarkMode}>
          {darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
        </button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
