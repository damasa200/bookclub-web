import { useState } from "react"
import { Button, Input as ChakraInput, InputGroup, InputRightElement, } from "@chakra-ui/react"
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons"
import{Text}from 'components/atoms/Text'

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

Input.Password = ({value, onChange, id, name,...props})=> {
   const[show, setShow] = useState(false)
   const handleClick = () => setShow (!show)
   return (

    <InputGroup 
      display="flex"
      alignItems="center"
      justifyContent="center"
      h="56px"
      size="md"
      {...props}
      >    

       <Input
        id={id}
        name={name}
        onChange={onChange}
        value={value}
        focusBorderColor="brand.primary"
        pr="4.5rem"
        fontSize="16px"
        type={show ? 'text' : 'password'}
        placeholder={'placeholder'} 
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


       {show ? (<ViewOffIcon boxSize={"18px"} 
       color="black" />) : (<ViewIcon boxSize=
       {"18px"} color="black"/>) }

           </Button>      
         </InputRightElement> 
      </InputGroup>   
   )
 }
 Input.Password.displayName = "InputPasssword"
         
          
     

            
                
        








      


