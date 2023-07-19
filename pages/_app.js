import { useEffect, useState } from 'react';
import "../styles/globals.css";
import "../styles/desktop.css";
import "../styles/tab.css";
import "../styles/mobile.css";
import "../styles/dark.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Head from 'next/head';
import { Provider } from 'react-redux';
import store from "../redux/store";
import MobileBottomNavbar from '../components/MobileBottomNavbar';

export default function App({ Component, pageProps }) {
  const [darkTheme,setDarkTheme] = useState(false);

  useEffect(()=>{
  },[darkTheme])

  return <>
    <Head>
      <title>Trendy Shop</title>
    </Head>
    
    <Provider store={store}>
      <Nav />
      <Component {...pageProps} darkTheme={darkTheme}/>
      <Footer />
      <MobileBottomNavbar/>
    </Provider>
  </>
}
