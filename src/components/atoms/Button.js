import { Button as ChakraButton } from "@chakra-ui/react";

export const Button = ({ children,...props}) => (
  <ChakraButton 
  fontWeight= "bold"
  fontSize= "16px"
  borderEndRadius= "4px"
  h= "56px" 
  bg= "brand.primary" 
  _hover={{ bg: 'brand.primary'
  }}

  {...props}
  >
  {children}
  </ChakraButton>




)