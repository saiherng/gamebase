import { Input, InputGroup } from '@chakra-ui/react'

import { IoIosSearch } from 'react-icons/io'


const SearchInput = () => {
  return (
    <InputGroup startElement={<IoIosSearch />}>
      <Input placeholder="Search for Games..." variant='outline' borderRadius={20}/>
    </InputGroup>
  )
}

export default SearchInput