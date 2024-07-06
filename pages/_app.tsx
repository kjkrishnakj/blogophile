import "../styles/globals.css";
import type { AppProps } from "next/app";
import Script from "next/script";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";
import { useRouter } from 'next/router';
import LoadingBar from 'react-top-loading-bar'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React from "react";
import mongoose, { ObjectId } from "mongoose";
 
export default function App({ Component, pageProps }: AppProps) {
 
  const router = useRouter()  
  const [user, setUser] = useState<{ value: string | null }>({ value: null });
  const[email,setEmail]=useState("");
  const [key, setKey] = useState<number>()
  const [progress, setProgress] = useState(0)
  // const [email,setEmail]=useState<{ value: string | null }>({value: null})
  
  useEffect(() => {
        
    
    const email = localStorage.getItem('email')
  
    setEmail(email);
}, [router.query])
  useEffect(() => {
  
    router.events.on('routeChangeStart', () => {
      setProgress(40)
    })
    router.events.on('routeChangeComplete', () => {
      setProgress(100)
    })
     
    const token = localStorage.getItem('token');
    if (token) {
      setUser({ value: token })
    }
    setKey(Math.random());
  }, [router.query]);

  const logout = () => {
    localStorage.removeItem('token')
    setUser({ value: null })

    setKey(Math.random())
    router.push('/login')
  }   
  return (
    <>
      <LoadingBar
        color="#F59E0B"
        progress={progress}
        waitingTime={200}
        onLoaderFinished={() => setProgress(0)}
      />

      <ToastContainer />
      {key && <Navbar logout={logout} user={user} key={key}   />
      }<Component  email={email} user={user}   {...pageProps} />
      <Footer />

      <Script src="https://kit.fontawesome.com/628fde244b.js"></Script>
    </>
  );
}
