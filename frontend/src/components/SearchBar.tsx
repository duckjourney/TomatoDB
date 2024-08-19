import { Input } from '@chakra-ui/react';

function SearchBar({
  query,
}: {
  query: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <Input
      placeholder="Search for an aliment"
      size="lg"
      w="70vw"
      marginBottom="10vh"
      autoFocus
      focusBorderColor="#6c63ff"
      type="search"
      onInput={query}
    />
  );
}

export default SearchBar;
