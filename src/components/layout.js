import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

import "../styles/general.scss"

const Layout = ({ children }) => {

  return (
    <main>
      
      <header>

        <div className="navigation">
          <nav>
            <Link to="/">info</Link>
          </nav>
          {/* <nav>
            <Link to="/portfolio">projects</Link>
          </nav> */}
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
      
    </main>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
