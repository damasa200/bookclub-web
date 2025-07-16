import React from 'react';
import {ChakraProvider} from '@chakra-ui/react'; 
import {theme} from './styles/theme'; 
import {LoginScreen} from './modules/unauthenticated/screens';
function App() {
  return (
    <ChakraProvider theme={theme}>
      <LoginScreen/>
    </ChakraProvider>
  );
}

export default App;
