import Head from 'next/head'
import { Inter } from 'next/font/google'
import NavBar from '@/components/navbar'
import { useEffect, useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const [isLbtnClick,setLbtnClick] = useState(false);

  useEffect(()=>{
    if(isLbtnClick){
      window.location.replace('/login');
    }
    return ()=>{setLbtnClick(false)}
  })

  return (
    <>
      <Head>
        <title>CEB Meter Reader</title>
        <meta name="description" content="Developer Test" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/ceb.png" />
      </Head>
      <main>
        <NavBar logoutTrigger={()=>setLbtnClick(true)}/>
      </main>
    </>
  )
}
