import { useState } from "react"
import {
  Button,
  Input as ChakraInput,
  InputGroup,
  InputRightElement,
  FormControl,
  FormErrorMessage,
} from "@chakra-ui/react"
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons"
import { Text } from 'components/atoms/Text'

// Componente base (Input normal)
export const Input = (props) => (
  <>
    <ChakraInput
      fontSize="16px"
      h="56px"
      focusBorderColor="brand.primary"
      {...props}
    />
    {props.error && <Text color="red">{props.error}</Text>}
  </>
)

// Componente de senha com erro abaixo
Input.Password = ({ value, onChange, id, name, error, ...props }) => {
  const [show, setShow] = useState(false)
  const handleClick = () => setShow(!show)

  return (
    <FormControl isInvalid={!!error} mb="4">
      <InputGroup
        display="flex"
        alignItems="center"
        justifyContent="center"
        h="56px"
        size="md"
      >
        <ChakraInput
          id={id}
          name={name}
          onChange={onChange}
          value={value}
          focusBorderColor="brand.primary"
          pr="4.5rem"
          fontSize="16px"
          type={show ? 'text' : 'password'}
          placeholder={props.placeholder}
          {...props}
        />
        <InputRightElement h="100%">
          <Button
            bg="transparent"
            _hover={{ bg: 'transparent' }}
            size="sm"
            onClick={handleClick}
            h="100%"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            {show
              ? <ViewOffIcon boxSize="18px" color="black" />
              : <ViewIcon boxSize="18px" color="black" />}
          </Button>
        </InputRightElement>
      </InputGroup>

      {error && <FormErrorMessage>{error}</FormErrorMessage>}
    </FormControl>
  )
}

Input.Password.displayName = "InputPassword"







      


