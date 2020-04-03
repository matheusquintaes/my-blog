import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import WorkList from "../components/WorkList"

const WorksPage = (props) => (
  <Layout>
    <SEO title="Works" />
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
          fields {
            slug
          }
        }
      }
    }
  }
`

export default WorksPage
