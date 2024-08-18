import { Input } from '@chakra-ui/react';
import { useState } from 'react';

function SearchBar() {
  const [searchItem, setSearchItem] = useState('');

  const userInput = (e:React.ChangeEvent<HTMLInputElement>) => {
    setSearchItem(e.target.value)
    console.log(searchItem)
  }

  return (
    <Input
      placeholder="Search for an aliment"
      size="md"
      w="70vw"
      marginBottom='5vh'
      autoFocus
      focusBorderColor="#6c63ff"
      onChange={userInput}
    />
  );
}

export default SearchBar;
