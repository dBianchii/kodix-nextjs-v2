import { Container, Button, Center, Flex, Heading, Input, useColorMode, useColorModeValue, Text, ScaleFade, Box, useDisclosure, SlideFade } from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";
import { signIn } from "next-auth/react";
import { FcGoogle } from 'react-icons/fc';
import { TopBar } from "../../components/organisms/TopBar/TopBar";
import NavBar from "../../components/organisms/NavBar/NavBar";


const Product = () => {
	const { isOpen, onToggle } = useDisclosure()
	return (
		<div>
			<NavBar />
			<Flex height="100vh" alignItems="center" justifyContent="center">

				<Button onClick={onToggle}>Click Me</Button>

				<SlideFade in={isOpen} offsetY='20px'>
					<Box p='40px' color='white' mt='4' bg='blue.600' rounded='md' shadow='md'>
						Fade
					</Box>
				</SlideFade>
			</Flex>





		</div>

	)
}

export default Product
