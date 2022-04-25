import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import {jsx,css} from '@emotion/react'
import Helmet from '../components/Helmet'
import { Section } from '../components/Styles'



const Home: NextPage = () => {
  return (
    <>
    <Helmet title="HOME"/>    
    <Section>
    <div>Main</div>
    </Section>
    </>
  )
}

export default Home
