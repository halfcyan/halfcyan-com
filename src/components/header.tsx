import * as React from "react"
import PropTypes from "prop-types"
import Navbar from "./navbar"

const Header = _Header => (
  <header>
    <a
      className="text-3xl left-0 p-3 flex float-left absolute text-white hover:text-purple-400 transition-colors no-underline font-['Oxygen']"
      href="/"
    >
      halfcyan
    </a>
    <Navbar></Navbar>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
