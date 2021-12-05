import React, {useState, useContext} from 'react'
import { Container } from './Searchbar.elements'
import {searchPokemon} from '../../api-utils'
import './searchbar.scss'
import { FcLike, FcLikePlaceholder } from 'react-icons/fc';
import FavoriteContext from '../../contexts/favorites';


const SearchBar = (props) => {
    const {onSearch} = props;
    const [search, setSearch] = useState('');

    const {favoritePokemons} = useContext(FavoriteContext);

    const onChange = (e) => {
        setSearch(e.target.value);
        if (e.target.value.length === 0) {
            onSearch(null);
        }
    }

    const onClick = async (e) => {
        onSearch(search);

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
            <div className="favorites-container">
                <FcLikePlaceholder/> {favoritePokemons.length}
            </div>
        </Container>
    )
}

export default SearchBar