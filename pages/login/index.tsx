import { Button, Center, Flex, Heading, Input, useColorMode, useColorModeValue, Text } from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";
import { signIn } from "next-auth/react";
import { FcGoogle } from 'react-icons/fc';


const Login = () => {
	const { colorMode, toggleColorMode } = useColorMode()
	const formBackground = useColorModeValue("gray.200", "gray.700")



	return (
		<Flex height="100vh" alignItems="center" justifyContent="center">
			<Flex direction="column" background={formBackground} p={12} rounded={6}>
				<Heading mb={6}> Login
					<Button ml={20} onClick={toggleColorMode}>{colorMode === "dark" ? < SunIcon color="orange.200" /> : <MoonIcon />}</Button>
				</Heading>
				<Input placeholder="email@email.com" variant="filled" mb={3} type="email" />
				<Input placeholder="******" variant="filled" mb={6} type="password" />
				<Button mb={6} colorScheme="teal">Log In</Button>

				<Button colorScheme="grey" onClick={() => signIn()} w={'full'} maxW={'md'} variant={'outline'} leftIcon={<FcGoogle />}>
					<Center>
						<Text>Sign in with Google</Text>
					</Center>
				</Button>
			</Flex>
		</Flex>
	)
}

export default Login
