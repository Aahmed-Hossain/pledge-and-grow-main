import React, { useEffect } from 'react';
//= Packages
import Head from 'next/head';
//= Layout
import Layout from '@/layouts/default';
//= Components
import Loader from '@/components/Common/Loader';
import LinesTwo from '@/components/Common/LinesTwo';
import MainNavbar from '@/components/Common/MainNavbar';
import Header from '@/components/CyberSecurity/Header';
import About from '@/components/CyberSecurity/About';
import Marq from '@/components/CyberSecurity/Marq';
import Services from '@/components/CyberSecurity/Services';
import Portfolio from '@/components/CyberSecurity/Portfolio';
import Intro from '@/components/CyberSecurity/Intro';
import Testimonials from '@/components/CyberSecurity/Testimonials';
import ImageSection from '@/components/CyberSecurity/Image';
import Team from '@/components/CyberSecurity/Team';
import Blog from '@/components/CyberSecurity/Blog';
import Contact from '@/components/CyberSecurity/Contact';
import Footer from '@/components/HomeMain/Footer';

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
        <About />
        <Marq />
        <Services />
        <Portfolio />
        <Intro />
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