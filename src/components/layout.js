import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

import AboutBlock from "./about"

import "../styles/general.scss"

const Layout = ({ children }) => {

  const showAbout = () => {
    const aboutBlock = document.querySelector("#aboutblock")
    if (aboutBlock.classList.contains('about-show')) {
      aboutBlock.classList.remove('about-show')
    } else {
      aboutBlock.classList.add('about-show')
    }
  }

  return (
    <main>
      
      <header>
        <div>
          <Link to="/"><b>Lawrence Wang</b></Link>
          <button onClick={showAbout}>
            About
          </button>
        </div>

        <div className="navigation">
          <div>
            <Link to="/portfolio">Projects</Link>
          </div>
          &nbsp;
          <div>
            <Link to="/blog">Writing</Link>
          </div>
          &nbsp;
          <div>
            <Link to="/art/traditional">Art</Link>
          </div>
        </div>
      </header>

      <div className="background"></div>

      <div className="container">

        {children}

      </div>
      
      <AboutBlock />
    </main>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
