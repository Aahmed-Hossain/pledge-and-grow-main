import React, { useEffect } from 'react';
//= Packages
import Head from 'next/head';
//= Layout
import Layout from '@/layouts/default';
//= Components
import Loader from '@/components/Common/Loader';
import Navbar from '@/components/Common/MainNavbar';
import Details from '@/components/InnerPages/Blog/Details';
import Footer from '@/components/HomeMain/Footer';
import Comments from '@/components/InnerPages/Blog/Comments';
import HeaderCopy from '@/components/InnerPages/Blog/HeaderCopy';


function BlogDetails() {
  useEffect(() => {
    document.body.classList.add('main-bg');
    return () => document.body.classList.remove('main-bg');
  }, []);

  return (
    <>
      <Head>
        <title>Pledge & Grow - Aides & Subventions</title>
      </Head>

      <Loader />
      <Navbar mainBg />
      <main>
        <HeaderCopy/>
        {/* <Details /> */}
        <Comments/>
      </main>
      <Footer />
    </>
  )
}

BlogDetails.getLayout = page => <Layout>{page}</Layout>

export default BlogDetails;