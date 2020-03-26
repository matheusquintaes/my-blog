import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import WorkList from "../components/WorkList"

const WorksPage = (props) => (
  <Layout>
    <SEO title="About" />
    <WorkList works={props} />
  </Layout>
)

export const query = graphql`
  query WorkList {
    allMarkdownRemark(filter: {fields: {collection: {eq: "works"}}}) {
      edges {
        node {
          id
          frontmatter {
            title
            description
            thumbnail
            category
          }
        }
      }
    }
  }
`

export default WorksPage
