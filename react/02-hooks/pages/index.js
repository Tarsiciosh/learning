import Head from 'next/head'
import StateAndEffectCounter from './components/02-hooks-at-a-glance'
import Counter from './components/03-using-the-state-hook'
import EffectExample from './components/04-using-the-effect-hook' 
import ChatRecipientPicker from './components/06-building-your-own-hooks'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <p className="display-1"> Learning hooks</p> 

        <StateAndEffectCounter/>
        <br/>

        <Counter/>

        <br/>
        
        < EffectExample/>

        <ChatRecipientPicker/>
        
      </main>

      <footer>
      </footer>
    </div>
  )
}
