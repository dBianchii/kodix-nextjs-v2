import { Button, Center, Flex, Heading, Input, useColorMode, useColorModeValue, Text, FormControl, } from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";
import { signIn, getProviders, LiteralUnion, ClientSafeProvider, useSession } from "next-auth/react";
import { BuiltInProviderType } from "next-auth/providers";
import { FcGoogle } from 'react-icons/fc';
import { FC, useEffect, useState } from "react";


const Login: FC = () => {
	const { colorMode, toggleColorMode } = useColorMode()
	const formBackground = useColorModeValue("gray.200", "gray.700")

	const [providers, setproviders] = useState<Record<
		LiteralUnion<BuiltInProviderType, string>,
		ClientSafeProvider
	> | null>();
	const { data: session, status } = useSession()

	useEffect(() => {
		const setTheProviders = async () => {
			const setupProviders = await getProviders()
			setproviders(setupProviders)
		}
		setTheProviders()
	}, [])

	if (status == 'loading') {
		return <h1>Loading...</h1>
	}

	return (
		<Flex height="100vh" alignItems="center" justifyContent="center">
			<Flex direction="column" background={formBackground} p={12} rounded={6}>
				<Heading mb={6}> Login
					<Button ml={20} onClick={toggleColorMode}>{colorMode === "dark" ? < SunIcon color="orange.200" /> : <MoonIcon />}</Button>
				</Heading>
				<br />
				{providers?.email && (
					<Button mt={3} onClick={() => signIn(providers.email.id, { callbackUrl: '/' })}>
						Email Login
					</Button>
				)}
				{providers?.google && (

					<Button mt={3} onClick={() => signIn(providers.google.id, { callbackUrl: '/' })} colorScheme="grey" w={'full'} maxW={'md'} variant={'outline'} leftIcon={<FcGoogle />}>
						<Center>
							<Text>Sign in with Google</Text>
						</Center>
					</Button>
				)}




			</Flex>
		</Flex>
	)
}
export default Login


export async function getServerSideProps() {
	const providers = await getProviders()
	return {
		props: { providers },
	}
}
