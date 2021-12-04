import React from 'react'
import { FcLike } from 'react-icons/fc';
import './pokemon.scss'

const Pokemon = (props) => {
    const {pokemon} = props;
    console.log(pokemon);
    return (
        <div className="pokemon-card">
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
                    <div className="pokemon-type"><FcLike/></div>
                </div>
            </div>
        </div>
    )
}

export default Pokemon