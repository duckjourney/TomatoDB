import './App.css';
import SearchBar from './modules/SearchBar.tsx';
import { Box, ChakraProvider } from '@chakra-ui/react';

function App() {
  return (
    <ChakraProvider>
      <Box
        padding="10vmin"
        display="flex"
        alignItems="flex-start"
        justifyContent="center"
        minHeight="100vh"
        maxWidth="100vw"
        bg="#f1f8fe"
      >
        <SearchBar />
      </Box>
    </ChakraProvider>
  );
}

export default App;
