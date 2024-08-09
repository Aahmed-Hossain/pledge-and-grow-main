import React, { useEffect } from 'react';
//= Packages
import Head from 'next/head';
//= Layout
import Layout from '@/layouts/default';
//= Components
import Loader from '@/components/Common/Loader';
// import Navbar from '@/components/Common/MainNavbar';
import Header from '@/components/Architecture/Header';
import BgPattern from '@/components/Architecture/BgPattern';
import Intro from '@/components/Architecture/Intro';
import Clients from '@/components/Architecture/Clients';
import Services from '@/components/Architecture/Services';
import Portfolio from '@/components/Architecture/Portfolio';
import About from '@/components/Architecture/About';
import SectionImage from '@/components/Architecture/SectionImage';
import Testimonials from '@/components/Architecture/Testimonials';
import Blog from '@/components/Architecture/Blog';
// import Footer from '@/components/Architecture/Footer';
import Footer from '@/components/HomeMain/Footer';
import MainNavbar from '@/components/Common/MainNavbar';

function HomeArchitecture() {
  useEffect(() => {
    document.body.classList.add('home-arch', 'main-bg');
    return () => document.body.classList.remove('home-arch', 'main-bg');
  }, []);

  return (
    <>
      <Head>
        <title>Partenariats - Pledge And Grow</title>
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
        {/* <SectionImage /> */}
        <Testimonials />
        {/* <Blog /> */}
      </main>
      <Footer />
    </>
  )
}

HomeArchitecture.getLayout = page => <Layout>{page}</Layout>

export default HomeArchitecture;