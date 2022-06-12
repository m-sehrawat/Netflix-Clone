import { Box, Button, Heading, Input, Text, useToast } from "@chakra-ui/react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { netflixBackgroundImage } from "../../Constants/Images";
import { getLoginSuccess} from "../../redux/auth/actions";
import { loginValidator } from "../../utils/loginValidator";
import { notify } from "../../utils/notify";

export const Login = () => {

    const [login, setLogin] = useState({ email: "", password: "" });
    const toast = useToast();
    const dispatch = useDispatch();

    const handleInputChange = ({ target: { name, value } }) => {
        setLogin({ ...login, [name]: value });
    }

    const handleSubmit = async () => {
        const result = loginValidator(login);
        if (!result.status) {
            notify(toast, result.message, 'error');
        } else {
            dispatch(getLoginSuccess(login, toast));
        }
    }

    return (
        <>
            <Box minH={'100vh'} pt={'80px'} backgroundImage={netflixBackgroundImage}>
                <Box m={'auto'} maxW={'450px'} bg={'blackAlpha.800'} h={'600px'} p={'70px'}>
                    <Heading color={'white'} mb={'30px'}>Sign In</Heading>
                    <Input onInput={handleInputChange} value={login.email} name="email" type={'email'} mb={'20px'} h={'50px'} color={'white'} bg={'#333333'} border={'none'} placeholder='Email' />
                    <Input onInput={handleInputChange} value={login.password} name="password" type={'password'} mb={'40px'} h={'50px'} color={'white'} bg={'#333333'} border={'none'} placeholder='Password' />
                    <Button onClick={handleSubmit} bg={'#e50914'} h={'50px'} _hover={{ bg: '#e50914' }} fontWeight={600} color={'white'} w={'100%'}>Sign In</Button>
                    <Box mt={'60px'} fontSize={'18px'}>
                        <Text display={'inline'} color={'#64605b'}>New to Netflix? </Text>
                        <Text display={'inline'} color={'white'}>Sign up now.</Text>
                    </Box>
                </Box>
            </Box>
        </>
    );
};