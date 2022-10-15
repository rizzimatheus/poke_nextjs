import Navbar from "./Navbar";
import Footer from "./Footer";

import styles from '../styles/Layout.module.css'
import Head from "next/head";

export default function Layout({ children }) {
  return(
    <>
      <Head>
        <title>PokeNextJS</title>
        <link rel={"shortcut icon"} href={"/favicon.ico"} />
      </Head>
      <Navbar />
      <main className={"main-container"}>{ children }</main>
      <Footer />
    </>
  )
}