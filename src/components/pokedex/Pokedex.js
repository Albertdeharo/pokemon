import React from 'react'
import Pagination from '../pagination/Pagination';
import Pokemon from '../pokemon/Pokemon';
import './pokedex.scss'

const Pokedex = (props) => {
    const {pokemons, page, setPage, total, loading} = props;
    const lastPage = () => {
        const nextPage = Math.max(page -1, 0);
        setPage(nextPage);
    }

    const nextPage = () => {
        if (pokemons.length === 1) {
            const nextPage = 0;
            setPage(nextPage);
        } else {
            const nextPage = Math.min(page +1, total);
            setPage(nextPage);
        }
    }

    return (
        <div className="pokedex-container">
            <div className="header">
                <h1>Pokedex</h1>
                <div>
                    <Pagination
                        page={page}
                        totalPages={total}
                        onLeftClick={lastPage}
                        onRightClick={nextPage}
                    />
                </div>
            </div>
            { loading ? <div>Cargando pokemones....</div>
                :<div className="pokedex-grid">
                {
                    pokemons.map((pokemon, idx) => {
                        return (
                            <Pokemon pokemon={pokemon} key={pokemon.name} />
                        )
                    })
                }
                </div>
            }
            
        </div>
    )
}

export default Pokedex