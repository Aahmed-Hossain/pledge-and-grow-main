import React, { useEffect } from "react";
//= Packages
import Head from "next/head";
//= Layout
import Layout from "@/layouts/default";
//= Components
import Loader from "@/components/Common/Loader";
import Navbar from "@/components/Common/MainNavbar";
import Header from "@/components/Freelancer/Header";
import Marq from "@/components/Freelancer/Marq";
import Services from "@/components/Freelancer/Services";
import Intro from "@/components/Freelancer/Intro";
import Portfolio from "@/components/Freelancer/Portfolio";
import Skills from "@/components/Freelancer/Skills";
import Testimonials from "@/components/Freelancer/Testimonials";
import Blog from "@/components/Freelancer/Blog";
import Contact from "@/components/Freelancer/Contact";
import Footer from "@/components/Freelancer/Footer";
import Form from '@/components/InnerPages/Contact/Form';
function HomeFreelancer() {
  useEffect(() => {
    document.body.classList.add("home-freelancer", "main-bg");
    return () => document.body.classList.remove("home-freelancer", "main-bg");
  }, []);

  return (
    <>
      <Head>
        <title>Fledge & Grow - Application Mobile</title>
      </Head>
      <Loader />
      <div id="smooth-wrapper">
        <Navbar mainBg noStatic />
        <div id="smooth-content">
          <main className="position-re">
            <Header />
            {/* <Marq /> */}
            <Services />
            {/* <Intro /> */}
            {/* <Portfolio />
        <Skills /> */}
            {/* <Testimonials />
        <Blog /> */}
            <Contact />
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
}

HomeFreelancer.getLayout = (page) => <Layout>{page}</Layout>;

export default HomeFreelancer;
