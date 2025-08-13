import React from 'react';
import { ChakraProvider } from '@chakra-ui/react'; 
import { theme } from './styles/theme'; 
import { RouterProvider } from 'react-router-dom';
import { router } from 'router';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from 'services/api'; // ✅ Correto aqui

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme}>
        <RouterProvider router={router}/>      
      </ChakraProvider>
    </QueryClientProvider>
  );
}

export default App;
