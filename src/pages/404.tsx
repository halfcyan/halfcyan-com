import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const NotFoundPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
<<<<<<< HEAD
      <Seo title="404: Not Found" />
=======
>>>>>>> project-a/master
      <h1>404: Not Found</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Layout>
  )
}

<<<<<<< HEAD
=======
export const Head = () => <Seo title="404: Not Found" children={undefined} lang={undefined} />

>>>>>>> project-a/master
export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
