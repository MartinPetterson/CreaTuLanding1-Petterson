// import './App.css'
import React from 'react'
import { Box, ChakraProvider } from '@chakra-ui/react'
import NavBar from './components/NavBar.jsx'
import ItemListContainer from './components/ItemListContainer.jsx'

const App = () => {
  return (
    <Box height="100vh" backgroundColor={"#4d5380"}>
    <ChakraProvider>
      <NavBar />
      <ItemListContainer saludo="Bienvenid@ a TStore" />
    </ChakraProvider>
    </Box>
  );
};

export default App
