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
        {/* <div>
          <Link to="/"><b>Lawrence Wang</b></Link>
          <button onClick={showAbout}>
            About
          </button>
        </div> */}

        <div className="navigation">
          <nav>
            <Link to="/three">info</Link>
          </nav>
          <nav>
            <Link to="/portfolio">projects</Link>
          </nav>
          <nav>
            <Link to="/blog">writing</Link>
          </nav>
          <nav>
            <Link to="/art/traditional">art</Link>
          </nav>
        </div>
      </header>

      <div className="background"></div>

      <div className="container">

        {children}

      </div>
      
      {/* <AboutBlock /> */}
    </main>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
