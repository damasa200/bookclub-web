import { chakra } from '@chakra-ui/react';
export const Text= ({ children, ...props}) => (
  <chakra.text{...props}>{children}</chakra.text>
);

Text.ScreenTitle = ({children,...props}) => (
  <chakra.text
    color="brand.black"
    fontWeight="extrabold"
    fontSize={['18px', '24px']}
    {...props}
  >
   {children}
  </chakra.text>
  
);
Text.ScreenTitle.displayName = 'ScreenTitle';