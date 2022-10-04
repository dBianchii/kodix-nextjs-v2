
import { Text, Flex, Container, Center, Link, useBreakpointValue } from "@chakra-ui/react"

export const Logo = () => {
	return (
		
		
			<Center>
				<Link href="/">
					<Text
						textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
						fontFamily={'heading'}

						fontWeight="bold"
						color={"red.400"}
						fontSize={40}
						>
						Kodix
					</Text></Link>
			</Center>
		
		
	)
}
