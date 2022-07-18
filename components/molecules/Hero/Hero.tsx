import { Container, Flex, Heading, Text } from "@chakra-ui/react"

export const Hero = () => {
    return (
        <Flex w="100%" bgGradient="linear(to-r, orange.500, pink.300, cyan.500)">

            <Container py="32px" >
                <Heading>
                    Increase your productivity
                    <br />
                    Make your dreams come true

                </Heading>
                <Text mt="16px" fontSize="26px" color="gray.600">You are better than this</Text>
            </Container>
        </Flex >
    )
}