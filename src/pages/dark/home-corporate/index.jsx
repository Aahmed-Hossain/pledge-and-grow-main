import React, { useEffect } from 'react';
//= Packages
import Head from 'next/head';
//= Layout
import Layout from '@/layouts/default';
//= Components
import Loader from '@/components/Common/Loader';
import LinesTwo from '@/components/Common/LinesTwo';
import Navbar from '@/components/Common/MainNavbar';
import Header from '@/components/Corporate/Header';
import Services from '@/components/Corporate/Services';
import About from '@/components/Corporate/About';
import Marq from '@/components/Corporate/Marq';
import Portfolio from '@/components/Corporate/Portfolio';
import Numbers from '@/components/Corporate/Numbers';
import Testimonials from '@/components/Corporate/Testimonials';
import Block from '@/components/Corporate/Block';
import Pricing from '@/components/Corporate/Pricing';
import Blog from '@/components/Corporate/Blog';
import Footer from '@/components/HomeMain/Footer';

function HomeCorporate() {
  useEffect(() => {
    document.body.classList.add('home-corp');
    return () => document.body.classList.remove('home-corp');
  }, []);

  return (
    <>
      <Head>
        <title>Pledge & Grow - Site Web</title>
      </Head>

      <Loader />

      {/* original */}


      {/* <LinesTwo />
      <Navbar />
      <main className="main-bg">
        <Header />
        <Services />
      <About />  
        <Marq />
        <Portfolio />
        <Numbers />
        <Testimonials />
        <Block />
        <Pricing />
        <Blog />
      </main>
      <Footer /> */}
         <div id="smooth-wrapper">
        <Navbar mainBg noStatic />
        <div id="smooth-content">
          <main className="position-re">
           <div style={{marginTop: '80px'}}> <Header /></div>
            {/* <Marq /> */}
            <Services />
            {/* <Intro /> */}
            {/* <Portfolio />
        <Skills /> */}
            {/* <Testimonials />
        <Blog /> */}
               <About />  
          </main>
          <Footer />
        </div>
      </div>
    </>
  )
}

HomeCorporate.getLayout = page => <Layout>{page}</Layout>

export default HomeCorporate;