import Head from 'next/head'
import { useState } from 'react'
import Header from '../components/Header'

export default function Home() {
  const [isButtonToggled, toggleButton] = useState(false);
  return (
    <div>
      <Head>
        <title>NF</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className=''>
        <Header />
        <div className='container'>
          <button className='button' onClick={() => toggleButton(!isButtonToggled)}>
            <span className={`dibujo ${isButtonToggled ? 'toggled' : ''} bg-black after:bg-black before:bg-black`}></span>
          </button>
        </div>
      </main>
    </div>
  )
}