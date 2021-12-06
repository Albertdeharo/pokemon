import React, {useEffect, useState} from 'react'
import Favorite from '../favorite/Favorite';
import { searchPokemon } from '../../api-utils';
import './favorites.scss'
const localStorageKey = "favorite_pokemon";

export default function Favorites() {
    const storage = JSON.parse(window.localStorage.getItem(localStorageKey)) || [];
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    const favoriteList = storage.map((name, idx) =>
        <div className={name} key={idx}>{name}</div>
    );

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/pikachu`)
          .then(res => res.json())
          .then(
            (result) => {
              setIsLoaded(true);
              setItems(result);
            },
            (error) => {
              setIsLoaded(true);
              setError(error);
            }
          )
      }, [])
      // console.log(storage);
      // console.log(items);
      if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Loading...</div>;
      } else {
        return (<>
            <div>{items.name}</div>
            <div className="favorites-container">
                <Favorite favoriteList={favoriteList}/>
            </div>
        </>);
      }
  }