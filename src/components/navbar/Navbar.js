import React, {useState} from 'react'
import { Container, LogoContainer, Menu, MenuItem, MenuItemLink, MobileIcon, Wrapper } from './Navbar.elements'
import { FaBattleNet, FaBars, FaTimes } from "react-icons/fa"

const Navbar = () => {
    const [showMobileMenu, setShowMobileMenu] = useState(false);
   
    return (
        <Container>
            <Wrapper>
                <LogoContainer>
                    <FaBattleNet/>
                    <p>123</p>
                </LogoContainer>
                <MobileIcon onClick={() => setShowMobileMenu(!showMobileMenu)}>
                    {
                        showMobileMenu ? <FaTimes/> : <FaBars/>
                    }
                </MobileIcon>
                <Menu open={showMobileMenu}>
                    <MenuItem>
                        <MenuItemLink>
                            HOME
                        </MenuItemLink>
                    </MenuItem>
                    <MenuItem>
                        <MenuItemLink>
                            HOME2
                        </MenuItemLink>
                    </MenuItem>
                    <MenuItem>
                        <MenuItemLink>
                            HOME3
                        </MenuItemLink>
                    </MenuItem>
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