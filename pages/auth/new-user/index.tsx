import { Button, Center, Flex, Heading, Input, useColorMode, useColorModeValue, Text, FormControl, Box, } from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";
import { signIn, getProviders, LiteralUnion, ClientSafeProvider, useSession } from "next-auth/react";
import { BuiltInProviderType } from "next-auth/providers";
import { FcGoogle } from 'react-icons/fc';
import { FC, useEffect, useState } from "react";
import { Body } from "../../../components/organisms/Body/Body";


const Login: FC = () => {
	const { colorMode, toggleColorMode } = useColorMode()
	const formBackground = useColorModeValue("gray.200", "gray.700")


	return (
		<Flex height="100vh" alignItems="center" justifyContent="center">
			<Flex direction="column" background={formBackground} p={12} rounded={6}>
				<Box>
					Hello
				</Box>

			</Flex>
		</Flex>
	)
}
export default Login
