import { Text as ChakraText } from '@chakra-ui/react';

// Componente base de texto
export const Text = ({ children, ...props }) => (
  <ChakraText {...props}>{children}</ChakraText>
);

// Variação para títulos de tela
Text.ScreenTitle = ({ children, ...props }) => (
  <ChakraText
    color="brand.black"
    fontWeight="extrabold"
    fontSize={['18px', '24px']}
    {...props}
  >
    {children}
  </ChakraText>
);

Text.ScreenTitle.displayName = 'ScreenTitle';
