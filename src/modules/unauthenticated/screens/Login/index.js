import { Flex,Image,} from "@chakra-ui/react"
import{Text,Link,Button } from '../../../../components/atoms'
import { Input} from '../../../../components/molecules'
import { useNavigate } from "react-router-dom";
import {useFormik} from 'formik';
import * as yup from 'yup';

export const LoginScreen = () => {
  const navigate = useNavigate()

  const { handleSubmit, values, handleChange, errors} = useFormik({
    initialValues: {
    email: '',
    password: ''
  },

    validationSchema: yup.object({
      email: yup. string()
       .email('E-mail inválido.')    
       .required('E-mail é obrigatório.'),
      password:yup.string()
       .min(6, 'senha deve ter ao menos 6 caracteres')
       .required('Senha é obrigatória.')
      
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
      px={["24px", "48px", "100px", "96px"]} // padding horizontal
      >   

      <Flex flexDir="column" w={['100%', '100%','100%', '416px']}>
        <Image src="/img/bookclub.png" alt="BookClub logo" w="172px" h="40px"></Image>
        <Text.ScreenTitle mt="48px">Login</Text.ScreenTitle>

        <Input 
        type="email"
          id="email"
          name="email"
          value={values.email} 
          mt="24px" 
          placeholder="email@exemplo.com" 
          onChange={handleChange}
          errors={errors.email}
          />
          {errors.email && <Text color="red.400" mt="3px">{errors.email}</Text>}

          <Input.Password 
          id="password"
          name="password"
          value={values.password}
          mt="16px"
          placeholder="Digite a senha"
          onChange={handleChange}
          errors={errors.password}
          />
          {errors.password && <Text color="red.400" mt="3px">{errors.password}</Text>}

      
         
      <Flex
        mt="8px"
        w="100%"
        align="flex-end"
        justify="flex-end"
        >
        <Link onClick={() => navigate('/forgot-password')}>Esqueceu sua senha?</Link>
      </Flex>           

        <Button onClick={handleSubmit} mb="12px" mt="24px">Login</Button>
        <Link.Action  
        onClick={() => navigate('/cadastrar')}
        
        mt="8px" text= "Não possui uma conta?" 
        actionText=  "Cadastre-se aqui"/>
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
  
  
