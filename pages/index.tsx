import { Box, Button, Container, Flex, HStack, Text } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { MenuItem } from '../components/molecules/MenuItem/MenuItem'
import styles from '../styles/Home.module.css'
import { Hero } from '../components/molecules/Hero/Hero'
import { TopBar } from '../components/organisms/TopBar/TopBar'
import { LandingBody } from '../components/organisms/LandingBody/LandingBody'
import { LandingFooter } from '../components/organisms/LandingFooter/LandingFooter'
import { useSession } from 'next-auth/react'
import NavBar from '../components/organisms/NavBar/NavBar'

const Home: NextPage = ({ data }) => {
	
	const { data: session, status } = useSession()

	if (data){
		console.log(data);
	}

	return (
		<div className={styles.container}>
			<Head>
				<title>Kodix</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<NavBar />

			<Flex>
				<Hero />
			</Flex>

			<LandingBody />
			<LandingFooter></LandingFooter>
		</div>
	)
}

export async function getServerSideProps() {
	// Fetch data from external API
	//const res = await fetch(`https://.../data`)
	//const data = await res.json()
//
	//// Pass data to the page via props
	const data = 'Test'
	return { props: { data } }
}

export default Home
