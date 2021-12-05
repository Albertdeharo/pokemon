import React, {useState, useEffect} from 'react'
import {Link} from "react-router-dom";
import FavoriteContext from '../../contexts/favorites';
import { FcLike, FcLikePlaceholder } from 'react-icons/fc';
import {useParams} from "react-router-dom";
import './pokemonDetail.scss'

const PokemonDetail = () => {
    let slug  = useParams();
    console.log(slug.name);
    const pokemon = slug.name;
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    const [moves, setMoves] = useState([]);
    const [types, setTypes] = useState([]);
    const [img, setImg] = useState([]);
    const [imgPro, setImgPro] = useState([]);

    const lolstring = 'official-artwork';
    useEffect(() => {
      fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
        .then(res => res.json())
        .then(
          (result) => {
            setIsLoaded(true);
            setItems(result);
            setMoves(result.moves)
            setTypes(result.types)
            setImg(result.sprites)
            setImgPro(result.sprites.other.home)

          },
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        )
    }, [])
    console.log(imgPro);
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
          <div className="pokemon-detail-container">
            <div className="pokemon-img-container">
                <img className="pokemon-img"
                    src={imgPro.front_default}
                    alt={items.name}
                />
            </div>
            <div><h1>{items?.name}</h1></div>
            <div>Experience: {items.base_experience}</div>
            <div>Number #{items.id}</div>
            <div>Height: {items.height}</div>
            <div>Weight: {items.weight}</div>
            <div className="pokemon-moves">
                <h2>moves</h2>
                {moves.map((move, idx) => {
                    return (
                        <div key={idx} className="pokemon-type-text">
                            {move.move.name}
                            {move.move.url}
                        </div>
                    )
                })}
            </div>
            <div className="pokemon-types">
                <h2>types</h2>
                {types.map((type, idx) => {
                    return (
                        <div key={idx} className="pokemon-type-text">
                            {type.type.name}
                            {type.type.url}
                        </div>
                    )
                })}
            </div>
          </div>
      );
    }
  }

export default PokemonDetail