import { Box, Container, Flex, HStack, SimpleGrid, Text } from "@chakra-ui/react"

export const LandingFooter = () => {
    return (
        <Box as="footer" backgroundColor="blue.300" py="40px" >
            <Container>
                <SimpleGrid columns={2} spacing={1}>
                    <Box>Kodix 2022</Box>
                    <Flex flexDirection="column">
                        <Text mb="16px">Follow us on</Text>
                        <HStack spacing={4} direction="row">

                            <Text>Twitter</Text>
                            <Text>Instagram</Text>
                            <Text>Facebook</Text>
                        </HStack>

                    </Flex>
                </SimpleGrid>
            </Container>
        </Box>
    )
}