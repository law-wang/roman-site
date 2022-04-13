import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

import Cursor from './cursor'
import "../styles/general.scss"

const Layout = ({ children }) => {

  return (
    <main>

      <div className="background"></div>

      <header>
        <div className="navigation">
          <nav>
            <Link to="/" className="layout-nav">info</Link>
          </nav>
          <nav>
            <Link to="/blog" className="layout-nav">writing</Link>
          </nav>
          <nav>
            <Link to="/art/traditional" className="layout-nav">art</Link>
          </nav>
        </div>
      </header>

      <div className="container">
        <div className="container-text">
          {children}
        </div>
        <div className="container-extra">
          <div className="overlay"></div>
        </div>
      </div>

      <Cursor />
      
    </main>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
