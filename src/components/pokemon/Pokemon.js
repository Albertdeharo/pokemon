import React, {useContext} from 'react'
import {Link} from "react-router-dom";
import FavoriteContext from '../../contexts/favorites';
import { FcLike, FcLikePlaceholder } from 'react-icons/fc';
import './pokemon.scss'

const Pokemon = (props) => {
    const {pokemon} = props;
    const {favoritePokemons, updateFavoritePokemons} = useContext(FavoriteContext);
    console.log(props);
    const Like = <FcLikePlaceholder/>;
    const Liked = <FcLike/>;
    const heart = favoritePokemons.includes(pokemon.name) ? Liked:Like;

    const clickHeart = (e) => {
        e.preventDefault();
        updateFavoritePokemons(pokemon.name);
    }

    return (
        <div className="pokemon-card">
            <Link to={`/pokemon/${pokemon.name}`}>qwd</Link>
            <div className="pokemon-img-container">
                <img className="pokemon-img"
                src={pokemon.sprites.front_default}
                alt={pokemon.name}
                />
            </div>
            <div className="card-body">
                <div className="card-top">
                    <h3>{pokemon.name}</h3>
                    <div>#{pokemon.id}</div>
                </div>
                <div className="card-bottom">
                    <div className="pokemon-type">
                        {pokemon.types.map((type, idx) => {
                            return (
                                <div key={idx} className="pokemon-type-text">{type.type.name}</div>
                            )
                        })}
                    </div>
                    <button onClick={clickHeart}>
                        <div className="pokemon-favorite">{heart}</div>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Pokemon