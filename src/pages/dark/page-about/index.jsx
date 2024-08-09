import React, { useEffect } from 'react';
//= Packages
import Head from 'next/head';
//= Layout
import Layout from '@/layouts/default';
//= Components
import Loader from '@/components/Common/Loader';
import Navbar from '@/components/Common/MainNavbar';
import Header from '@/components/InnerPages/Header';
import Story from '@/components/InnerPages/About/Story';
import Services from '@/components/InnerPages/About/Services';
import Intro from '@/components/InnerPages/About/Intro';
import Testimonials from '@/components/DigitalAgency/Testimonials';
import Team from '@/components/Startup/Team';
import Clients from '@/components/InnerPages/About/Clients';
import CallToAction from '@/components/Startup/CallToAction';
import Footer from '@/components/Startup/Footer';

function PageAbout() {
  useEffect(() => {
    document.body.classList.add('main-bg');
    return () => document.body.classList.remove('main-bg');
  }, []);

  const headerMetadata = {
    subTitle: "QUI SOMMES-NOUS ?",
    title: "Nous sommes une agence de digitalisation de projets basée à Paris.",
    text: "A PROPOS DE NOUS"
  }

  return (
    <>
      <Head>
        <title>Pledge and Grow - About</title>
      </Head>

      <Loader />
      <Navbar mainBg />
      <main>
        <Header data={headerMetadata} />
        <Story />
        <Services />
        <Intro />
        <Testimonials mainColor />
        <Team />
        <Clients />
        <CallToAction innerPageStyle />
      </main>
      <Footer />
    </>
  )
}

PageAbout.getLayout = page => <Layout>{page}</Layout>

export default PageAbout;