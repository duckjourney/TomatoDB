/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import Results from './components/Results.tsx';
import SearchBar from './components/SearchBar.tsx';
import { Box, ChakraProvider } from '@chakra-ui/react';

function App() {

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:3000/api/aliments`);
        const result = await response.json();
        setData(result);
        return data;
      } catch (error) {
        console.error('Error fecthing data', error);
      }
    };
    fetchData();
  },[]);

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
        <SearchBar />
        <Results data={data} />
      </Box>
    </ChakraProvider>
  );
}

export default App;
