import React, {useState, useEffect} from 'react'
import {NavLink} from "react-router-dom";
import { Container, LogoContainer, Menu, MenuItem, MenuItemLink, MobileIcon, Wrapper } from './Navbar.elements'
import { FaBars, FaTimes } from "react-icons/fa"
const localStorageKey = "favorite_pokemon";

const Navbar = () => {
    let imgUrl = "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png"
    const [showMobileMenu, setShowMobileMenu] = useState(false);
    const [favoritesNumb, setFavoritesNumb] = useState('');
    const getFavoritesNumb = () => {
        const favoritesStorage = JSON.parse(window.localStorage.getItem(localStorageKey)) || [];
        setFavoritesNumb(favoritesStorage)
     }

    useEffect(() => {
        getFavoritesNumb();
    }, [favoritesNumb])

    return (
        <Container>
            <Wrapper>
                <LogoContainer>
                    <img src={imgUrl} alt="" />
                </LogoContainer>
                <MobileIcon onClick={() => setShowMobileMenu(!showMobileMenu)}>
                    {
                        showMobileMenu ? <FaTimes/> : <FaBars/>
                    }
                </MobileIcon>
                <Menu open={showMobileMenu}>
                    <NavLink to="/">
                        <MenuItem>
                            <MenuItemLink>
                                HOME
                            </MenuItemLink>
                        </MenuItem>
                    </NavLink>
                    <NavLink to="/pokedex">
                        <MenuItem>
                            <MenuItemLink>
                                POKEDEX
                            </MenuItemLink>
                        </MenuItem>
                    </NavLink>
                    <NavLink to="/favorites">
                        <MenuItem>
                            <MenuItemLink>
                                FAVORITES {favoritesNumb.length}
                            </MenuItemLink>
                        </MenuItem>
                    </NavLink>
                    <MenuItem>
                        <MenuItemLink>
                            HOME4
                        </MenuItemLink>
                    </MenuItem>
                </Menu>
            </Wrapper>
        </Container>
    )
}

export default Navbar