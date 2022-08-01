import * as React from "react"
import { Link } from "gatsby"
import Header from "./header"
import "../layout.css"
import "../styles/global.css"

const Layout = ({ location, title, children }: any) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <h1 className="main-heading">
        <Link to="/">{title}</Link>
      </h1>
    )
  } else {
    header = (
      <Link className="header-link-home" to="/">
        {title}
      </Link>
    )
  }

  return (
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
  )
}

export default Layout
