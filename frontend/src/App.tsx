 import { useEffect, useState } from 'react';
import Results from './components/Results.tsx';
import SearchBar from './components/SearchBar.tsx';
import { Box, ChakraProvider } from '@chakra-ui/react';

function App() {

  const [data, setData] = useState([]);
  const [userInput, setUserInput] = useState('')

  const query = (e:React.ChangeEvent<HTMLInputElement>) => {
    setUserInput(e.target.value)
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (userInput !== "") {
          const response = await fetch(`http://localhost:3000/api/aliments/${userInput}`);
          const result = await response.json();
          setData(result);
        }

      } catch (error) {
        console.error('Error fecthing data', error);
      }
    };
    fetchData();
  },[userInput]);

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
