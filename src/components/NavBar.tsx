import { HStack, Image } from '@chakra-ui/react'
import logo from '../assets/logo.png';


import ColorModeSwitch from './ColorModeSwitch';
import SearchInput from './SearchInput';

interface Props {
  onSearch: (searchText: string) => void;
}

const NavBar = ({onSearch}: Props) => {
 
  return (
    <HStack padding='30px' direction={["column", "row"]}>
        <Image src={logo} height="60px" />
        <SearchInput onSearch={onSearch}/>
        <ColorModeSwitch />
    </HStack>
  )
}

export default NavBar