import { Box, ChakraProvider } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import Results from './components/Results.tsx';
import SearchBar from './components/SearchBar.tsx';

const host = import.meta.env.VITE_HOST;

function App() {
  const query = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput(e.target.value);
  };
  const [data, setData] = useState([]);
  const [userInput, setUserInput] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (userInput !== '') {
          const response = await fetch(host + userInput);
          const result = await response.json();
          setData(result);
        }
      } catch (error) {
        console.error('Error fecthing data', error);
      }
    };
    fetchData();
  }, [userInput]);

  return (
    <ChakraProvider>
      <Box
        padding="10vh 0 10vh 0"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="flex-start"
        minHeight="100vh"
        maxWidth="100vw"
        bg="#fff"
      >
        <SearchBar query={query} />
        <Results data={data} userInput={userInput} />
      </Box>
    </ChakraProvider>
  );
}

export default App;
