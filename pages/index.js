import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from "../components/Header";
import Poster from '../components/Poster';
import { configureStore } from '@reduxjs/toolkit';
import PizzaItems from '../components/PizzaItems';
export default function Home({products}) {
  // console.log("products",products)
  return (
    <div className="">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

     <Header/>

     <Poster/>

     <PizzaItems products={products} />
    </div>
  )
}
export async function getServerSideProps(context) {
  const products = await fetch(
    "https://run.mocky.io/v3/ec196a02-aaf4-4c91-8f54-21e72f241b68"
  ).then((response) => response.json());
  return {
    props: {
      products,
    },
  };
}