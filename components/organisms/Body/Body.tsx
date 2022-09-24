import { Flex, Text, Container } from "@chakra-ui/react"
import Link from "next/link"


type Body = {
    text: string
}

export const Body: React.FC<Body> = ({ text }) => (
	<Flex w="100%" bgGradient="linear(to-r, orange.500, pink.300, cyan.500)">

		<Container py="32px" >
			<Text color="gray.500" fontSize="18px">
    		    {text}
    		</Text>
		</Container>
	</Flex >
    
)
