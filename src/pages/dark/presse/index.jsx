import React, { useEffect } from "react";
//= Packages
import Head from "next/head";
//= Layout
import Layout from "@/layouts/default";
//= Components
import Loader from "@/components/Common/Loader";
import Navbar from "@/components/Common/MainNavbar";
import Header from "@/components/Presse/Header";
import Marq from "@/components/Presse/Marq";
import Services from "@/components/Presse/Services";
import Intro from "@/components/Presse/Intro";
import Portfolio from "@/components/Presse/Portfolio";
import Skills from "@/components/Presse/Skills";
import Testimonials from "@/components/Presse/Testimonials";
import Blog from "@/components/Presse/Blog";
import Contact from "@/components/Presse/Contact";
import Footer from "@/components/Presse/Footer";
import Form from '@/components/InnerPages/Contact/Form';
function HomeFreelancer() {
  useEffect(() => {
    document.body.classList.add("home-freelancer", "main-bg");
    return () => document.body.classList.remove("home-freelancer", "main-bg");
  }, []);

  return (
    <>
      <Head>
        <title>Fledge & Grow - Presse</title>
      </Head>
      <Loader />
      <div id="smooth-wrapper">
        <Navbar mainBg noStatic />
        <div id="smooth-content">
          <main className="position-re">
            <Header />
            {/* <Marq /> */}
            <Services />
            <Intro />
            <Portfolio />
        {/* <Skills />
            <Testimonials />
        <Blog />
            <Contact /> */}
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
}

HomeFreelancer.getLayout = (page) => <Layout>{page}</Layout>;

export default HomeFreelancer;
