import { useEffect, useState } from 'react';
import "../styles/chaitanya/globals.css";
import "../styles/chaitanya/desktop.css";
import "../styles/chaitanya/tab.css";
import "../styles/chaitanya/mobile.css";
import "../styles/chaitanya/dark.css";
import Nav from "@/components/chaitanya/Nav";
import Footer from "@/components/chaitanya/Footer";
import Head from 'next/head';
import { Provider } from 'react-redux';
import store from "../redux/store";
import MobileBottomNavbar from '../components/chaitanya/MobileBottomNavbar';

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
