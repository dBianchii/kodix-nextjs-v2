import { Container, Flex, Heading, Text } from "@chakra-ui/react"

export const Hero = () => {
    return (
        <Flex w="100%" bgGradient="linear(to-r, orange.500, pink.300, cyan.500)">

            <Container py="32px" >
                <Heading>
                    Create your forms
                    <br />
                    Capture your leads

                </Heading>
                <Text mt="16px" fontSize="26px" color="gray.600">Make your dreams come true</Text>
            </Container>
        </Flex >
    )
}
