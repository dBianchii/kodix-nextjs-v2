import { Flex, HStack, Button, Text } from "@chakra-ui/react"
import { signIn } from "next-auth/react"
import { MenuItem } from "../../molecules/MenuItem/MenuItem"

type TopBar = {
    index: number
}

export const TopBar: React.FC<TopBar> = ({index}) => (
	<Flex w="100%" flexDirection="row" alignContent="center" p="8px 16px">
		<Text fontSize="36px" fontWeight="bold" lineHeight="42px" color="#1F79BA" flexGrow={1}>Kodix</Text>
		<HStack spacing="16px" alignContent="center">
			<MenuItem text="Leads" href="/leads" isSelected={index === 0}/>
			<MenuItem text="Product" href="/product" isSelected={index === 1}/>
			<MenuItem text="Pricing" href="/pricing" isSelected={index === 2}/>
		</HStack>
		<Flex marginLeft="82px">
			<Button variant="solid" colorScheme="blue" onClick={() => signIn()}>Get Started</Button>
		</Flex>
	</Flex>
)
