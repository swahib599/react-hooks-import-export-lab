// src/components/App.js
import React from 'react';
import NavBar from './NavBar'; // Import NavBar component
import Home from './Home';     // Import Home component
import About from './About';   // Import About component

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
    </div>
  );
}

export default App;
