import React, {useState} from 'react';
import Logo from './Logo';
import { MenuLinks, MenuToggle, NavBarContainer } from './MenuItem';

export const NavBar = (props) => {
  const [isOpen, setIsOpen] = useState(false)
 
  const toggle = () => setIsOpen(!isOpen)
 
  return (
    <NavBarContainer {...props}>
      <Logo
        w="100px"
        color={["white", "white", "primary.500", "primary.500"]}
      />
      <MenuToggle toggle={toggle} isOpen={isOpen} />
      <MenuLinks isOpen={isOpen} />
    </NavBarContainer>
  )
}
