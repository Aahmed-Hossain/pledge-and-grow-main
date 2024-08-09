import React, { useEffect } from 'react';
//= Packages
import Head from 'next/head';
//= Layout
import Layout from '@/layouts/default';
//= Components
import Loader from '@/components/Common/Loader';
// import Navbar from '@/components/Common/MainNavbar';
import Header from '@/components/Career/Header';
import BgPattern from '@/components/Career/BgPattern';
import Intro from '@/components/Career/Intro';
import Clients from '@/components/Career/Clients';
import Services from '@/components/Career/Services';
import Portfolio from '@/components/Career/Portfolio';
import About from '@/components/Career/About';
import SectionImage from '@/components/Career/SectionImage';
import Testimonials from '@/components/Career/Testimonials';
import Blog from '@/components/Career/Blog';
// import Footer from '@/components/Career/Footer';
import Footer from '@/components/HomeMain/Footer';
import MainNavbar from '@/components/Common/MainNavbar';
import Facilities from '@/components/Career/Facilities';

function HomeArchitecture() {
  useEffect(() => {
    document.body.classList.add('home-arch', 'main-bg');
    return () => document.body.classList.remove('home-arch', 'main-bg');
  }, []);

  return (
    <>
      <Head>
        <title>Pledge And Grow - Career</title>
      </Head>
      <Loader />

      <MainNavbar mainBg noStatic  />
      <main className="position-re">
        <Header />
        <div className="block-pattern">
          <BgPattern />
          <Intro />
          {/* <Clients /> */}
          <Services />
        </div>
        {/* <Portfolio /> */}
        <About />
        <Facilities/>
        {/* <SectionImage /> */}
        {/* <Testimonials /> */}
        {/* <Blog /> */}
      </main>
      <Footer />
    </>
  )
}

HomeArchitecture.getLayout = page => <Layout>{page}</Layout>

export default HomeArchitecture;