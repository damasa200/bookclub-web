import { Flex,Image,} from "@chakra-ui/react"
import{Text,Button,Link } from '../../../../components/atoms'
import { Input} from '../../../../components/molecules' 
import {useFormik} from 'formik';
import * as yup from 'yup'
import { useNavigate } from "react-router-dom";


export const ResetPasswordScreen = () => {
const Navigate = useNavigate ();

 const { handleSubmit, values, handleChange, errors} = useFormik({
       initialValues: {
        token:'' ,              
        password: '',
        confirmPassword:''
     },
   
      validationSchema: yup.object({
        token: yup.string()
          .length(4, 'Token deve conter 4 caracteres.')
          .required('Token é obrigatório.'),          

        password: yup.string()
          .min(6, 'Senha deve ter ao menos 6 caracteres.')
          .required('Senha é obrigatória.'),

        confirmPassword: yup.string()
           .required('Confirmar a senha é obrigatória.')
           .min(6, 'Confirmar senha deve ter ao menos 6 caracteres.')
           .oneOf([yup.ref('password'), null], 'Senhas não são iguais.')
        
         
       }),
   
       onSubmit:(data) => {        
         Navigate('/')
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

      <Flex flexDir="column" w={['100%', '100%','100%', '416px']}>
        <Image src="/img/bookclub.png" alt="BookClub logo" w="172px" h="40px"></Image>
        <Text.ScreenTitle mt="48px">Nova senha</Text.ScreenTitle>
        <Text>
         Digite o código enviado e uma nova senha no campo abaixo:
       </Text>

        <Input 
        id="token"
        name="token"
        value={values.token}
        onChange={handleChange}
        error={errors.token}
        mt="24px" 
        placeholder="Código 00000"
        maxLength={4}
        />
        


        <Input.Password 
        id="password"
        name="password"
        value={values.password}
        onChange={handleChange}
        error={errors.password} 
        mt="24px" 
        placeholder="Nova senha"/>


        <Input.Password
        name="confirmPassword"
        value={values.confirmPassword}
        onChange={handleChange}
        error={errors.confirmPassword}
        mt="24px" placeholder="Confirma nova senha"/>             
        <Button mb= "12px" mt="24px"onClick={handleSubmit}>Salvar</Button>  
        
         <Link.Action
           mt={['6px','48px']} text= "Não recebeu o código?" 
           actionText=  "Clique aqui para reenviar" />       
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
  
  
