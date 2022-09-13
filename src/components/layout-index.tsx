/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

<<<<<<< HEAD
import * as React from "react"
import PropTypes from "prop-types"

import Header from "./header"
import "../layout.css"
import "../styles/global.css"

const Layout = ({ children }: any) => {
  return (
    <>
      <Header siteTitle="Big Man" />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: `var(--size-content)`,
          padding: `var(--size-gutter)`,
        }}
      >
        <main>{children}</main>
        <footer
          style={{
            marginTop: `var(--space-5)`,
            fontSize: `var(--font-sm)`,
          }}
        >
          © {new Date().getFullYear()} &middot; halfcyan
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
=======
 import * as React from "react"
 import PropTypes from "prop-types"
 
 import Header from "./header"
 import "../style-index.css"
 import "../styles/global.css"
 
 const Layout = ({ children }: any) => {
   return (
     <>
       <Header siteTitle="Big Man" />
       <div
         style={{
           margin: `0 auto`,
           maxWidth: `var(--size-content)`,
           padding: `var(--size-gutter)`,
         }}
       >
         <main>{children}</main>
         <footer
           style={{
             marginTop: `var(--space-5)`,
             fontSize: `var(--font-sm)`,
           }}
         >
           © {new Date().getFullYear()} &middot; halfcyan
         </footer>
       </div>
     </>
   )
 }
 
 Layout.propTypes = {
   children: PropTypes.node.isRequired,
 }
 
 export default Layout
 
>>>>>>> project-a/master
