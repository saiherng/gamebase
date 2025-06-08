import { HStack, Image } from '@chakra-ui/react'
import logo from '../assets/logo.png';


import ColorModeSwitch from './ColorModeSwitch';


const NavBar = () => {
 
  return (
    <HStack justifyContent='space-between' padding='30px'>
        <Image src={logo} height="60px" />
        <ColorModeSwitch />
    </HStack>
  )
}

export default NavBar