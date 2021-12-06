import React, {useEffect, useState} from 'react'
import './home.scss'

export default function Home() {

const [error, setError] = useState(null);
const [isLoaded, setIsLoaded] = useState(false);

const [PokemonName, setPokemonName] = useState()
const [PokemonHeight, setPokemonHeight] = useState()
const [PokemonWeight, setPokemonWeight] = useState()
const [PokemonId, setPokemonId] = useState()
const [PokemonExperience, setPokemonExperience] = useState()
const [PokemonSprites, setPokemonSprites] = useState()
const [PokemonBigImg, setPokemonBigImg] = useState()
const [PokemonStats, setPokemonStats] = useState()
const [PokemonTypes, setPokemonTypes] = useState()
const [PokemonAbilities, setPokemonAbilities] = useState()
const [PokemonSpecies, setPokemonSpecies] = useState()
const [PokemonColor, setPokemonColor] = useState()

const getRandomInt = (min, max) => {
return Math.floor(Math.random() * (max - min)) + min;
}

const fetchDataSpecies = async (PokemonId) => {
// console.log(PokemonId,'aaaaaaaaaaaaaaaaaaaaaaaa');
  try {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${PokemonId}`)
  const data = await res.json()
  // console.log(data);
  setPokemonColor(data.color.name)
  } catch (error) {
  console.log(error);
  }
}
fetchDataSpecies(PokemonId);

const getRandom = async () => {
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
    setPokemonTypes(data.types);
    setPokemonAbilities(data.abilities)
    setPokemonSpecies(data.species.url)
    setPokemonColor(data.color.name)
    } catch (error) {
    console.log(error);
    }
  }

useEffect(() => {
  fetch(`https://pokeapi.co/api/v2/pokemon/${getRandomInt(1,221)}`)
  .then(res => res.json())
  .then(
  (data) => {
    setIsLoaded(true);
    // console.log(data);
    setPokemonName(data.name);
    setPokemonHeight(data.height);
    setPokemonWeight(data.weight);
    setPokemonId(data.id);
    setPokemonExperience(data.base_experience);
    setPokemonSprites(data.sprites.other.dream_world.front_default);
    setPokemonBigImg(data.sprites.other.home.front_default);
    setPokemonStats(data.stats);
    setPokemonTypes(data.types);
    setPokemonAbilities(data.abilities)
    setPokemonSpecies(data.species.url)
    },
    (error) => {
    setIsLoaded(true);
    setError(error);
    }
  )
}, [])

// const getLinearGradient = (PokemonColor) => {

//   if (PokemonColor === 'black') {
//     setPokemonColor('linear-gradient(90deg, rgba(31,42,37,1) 0%, rgba(109,117,115,1) 50%, rgba(202,213,211,1) 100%)')
//   }
//   if (PokemonColor === 'blue') {
//     setPokemonColor('linear-gradient(90deg, rgba(19,107,228,1) 0%, rgba(43,193,232,1) 50%, rgba(135,201,228,1) 100%)')
//   }
//   if (PokemonColor === 'brown') {
//     setPokemonColor('linear-gradient(90deg, rgba(122,66,25,1) 0%, rgba(134,99,59,1) 50%, rgba(152,131,109,1) 100%)')
//   }
//   if (PokemonColor === 'gray') {
//     setPokemonColor('linear-gradient(90deg, rgba(177,174,171,1) 0%, rgba(134,130,126,1) 50%, rgba(110,108,106,1) 100%)')
//   }
//   if (PokemonColor === 'green') {
//     setPokemonColor('linear-gradient(90deg, rgba(174,242,134,1) 0%, rgba(105,172,126,1) 50%, rgba(52,92,32,1) 100%)')
//   }
//   if (PokemonColor === 'pink') {
//     setPokemonColor('linear-gradient(90deg, rgba(254,0,146,1) 0%, rgba(214,16,140,1) 50%, rgba(213,27,165,1) 100%)')
//   }
//   if (PokemonColor === 'purple') {
//     setPokemonColor('linear-gradient(90deg, rgba(135,20,154,1) 0%, rgba(162,112,195,1) 50%, rgba(126,65,130,1) 100%)')
//   }
//   if (PokemonColor === 'red') {
//     setPokemonColor('linear-gradient(90deg, rgba(255,110,110,1) 0%, rgba(189,65,65,1) 50%, rgba(153,11,11,1) 100%)')
//   }
//   if (PokemonColor === 'white') {
//     setPokemonColor('linear-gradient(90deg, rgba(240,240,240,1) 0%, rgba(195,195,195,1) 50%, rgba(156,156,156,1) 100%)')
//   }
//   if (PokemonColor === 'yellow') {
//     setPokemonColor('linear-gradient(90deg, rgba(255,233,101,1) 0%, rgba(186,189,34,1) 50%, rgba(193,204,60,1) 100%)')
//   }
// }


  if (error) {
  return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
  return <div>Loading...Loading <br /> ...Loading.. <br /> .Loading...Loading <br /> ...Loading...Loading...Loading...Loading...Loading...Loading...Loading...Loading...Loading...Loading...Loading...Loading...Loading...Loading...Loading...Loading...Loading...Loading...Loading...Loading...Loading...Loading...Loading...Loading...Loading...Loading...Loading...Loading...Loading...Loading...Loading...Loading...Loading...Loading...  Loading...Loading...Loading...Loading...Loading...Loading...Loading...</div>;
  } else {
  return ( <>
    <div className="home-container">
      <div className="pokemon-img-container">
        <img className="pokemon-img" src={PokemonBigImg} />
      </div>
      <div className="home-card">
        <div className="card" style={{borderColor:`${PokemonColor}`}}>
          <div className="card-header"
                style={{
                  borderColor:`${PokemonColor}`,
                  background: `${PokemonColor}`,
                }}>
            <h6 className="card-id"> #{PokemonId} </h6>
          </div>
          <div className="card-img" style={{borderColor:`${PokemonColor}`}}>
            <img className="pokemon-img" src={PokemonSprites} />
          </div>
          <div className="desc">
            <h6 className="primary-text">{PokemonName}</h6>
            <h6 className="secondary-text"> experience: {PokemonExperience}</h6>
            {
            PokemonStats?.map(stat =>
            <div key={stat.stat.name}>
              <h6 className="secondary-text"> {stat.stat.name} - {stat.base_stat} </h6>
            </div>)
            }
            {
            PokemonTypes?.map(type =>
            <div key={type.type.name}>
              <h6 className="secondary-text"> {type.type.name} </h6>
            </div>)
            }
            <div className="pokemon-abilities">
              {
              PokemonAbilities?.map(ability =>
              <div key={ability.ability.name}>
                <h6 className="secondary-text"> {ability.ability.name} </h6>
              </div>)
              }
            </div>
            <button
              onClick={getRandom}
              className="home-btn-random"
              >
              Try random pokemon
            </button>
          </div>
        </div>
      </div>
    </div>
    </>);
  }
}
