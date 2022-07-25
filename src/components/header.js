import * as React from "react";
import PropTypes from "prop-types";

const Header = (_Header) => (
  <header>
    <h1 className="text-3xl left-0 p-3 flex float-left absolute text-white">
      My First Website
    </h1>
    <a href="/blog" className="text-xl justify-center object-center flex p-3">
      Blog
    </a>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
