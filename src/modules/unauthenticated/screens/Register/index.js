import { Flex,Image,} from "@chakra-ui/react"
import{Text,Link,Button } from '../../../../components/atoms'
import { Input} from '../../../../components/molecules'
import { useNavigate } from "react-router-dom";


export const RegisterScreen = () => {
   const navigate = useNavigate ();
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
        <Input mt="24px" placeholder="Nome completo" />
        <Input mt="16px" placeholder="E-mail" />
        <Input.Password mt="16px" placeholder="Digite sua senha" />
        <Input.Password mt="16px" placeholder="Confirme sua senha"/>
   




        <Button mt="24px" >Cadastrar</Button>
        <Link.Action onClick={() => navigate('/login')} mt="48px" text= 
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
  
  
