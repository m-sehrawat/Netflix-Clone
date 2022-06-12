import { Box, Button, Heading, Input, Text } from "@chakra-ui/react";
import { netflixBackgroundImage } from "../../Constants/Images";
import { AiOutlineRight } from "react-icons/ai";

export const Landing = () => {

    return (
        <>
            <Box>
                <Box border={'1px solid black'} minH={'100vh'} backgroundImage={netflixBackgroundImage} bgSize={'cover'}>

                    <Box display={'flex'} justifyContent={'space-between'} px={'50px'} py={'20px'}>
                        <Heading color={'#e50914'}>NETFLIX</Heading>
                        <Button bg={'#e50914'} color={'white'} _hover={{ bg: '#e50914' }}>Sign In</Button>
                    </Box>

                    <Box maxW={'700px'} m={'20vh auto auto'} textAlign='center' color={'white'}>
                        <Heading fontSize={'65px'}>Unlimited movies, TV shows and more.</Heading>
                        <Text fontSize={'25px'} mt={'20px'} fontWeight={600}>Watch anywhere. Cancel anytime.</Text>
                        <Text fontSize={'20px'} mt={'20px'} fontWeight={600}>Ready to watch? Enter your email to create or restart your membership.</Text>
                        <Box mt={'20px'} display={'flex'} justifyItems={'center'}>
                            <Input borderRadius={'0px'} h={'70px'} type={'email'} size='lg' bg={'white'} color={'black'} placeholder='Email address' />
                            <Button rightIcon={<AiOutlineRight />} borderRadius={'0px'} h={'70px'} bg={'#e30813'} _hover={{ bg: '#e50914' }} fontSize={'25px'} px={'60px'}>Get Started</Button>
                        </Box>
                    </Box>

                </Box>
            </Box>
        </>
    );
};