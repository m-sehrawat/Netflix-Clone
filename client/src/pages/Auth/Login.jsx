import { Box, Button, Heading, Input, Text } from "@chakra-ui/react";
import { netflixBackgroundImage } from "../../Constants/Images";

export const Login = () => {

    return (
        <>
            <Box minH={'100vh'} pt={'80px'} backgroundImage={netflixBackgroundImage}>
                <Box m={'auto'} maxW={'450px'} bg={'blackAlpha.800'} h={'600px'} p={'70px'}>
                    <Heading color={'white'} mb={'30px'}>Sign In</Heading>
                    <Input type={'email'} mb={'20px'} h={'50px'} color={'white'} bg={'#333333'} border={'none'} placeholder='Email' />
                    <Input type={'password'} mb={'40px'} h={'50px'} color={'white'} bg={'#333333'} border={'none'} placeholder='Password' />
                    <Button bg={'#e50914'} h={'50px'} _hover={{ bg: '#e50914' }} fontWeight={600} color={'white'} w={'100%'}>Sign In</Button>
                    <Box mt={'60px'} fontSize={'18px'}>
                        <Text display={'inline'} color={'#64605b'}>New to Netflix? </Text>
                        <Text display={'inline'} color={'white'}>Sign up now.</Text>
                    </Box>
                </Box>
            </Box>
        </>
    );
};