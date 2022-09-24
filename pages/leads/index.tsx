import { Box, Button, Container, Flex, HStack, Text } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { TopBar } from '../../components/organisms/TopBar/TopBar'
import { Hero } from '../../components/molecules/Hero/Hero'
import { Body } from '../../components/organisms/Body/Body'




const Home: NextPage = () => {
  return (
	<div>
		<TopBar index={0}/>
		<Flex w="100%" bgGradient="linear(to-r, green.500, cyan.500)">
			<Container py="200px" >
				<Text color="white" fontSize="23px">
					Why, who are you? Are you who I think you are?
				</Text>
			</Container>
		</Flex >
	</div>
    
  )
}

export default Home
