import type { NextPage } from 'next'
import Head from 'next/head'
import { themeClass } from '../theme/theme.css';
import Button from '../components/theButton/theButton'; 
import Code from '../components/theCode/theCode'; 
import Stack from '../components/theStack/theStack'; 

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className={themeClass}>

        <Stack direction='inline'>
          <Code background='transparent' padding='small'>Component</Code>

          <Code background='transparent'>Props</Code>
        </Stack>
      
        <hr/>

        <Stack direction='inline'>
          <Button 
            variant="primary" 
            >
            Button
          </Button>

          <Code>variant=primary</Code>
        </Stack>

        <hr/>

        <Stack direction='inline'>
          <Button 
            color="accent" 
            >
            Button
          </Button>
          
          <Code>color=accent</Code>
        </Stack>

        <Stack direction='inline'>

          <Button 
            color="subdued" 
            >
            Button
          </Button>

          <Code>color=subdued</Code>
        </Stack>

        <Stack direction='inline'>
          <Button 
            color="muted" 
            >
            muted
          </Button>

          <Code>color=muted</Code>
        </Stack>

        <hr/>

        <Stack direction='inline'>

          <Button 
            color="accent" 
            variant="primary"
            >
            Button
          </Button>

          <Stack>
            <Code>color=accent</Code>
            <Code>variant=primary</Code>
          </Stack>
        </Stack>
        

        <Stack direction='inline'>
          <Button 
            color="subdued" 
            variant="primary"
            >
            Button
          </Button>

          <Stack>
            <Code>color=subdued</Code>
            <Code>variant=primary</Code>
          </Stack>
        </Stack>

        <Stack direction='inline'>

          <Button 
            color="muted" 
            variant="primary"
            >
            Button
          </Button>
    
          <Stack>
            <Code>color=muted</Code>
            <Code>variant=primary</Code>
          </Stack>
        </Stack>

        <hr/>

        <Stack direction='inline'>

          <Button 
            variant="secondary"
            >
            Button
          </Button>

          <Code>variant=secondary</Code>
        </Stack>
    
        <hr/>

        <Stack direction='inline'>

          <Button 
            color="accent" 
            variant="secondary"
            >
            Button
          </Button>

          <Stack>
            <Code>color=accent</Code>
            <Code>variant=secondary</Code>
          </Stack>
        </Stack>

        <Stack direction='inline'>
          <Button 
            color="subdued" 
            variant="secondary"
            >
            Button
          </Button>

          <Stack>
            <Code>color=subdued</Code>
            <Code>variant=secondary</Code>
          </Stack>
        </Stack>

        <Stack direction='inline'>
          <Button 
            color="muted" 
            variant="secondary"
            >
            Button
          </Button>

          <Stack>
            <Code>color=muted</Code>
            <Code>variant=secondary</Code>
          </Stack>
        </Stack>

      </section>
    </>

  )
}

export default Home
