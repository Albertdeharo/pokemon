import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import Navbar from './components/navbar/Navbar'
import Home from './components/home/Home'
import Pokedex from './components/pokedex/Pokedex'
import Favorites from './components/favorites/Favorites'
import PokemonDetail from './components/pokemon-detail/PokemonDetail'

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/pokedex" element={<Pokedex />}></Route>
          <Route path="/favorites" element={<Favorites />}></Route>
          <Route path="/pokemon/:name" element={<PokemonDetail />}></Route>
        </Routes>
      </div>
    </Router>

  );
}

export default App;
