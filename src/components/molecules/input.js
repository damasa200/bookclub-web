import { useState } from "react"
import { Button, Input as ChakraInput, InputGroup, InputRightElement, } from "@chakra-ui/react"
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons"

export const Input = (props) => (
   <ChakraInput fontSize="16px"  
   h="56px"focusBorderColor=
   "brand.primary"{...props}/>) 

Input.Password = (props)=> {
   const[show, setShow] = useState(false)
   const handleClick = () => setShow (!show)
   return (


      <InputGroup h="56px" size ='md'>
         <Input

         focusBorderColor="brand.primary"
         pr="4.5rem"
         
         type={show ? ' text' : 'password'}
         placeholder="Digite sua Senha"   
          /> 


          <InputRightElement width= "4.5rem"> 
            <Button 

            bg='transparent'_hover=
            {{bg:'transparent'}} h="1.95rem size="
            sm onClick={handleClick}>

              {show ? (<ViewOffIcon boxSize={"24px"} 
              color="black" />) : (<ViewIcon boxSize=
              {"24px"} color="black"/>) }

           </Button>      
         </InputRightElement> 
      </InputGroup>   
   )
 }
 Input.Password.displayName = "InputPasssword"
         
          
     

            
                
        








      


