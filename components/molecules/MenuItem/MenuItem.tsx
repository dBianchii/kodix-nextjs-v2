import { Text, Container } from "@chakra-ui/react"
import Link from "next/link"

type MenuItemProps = {
    text: string
    href: string
	isSelected: boolean
}

export const MenuItem: React.FC<MenuItemProps> = ({ text, href, isSelected }) => (
    <Container backgroundColor={isSelected ? "blue" : ""} borderRadius={isSelected ? "5px" : ""}>
		
		<Text color="gray.500" fontSize="18px">
        	<Link href={href}>
        	    <a>{text}</a>
        	</Link>
    	</Text>
	</Container>
	
)
