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
          Lawrence Wang is finding who he is supposed to be. He studies <span onClick={e => alert("Maybe: Computer Science and Economics, and Political Science")}>this</span>, likes <span onClick={e => alert("Maybe: The intersection between design and computing, song lyrics, Chinese poems, grand strategy games")}>these</span>, and wants to become <span onClick={e => alert("Maybe: Someone who draws, writes, and codes")}>that</span>.
        </span>
          
        {/* <div className="links">
          <a href="https://www.instagram.com/rencewang/" target="_blank" rel="noopener noreferrer">instagram&#x2197;&#xFE0E;</a> 
          <a href="https://www.linkedin.com/in/lawrence-c-w/" target="_blank" rel="noopener noreferrer">linkedin&#x2197;&#xFE0E;</a> 
          <a href="https://thoughts.rence.la/" target="_blank" rel="noopener noreferrer">thoughts&#x2197;&#xFE0E;</a> 
          <a href="https://inmydefense.glitch.me/" target="_blank" rel="noopener noreferrer">inmydefense&#x2197;&#xFE0E;</a>
        </div> */}
      </div>
    </Layout>
  )
}

export default Index
