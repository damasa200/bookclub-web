import { Flex,Image,} from "@chakra-ui/react"
import{Text,Link,Button } from '../../../../components/atoms'
import { Input} from '../../../../components/molecules'
import { useNavigate } from "react-router-dom";
import {useFormik} from 'formik';
import * as yup from 'yup';


export const RegisterScreen = () => {
   const navigate = useNavigate ()

   const { handleSubmit, values, handleChange, errors} = useFormik({
       initialValues: {
       name: '',
       email: '',
       password: '',
       confirmPassword:''
     },
   
      validationSchema: yup.object({
        name: yup.string()
          .min(3, 'Nome deve ter ao menos 3 caracteres.')
          .required('Nome é obrigatório.'),
    
        email: yup.string()
          .email('E-mail inválido.')    
          .required('E-mail é obrigatório.'),

        password: yup.string()
          .min(6, 'Senha deve ter ao menos 6 caracteres.')
          .required('Senha é obrigatória.'),

        confirmPassword: yup.string()
           .required('Confirmar a senha é obrigatória.')
           .min(6, 'Confirmar senha deve ter ao menos 6 caracteres.')
           .oneOf([yup.ref('password'), null], 'Senhas não são iguais.')
        
         
       }),
   
       onSubmit:(data) => {
         console.log({ data })
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
      px={["24px", "48px", "100px", "96px"]} 
      >   

      <Flex flexDir="column" w={['100%', '100%','100%', '416px']}>
        <Image src="/img/bookclub.png" alt="BookClub logo" w="172px" h="40px"></Image>
        <Text.ScreenTitle mt="48px">Cadastro</Text.ScreenTitle>
        <Input 
        type="text"
        id="name"
        name="name"
        value={values.name}
        onChange={handleChange}
        error={errors.name}
        mt="24px" 
        placeholder="Nome completo" />

        <Input
        id="email"
        name="email"
        value={values.email}
        onChange={handleChange}
        error={errors.email}
        mt="16px" 
        placeholder="E-mail" />

      <Input.Password 
        id="password"
        name="password"
        value={values.password}
        onChange={handleChange}
        error={errors.password}        
        mt="16px" 
        placeholder="Digite sua senha" />

        <Input.Password 
        id="confirmPassword"
        name="confirmPassword"
        value={values.confirmPassword}
        onChange={handleChange}
        error={errors.confirmPassword}
        mt="16px" 
        placeholder="Confirme sua senha"/>       




        <Button onClick={handleSubmit} mb="12px" mt="24px" >Cadastrar</Button>
        <Link.Action onClick={() => navigate('/')} mt="8px" text= 
        "Já possui uma conta?" actionText= "Faça Login"/>
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
  
  
