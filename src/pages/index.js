import React from "react"

import SEO from "../components/seo"
import Layout from "../components/threelayout"
import "../styles/general.scss"

const Index = () => {

  return (
    <Layout>
      <SEO title="Home" />
      <div id="text">
        <span id="intro" className="highlight">
          Lawrence Wang <br/> is finding who <br/> he is supposed to be. He studies <span onClick={e => alert("Maybe: Computer Science and Economics, and Political Science")}>this</span>, <br/> likes <span onClick={e => alert("Maybe: the intersection between design and computing, song lyrics, room sprays, Chinese poems, grand strategy games, interior design, Cities Skylines, floor plans")}>these</span>, <br/> and wants to <br/> become <br/> <span onClick={e => alert("Maybe: Someone who draws, writes, and codes")}>that</span>.
        </span>

        <a className="highlight" href="https://www.instagram.com/rencewang/" target="_blank" rel="noopener noreferrer">instagram&#x2197;&#xFE0E;</a> 
        
        <a className="highlight" href="https://www.linkedin.com/in/lawrence-c-w/" target="_blank" rel="noopener noreferrer">linkedin&#x2197;&#xFE0E;</a> 
      </div>
    </Layout>
  )
}

export default Index
