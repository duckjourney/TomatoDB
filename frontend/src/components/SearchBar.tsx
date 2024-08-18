import { Input } from '@chakra-ui/react';

function SearchBar() {

  // const userInput = (e:React.ChangeEvent<HTMLInputElement>) => {
  //   setUserSearch(e.target.value)
  // }

  return (
    <Input
      placeholder="Search for an aliment"
      size="lg"
      w="70vw"
      marginBottom='10vh'
      autoFocus
      focusBorderColor="#6c63ff"
      type='search'
      // onChange={userInput}
    />
  );
}

export default SearchBar;
// {setUserSearch}:{setUserSearch:React.Dispatch<React.SetStateAction<string>>}