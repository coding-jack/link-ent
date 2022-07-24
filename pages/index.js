import Header from "../components/Header";
import LinkList from "../components/LinkList"
import Footer from "../components/Footer";
import Head from 'next/head'
import { initGA, logPageView } from '../utils/analytics'
import { useEffect } from 'react';
import shwarma from '../json/shwarma.json'
import gb from '../json/gb.json'
import sbc from '../json/sbc.json'
import dz from '../json/dz.json'
import campGoofball from '../json/campGoofball.json'
import jackson from '../json/jackson.json'

function IndexPage() {
  useEffect(() => {
    if (!window.GA_INITIALIZED) {
      initGA()
      window.GA_INITIALIZED = true
    }
    logPageView()
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      {/* FontAwesome CDN style tag */}
      <Head>
        <title>Jackson's Links</title>
        <meta
          name="description"
          content="🌲 A free Linktree alternative built with React and Tailwind."
        />
        <link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossOrigin="anonymous"></link>
      </Head>

      {/* Profile Pic and Title Header*/}
      <Header />

      {/* Links for Camp Goofball */}
      <LinkList
        header="Camp Goofball: 9/9 - 9/10"
        featuredLinks={campGoofball.featuredLinks}
        musicLinks={campGoofball.musicLinks}
        socialLinks={campGoofball.socialLinks}
      />

      {/* Links for Shwarma */}
      <LinkList
        header="shwarma"
        featuredLinks={shwarma.featuredLinks}
        musicLinks={shwarma.musicLinks}
        socialLinks={shwarma.socialLinks}
      />

      {/* Links for gb */}
      <LinkList
        header="Goofball Bucket"
        featuredLinks={gb.featuredLinks}
        musicLinks={gb.musicLinks}
        socialLinks={gb.socialLinks}
      />

      {/* Links for Super Booty Computer */}
      <LinkList
        header="Super Booty Computer"
        featuredLinks={sbc.featuredLinks}
        musicLinks={sbc.musicLinks}
        socialLinks={sbc.socialLinks}
      />

      {/* Links for Dr. Zilog */}
      <LinkList
        header="Dr. Zilog"
        featuredLinks={dz.featuredLinks}
        musicLinks={dz.musicLinks}
        socialLinks={dz.socialLinks}
      />

      {/* Links for Web Development */}
      {/* <LinkList
        header="Web Development"
        featuredLinks={jackson.featuredLinks}
        socialLinks={jackson.socialLinks}
      /> */}

      {/* Social Links and Footer Disclaimer/Credits */}
      <Footer />
    </div>
  );
}

export default IndexPage;
