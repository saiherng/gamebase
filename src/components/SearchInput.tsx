import { Input, InputGroup } from '@chakra-ui/react'
import { useRef } from 'react';

import { IoIosSearch } from 'react-icons/io'

interface Props {
  onSearch: (searchText: string) => void;
}



const SearchInput = ({onSearch} : Props) => {

  const ref = useRef<HTMLInputElement>(null);

  return (
    
    <form onSubmit={(event)=> {
      event.preventDefault();
      if (ref.current) onSearch(ref.current.value);
    }}>
      <InputGroup startElement={<IoIosSearch />}>
        <Input ref={ref} placeholder="Search for Games..." variant='outline' borderRadius={20}/>
      </InputGroup>
    </form>
  )
}

export default SearchInput