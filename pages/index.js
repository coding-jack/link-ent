import Header from "../components/Header";
import LinkList from "../components/LinkList"
import Footer from "../components/Footer";
import Head from 'next/head'
import { initGA, logPageView } from '../utils/analytics'
import { useEffect } from 'react';
import shwarma from '../json/shwarma.json'
import gb from '../json/gb.json'
import sbc from '../json/sbc.json'
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
        <title>Jackson Kaufman | LinkEnt</title>
        <meta
          name="description"
          content="🌲 A free Linktree alternative built with React and Tailwind."
        />
        <link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossOrigin="anonymous"></link>
      </Head>
      <div id="background_wrap"></div>

      {/* Profile Pic and Title Header*/}
      <Header />

      {/* Links for Shwarma */}
      <LinkList
        header="shwarma"
        featuredLink={shwarma.featuredLink.link}
        featuredUrl={shwarma.featuredLink.url}
        emoji={shwarma.featuredLink.emoji}
        musicLinks={shwarma.musicLinks}
        socialLinks={shwarma.socialLinks}
      />

      {/* Links for gb */}
      <LinkList
        header="Goofball Bucket"
        featuredLink={gb.featuredLink.link}
        featuredUrl={gb.featuredLink.url}
        emoji={gb.featuredLink.emoji}
        musicLinks={gb.musicLinks}
        socialLinks={gb.socialLinks}
      />

      {/* Links for Super Booty Computer */}
      <LinkList
        header="Super Booty Computer"
        featuredLink={sbc.featuredLink.link}
        featuredUrl={sbc.featuredLink.url}
        emoji={sbc.featuredLink.emoji}
        musicLinks={sbc.musicLinks}
        socialLinks={sbc.socialLinks}
      />

      {/* Links for Web Development */}
      {/* <LinkList
        header="Web Development"
        featuredLink={jackson.featuredLink.link}
        featuredUrl={jackson.featuredLink.url}
        emoji={jackson.featuredLink.emoji}
        musicLinks={jackson.musicLinks}
        socialLinks={jackson.socialLinks}
      /> */}

      {/* Social Links and Footer Disclaimer/Credits */}
      <Footer />
    </div>
  );
}

export default IndexPage;
