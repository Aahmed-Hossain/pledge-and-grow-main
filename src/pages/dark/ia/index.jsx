// component from home-one page
import React, { useEffect } from 'react';
//= Packages
import Head from 'next/head';
//= Layout
import Layout from '@/layouts/default';
//= Components
import Loader from '@/components/Common/Loader';
import LinesTwo from '@/components/Common/LinesTwo';
import MainNavbar from '@/components/Common/MainNavbar';
import Header from '@/components/Ia/Header';
import About from '@/components/Ia/About';
import Marq from '@/components/Ia/Marq';
import Services from '@/components/Ia/Services';
import Portfolio from '@/components/Ia/Portfolio';
import Intro from '@/components/Ia/Intro';
import Engagements from '@/components/Ia/Engagements';
import ImageSection from '@/components/Ia/Image';
import Team from '@/components/Ia/Team';
import Blog from '@/components/Ia/Blog';
import Contact from '@/components/Ia/Contact';
import Footer from '@/components/HomeMain/Footer';

function HomeOnePage() {
  useEffect(() => {
    document.body.classList.add('sub-bg');
    return () => document.body.classList.remove('sub-bg');
  }, []);

  return (
    <>
      <Head>
        <title>Plegde and Grow - IA</title>
      </Head>
      <Loader />
      <LinesTwo />
      {/* <Navbar curve noStatic /> */}
      <MainNavbar/>
      <main className="main-bg">
        <Header />
        <About />
        <Marq />
        <Services />
        <Portfolio />
        <Intro />
        <Engagements/>
        {/* <Testimonials />
        <ImageSection />
        <Team />
        <Blog /> */}
        <Contact />
      </main>
      <Footer />
    </>
  )
}

HomeOnePage.getLayout = page => <Layout>{page}</Layout>

export default HomeOnePage;