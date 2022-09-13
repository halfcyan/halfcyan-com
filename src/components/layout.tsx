import * as React from "react"
import { Link } from "gatsby"
<<<<<<< HEAD
import Header from "./header"
import "../layout.css"
import "../styles/global.css"

const Layout = ({ location, title, children }: any) => {
=======
import "../styles/global.css"
import Header from "./header"

const Layout = ({ location, title, children }) => {
>>>>>>> project-a/master
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <h1 className="main-heading">
        <Link to="/">{title}</Link>
<<<<<<< HEAD
=======
        <Header />
>>>>>>> project-a/master
      </h1>
    )
  } else {
    header = (
<<<<<<< HEAD
      <Link className="header-link-home" to="/">
        {title}
      </Link>
=======
      <Header />
>>>>>>> project-a/master
    )
  }

  return (
<<<<<<< HEAD
    <>
      <Header siteTitle="Big Man" />
      <div className="global-wrapper" data-is-root-path={isRootPath}>
        <header className="global-header">{header}</header>
        <main>{children}</main>
        <footer>© {new Date().getFullYear()} &middot; halfcyan</footer>
      </div>
      <div
        style={{
          margin: `0 auto`,
          maxWidth: `var(--size-content)`,
          padding: `var(--size-gutter)`,
        }}
      ></div>
      <main>{children}</main>
      <footer
        style={{
          marginTop: `var(--space-5)`,
          fontSize: `var(--font-sm)`,
        }}
      ></footer>
    </>
=======
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header className="global-header">{header}</header>
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </footer>
    </div>
>>>>>>> project-a/master
  )
}

export default Layout
