import React, {useState} from 'react'
import { Container } from './Searchbar.elements'
import {searchPokemon} from '../../api-utils'
import './searchbar.scss'


const SearchBar = () => {
    const [search, setSearch] = useState('');
    const [pokemon, setPokemon] = useState('');
    
    const onChange = (e) => {
        setSearch(e.target.value);
    }

    const onClick = async (e) => {
        const data = await searchPokemon(search);
        setPokemon(data);
    }

    return (
        <Container className="searchbar">
            <input
            placeholder="Buscar pokemon..."
            onChange={onChange}
            type="text"
            />
            <div>
                <button
                onClick={onClick}
                >Buscar
                </button>
            </div>
            {/* <div>
                <div> {search} </div>
                {pokemon &&
                    <div>
                        <div>Nombre:{pokemon.name}</div>
                        <div>Peso:{pokemon.weight}</div>
                        <img src={pokemon.sprites.front_default} alt="" />
                    </div>
                }
            </div> */}
        </Container>
    )
}

export default SearchBar