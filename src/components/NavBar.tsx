import { HStack, Image } from '@chakra-ui/react'
import logo from '../assets/logo.png';


import ColorModeSwitch from './ColorModeSwitch';
import SearchInput from './SearchInput';


const NavBar = () => {
 
  return (
    <HStack padding='30px' direction={["column", "row"]}>
        <Image src={logo} height="60px" />
        <SearchInput />
        <ColorModeSwitch />
    </HStack>
  )
}

export default NavBar