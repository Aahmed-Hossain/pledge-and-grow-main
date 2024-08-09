import React, { useEffect } from 'react';
//= Packages
import Head from 'next/head';
//= Layout
import Layout from '@/layouts/default';
//= Components
import Loader from '@/components/Common/Loader';
import LinesTwo from '@/components/Common/LinesTwo';
import Navbar from '@/components/Common/MainNavbar';
import Header from '@/components/Maintenance/Header';
import Services from '@/components/Maintenance/Services';
import About from '@/components/Maintenance/About';
import Marq from '@/components/Corporate/Marq';
import Portfolio from '@/components/Corporate/Portfolio';
import Numbers from '@/components/Corporate/Numbers';
import Testimonials from '@/components/Corporate/Testimonials';
import Block from '@/components/Corporate/Block';
import Pricing from '@/components/Corporate/Pricing';
import Blog from '@/components/Corporate/Blog';
import Footer from '@/components/HomeMain/Footer';
import Values from '@/components/Maintenance/Values';

function HomeCorporate() {
  useEffect(() => {
    document.body.classList.add('home-corp');
    return () => document.body.classList.remove('home-corp');
  }, []);

  return (
    <>
      <Head>
        <title>Pledge and Grow - Site Web</title>
      </Head>

      <Loader />

      {/* original */}


      <LinesTwo />
      <Navbar />
      <main className="main-bg">
        <Header />
        <Services />
      <About />  

        {/* <Marq />
        <Portfolio />
        <Numbers />
        <Testimonials /> */}
        {/* <Block /> */}
        <div style={{marginTop: '8rem', marginBottom: '8rem'}}>
        <Values/>
        </div>
        {/* <Pricing /> */}
        {/* <Blog /> */}
      </main>
      <Footer />
        
    </>
  )
}

HomeCorporate.getLayout = page => <Layout>{page}</Layout>

export default HomeCorporate;