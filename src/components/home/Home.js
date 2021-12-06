import React, {useEffect, useState} from 'react'
import './home.scss'

export default function Home() {
const [PokemonName, setPokemonName] = useState()
const [PokemonHeight, setPokemonHeight] = useState()
const [PokemonWeight, setPokemonWeight] = useState()
const [PokemonId, setPokemonId] = useState()
const [PokemonExperience, setPokemonExperience] = useState()
const [PokemonSprites, setPokemonSprites] = useState()
const [PokemonBigImg, setPokemonBigImg] = useState()
const [PokemonStats, setPokemonStats] = useState()
const [PokemonStatsName, setPokemonStatsName] = useState()

const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
}

const fetchData = async () => {
  try {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${getRandomInt(1,221)}`)
  const data = await res.json()
  setPokemonName(data.name);
  setPokemonHeight(data.height);
  setPokemonWeight(data.weight);
  setPokemonId(data.id);
  setPokemonExperience(data.base_experience);
  setPokemonSprites(data.sprites.other.dream_world.front_default);
  setPokemonBigImg(data.sprites.other.home.front_default);
  setPokemonStats(data.stats);
  // setPokemonStatsName(data.stats.stat.name);
  } catch (error) {
  console.log(error);
  }
}

// {
//   PokemonStats?.map(stat => <div key={stat}>
//     {stat.base_stat}</div>)
//   }

const getPokemonsStatName = () => {
  setPokemonStatsName(PokemonStats);
    PokemonStatsName?.map(stat => <div key={stat}>
    123</div>)
}

useEffect(() => {
  fetchData();
  getPokemonsStatName();
}, [])
// console.log(PokemonStats);
// console.log(PokemonStatsName);

return ( <>
  <div className="home-container">
    <div className="pokemon-img-container">
      <img className="pokemon-img" src={PokemonBigImg} />
    </div>
    <div className="home-card">

      <div className="card">
        <div className="card-img">
          <img className="pokemon-img" src={PokemonSprites} />
        </div>
        <div className="desc">
          <h6 className="primary-text">{PokemonName}</h6>
          <h6 className="secondary-text">{PokemonExperience}</h6>
          {
          PokemonStats?.map(stat =>
            <div key={stat}>
              {stat.base_stat}
            </div>)
          }

        </div>
        {/* <button className="primary-text">{PokemonStats.base_stat}</button> */}
        <div className="details">
          <div className="rating">
            <h6 className="primary-text"> {PokemonHeight} </h6>
            <h6 className="secondary-text"> Height </h6>
          </div>
          <div className="activity">
            <h6 className="primary-text"> {PokemonWeight} </h6>
            <h6 className="secondary-text"> Weight </h6>
          </div>
        </div>
      </div>
    </div>
  </div>
</>);
}