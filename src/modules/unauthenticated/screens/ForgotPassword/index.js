import { Flex,Image,} from "@chakra-ui/react"
import{Text,Button } from '../../../../components/atoms'
import { Input} from '../../../../components/molecules'
import { useNavigate } from "react-router-dom";
import {useFormik} from 'formik';
import * as yup from 'yup';


export const ForgotPasswordScreen = () => {
  const navigate = useNavigate ();

  const { handleSubmit, values, handleChange, errors} = useFormik({
      initialValues: {
      email: '',
      
    },
  
      validationSchema: yup.object({
        email: yup. string()
         .email('E-mail inválido.')    
         .required('E-mail é obrigatório.'),
        
        
      }),
  
      onSubmit:(data) => {
        navigate ('/reset-password')
      }
    })
    




  return (
    <Flex flexDir= "row" w="100vw" h="100vh">
      <Flex 
      alignItems={['center','flex-start']}
      justifyContent="center"
      paddingLeft={['0px', '12px', '0px', '112px']}
      padding={['24px', '48px','90px',  '0px']}
      flexDir="column" 
      w={["100%","100%",'100%',"50%"]}
      h="100%"
      px={["24px", "48px", "100px", "96px"]} // padding horizontal
      >   

      <Flex 
      
      flexDir="column" 
      w={['100%', '100%','100%', '416px']}>

        <Image 
        src="/img/bookclub.png" 
        alt="BookClub logo" 
        w="172px" h="40px"></Image>

        <Text.ScreenTitle 
        mt="48px">Esqueceu senha
        </Text.ScreenTitle>

        <Text>
         Informe seu e-mail para enviarmo
          um código de recuperação:
       </Text>

        <Input 
          type="email"
          id="email"
          name="email"
          value={values.email}
          onChange={handleChange}
          error={errors.email} 
          mt="24px" 
          placeholder="email@exemplo.com"  />                      

       <Button onClick={handleSubmit} mt="24px">Avançar</Button>     
        
      </Flex>    
         
      </Flex>
      <Flex
      
      w= {['0%', '0%', '0%', '100%']}
      h="100%"
      backgroundImage ="url('/img/auth_background.png')"
      backgroundSize="cover"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      borderTopLeftRadius="12px"
      borderBottomLeftRadius="12px"            
      
      />
    </Flex>     
      
  )    
}
  
  
