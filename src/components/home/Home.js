import React, { useEffect, useState, useContext } from 'react'
import Pokedex from './../pokedex/Pokedex';
import SearchBar from './../searchbar/Searchbar'
import { getPokemonData, getPokemons } from '../../api-utils';
import FavoriteContext, { FavoriteProvider } from '../../contexts/favorites';

export default function Home() {
    let imgUrl = "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png"
    const [pokemons, setPokemons] = useState([]);
    const [page, setPage] = useState(0);
    const [total, setTotal] = useState(0);
    const [loading, setLoading] = useState(true);
    const [favorites, setFavorites] = useState(["raichu"]);
    

    const fetchPokemons = async () => {
      try {
        setLoading(true);
        const data = await getPokemons(25, 25 * page);
        const promises = data.results.map(async (pokemon) => {
          return await getPokemonData(pokemon.url)
        })
        const results = await Promise.all(promises)
        setPokemons(results);
        setLoading(false);
        setTotal(Math.ceil(data.count / 25));
      } catch(err) { }
    }
    // console.log(pokemons)

    useEffect(() => {
      fetchPokemons();
    }, [page]);

    const updateFavoritePokemons = (name) => {
      const updated = [...favorites];
      const isFavorite = favorites.indexOf(name);
        if (isFavorite >= 0) {
          updated = updated.splice(isFavorite, 1);
        } else {
          updated.push(name);
        }
        setFavorites(updated);
    }

    return ( <>
      <FavoriteProvider
      value={{
      favoritePokemons: favorites,
      updateFavoritePokemons: updateFavoritePokemons
      }}>
        <div>
          <img src={imgUrl} alt="" />
          <SearchBar/>
          <Pokedex
            loading={loading}
            pokemons={pokemons}
            page={page}
            setPage={setPage}
            total={total}
          />
        </div>
      </FavoriteProvider>
    </>);
  }