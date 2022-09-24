import { SimpleGrid, Box, Text, Flex, UnorderedList, ListItem, Container } from '@chakra-ui/react'

export const LandingBody = () => (
    <Container>
        <SimpleGrid columns={2} spacing={10} p="64px 24px">
            <Box>
                <Box backgroundColor="gray.300" width="100%" height="225px" borderRadius="16px"></Box>
            </Box>
            <Flex flexDirection="column" justifyContent="center">
                <Text mb="8px">I will make your dreams come true.</Text>
                <UnorderedList>
                    <ListItem>Create Forms</ListItem>
                    <ListItem>View your leads</ListItem>
                    <ListItem>Track your growth</ListItem>
                    <ListItem>Grow your business</ListItem>
                    <ListItem>Become god ✨👴✨</ListItem>
                </UnorderedList>
            </Flex>
        </SimpleGrid>
    </Container>

)
