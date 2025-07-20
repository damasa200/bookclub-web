import { Flex,Image,} from "@chakra-ui/react"
import{Text,Button,Link } from '../../../../components/atoms'
import { Input} from '../../../../components/molecules'
// import { useNavigate } from "react-router-dom";


export const ResetPasswordScreen = () => {
  // const navigate = useNavigate ();
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

        <Input mt="24px" placeholder="Código 00000"/>
        <Input.Password mt="24px" placeholder="Nova senha"/>
        <Input.Password mt="24px" placeholder="Confirma nova senha"/>             
        <Button mb= "12px" mt="24px">Salvar</Button>  
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
  
  
