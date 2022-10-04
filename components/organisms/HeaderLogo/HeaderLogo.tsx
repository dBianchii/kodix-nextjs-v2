import { Flex, Text, Container, Box } from "@chakra-ui/react"
import { Logo } from "../../atoms/Logo"

export const HeaderLogo = () => (
	<Flex w="100%" py="10px" bgGradient="linear(to-r, red.500, cyan.500)">
		<Container>
			<Logo/>
		</Container>
	</Flex >

)
