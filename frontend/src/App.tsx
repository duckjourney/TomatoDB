// import { useEffect, useState } from 'react';
import Results from './components/Results.tsx';
import SearchBar from './components/SearchBar.tsx';
import { Box, ChakraProvider } from '@chakra-ui/react';

function App() {
  

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
        bg="#f1f8fe"
      >
        <SearchBar />
        <Results />
      </Box>
    </ChakraProvider>
  );
}

export default App;
