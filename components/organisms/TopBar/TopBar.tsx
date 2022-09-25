import { Flex, HStack, Button, Text, Img, Container, useColorMode } from "@chakra-ui/react"
import { signIn, signOut, useSession } from "next-auth/react"
import { MenuItem } from "../../molecules/MenuItem/MenuItem"

type TopBar = {
    index: number
}

export const TopBar: React.FC<TopBar> = ({index}) => {
	const { data: session } = useSession()
	const {toggleColorMode} = useColorMode()
	return(
	<Flex w="100%" flexDirection="row" alignContent="center" p="8px 16px">
		<Text fontSize="36px" fontWeight="bold" lineHeight="42px" color="#1F79BA" flexGrow={1}>Kodix</Text>
		<HStack spacing="16px" alignContent="center">

			<MenuItem text="Leads" href="/leads" isSelected={index === 0}/>
			<MenuItem text="Product" href="/product" isSelected={index === 1}/>
			<MenuItem text="Pricing" href="/pricing" isSelected={index === 2}/>
		</HStack>
		<Flex marginLeft="82px">
			<Button mr={2} onClick={toggleColorMode}>Toggle Color Mode</Button>

			{session ? (
				<Flex>
					<Img borderRadius="full" boxSize="50px" margin="0px 8px" alt="profilePhoto" src={session.user?.image?.toString()}></Img>
					
					<Button variant="solid" colorScheme="blue" onClick={() => signOut()}>Log Out</Button>
				</Flex>
				
				) : (
				
				<Button variant="solid" colorScheme="blue" onClick={() => signIn()}>Get Started</Button>

			)}

		</Flex>
	</Flex>
)}
