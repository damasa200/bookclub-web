import { Flex,Image,} from "@chakra-ui/react"
import{Text,Link,Button } from '../../../../components/atoms'
import { Input} from '../../../../components/molecules'


export const LoginScreen = () => {
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
        <Input mt="24px" placeholder="email@exemplo.com" mb="4" />
        <Input.Password mt="16px" placeholder="****************"/>
         
      <Flex
        mt="8px"
        w="100%"
        align="flex-end"
        justify="flex-end"
        >
        <Link>Esqueceu sua senha?</Link>
      </Flex>           

        <Button mt="24px">Login</Button>
        <Link.Action  mt="48px" text= "Não possui uma conta?" actionText=  "Cadastre-se aqui"/>
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
  
  
