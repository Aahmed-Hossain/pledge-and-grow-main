import React, { useEffect } from 'react';
//= Packages
import Head from 'next/head';
//= Layout
import Layout from '@/layouts/default';
//= Components
import Loader from '@/components/Common/Loader';
import LinesTwo from '@/components/Common/LinesTwo';
import MainNavbar from '@/components/Common/MainNavbar';
import Header from '@/components/Blockchain/Header';
import About from '@/components/Blockchain/About';
import Marq from '@/components/Blockchain/Marq';
import Services from '@/components/Blockchain/Services';
import Portfolio from '@/components/Blockchain/Portfolio';
import Intro from '@/components/Blockchain/Intro';
import Testimonials from '@/components/Blockchain/Testimonials';
import ImageSection from '@/components/Blockchain/Image';
import Team from '@/components/Blockchain/Team';
import Blog from '@/components/Blockchain/Blog';
import Contact from '@/components/Blockchain/Contact';
import Footer from '@/components/HomeMain/Footer';
import Engagements  from '@/components/Blockchain/Engagements ';

function HomeOnePage() {
  useEffect(() => {
    document.body.classList.add('sub-bg');
    return () => document.body.classList.remove('sub-bg');
  }, []);

  return (
    <>
      <Head>
        <title>Plegde and Grow - Application Mobile</title>
      </Head>

      <Loader />
      <LinesTwo />
      {/* <Navbar curve noStatic /> */}
      <MainNavbar/>
      <main className="main-bg">
        <Header />
        {/* <About /> */}
        <Marq />
        <Services />
        <Portfolio />
        <Intro />
        <Engagements />
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