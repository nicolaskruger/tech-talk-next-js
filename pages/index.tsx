import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styled from 'styled-components'
import { Container, Layout, PptPrevNext } from '../components'
import { ImageC } from '../components/image/image.container'
import { FRONTEND_ROUTES, IMG } from '../constants'

const Main = styled.main`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const { NEXT_JS_LOGO, VERSEL_LOGO } = IMG;

const { FEATURE } = FRONTEND_ROUTES;

const size = 200;

const Home: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>
          home
        </title>
      </Head>
      <PptPrevNext next={FEATURE} />
      <Container>
        <Main>
          <ImageC wwidth={size} wheigth={size} src={NEXT_JS_LOGO} alt={NEXT_JS_LOGO} />
          <ImageC wwidth={size} wheigth={size} src={VERSEL_LOGO} alt={VERSEL_LOGO} />
        </Main>
      </Container>
    </Layout>
  )
}

export default Home
