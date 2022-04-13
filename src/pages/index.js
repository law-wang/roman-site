import React, { useState, useEffect, useRef } from "react"
import { Helmet } from "react-helmet"
import { Link } from "gatsby"

import * as THREE from "three"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"
import { Canvas, extend, useThree, useFrame } from "@react-three/fiber"

import SEO from "../components/seo"
import Layout from "../components/threelayout"
import "../styles/general.scss"

const Index = () => {

  return (
    <Layout>
      <SEO title="Home" />
      <div id="text">
        <span id="intro" className="highlight">
          Lawrence Wang studies <span onClick={e => alert("Maybe: Computer Science and Economics, and Political Science")}>nothing</span> at <span onClick={e => alert("Maybe: Yale University")}>nowhere</span>. He is interested in <span onClick={e => alert("Maybe: The intersection between design and computing, song lyrics, Chinese poems, grand strategy games")}>nothing</span> and aspires to become <span onClick={e => alert("Maybe: Someone who draws, writes, and codes")}>no one</span>.
        </span>
          
        <div className="links">
          <a href="https://www.instagram.com/rencewang/" target="_blank" rel="noopener noreferrer">instagram&#x2197;&#xFE0E;</a> 
          <a href="https://www.linkedin.com/in/lawrence-c-w/" target="_blank" rel="noopener noreferrer">linkedin&#x2197;&#xFE0E;</a> 
          <a href="https://thoughts.rence.la/" target="_blank" rel="noopener noreferrer">thoughts&#x2197;&#xFE0E;</a> 
          <a href="https://inmydefense.glitch.me/" target="_blank" rel="noopener noreferrer">inmydefense&#x2197;&#xFE0E;</a>
        </div>
      </div>
    </Layout>
  )
}

export default Index
