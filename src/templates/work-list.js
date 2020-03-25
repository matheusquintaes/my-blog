import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"

const WorkList = props => {

  const worksList = props.data.allMarkdownRemark.edges

  return (
    <Layout>

      <PageTitle>Recent Works</PageTitle>

      <SEO  title="Matheus Quintaes"
            description="Works"
      />
     
    </Layout>
  )
}

export const query = graphql`
  query WorkList($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: frontmatter___date, order: DESC }
      limit: $limit
      skip: $skip
      filter: { fields: {collection: {eq: "works"}} }
    ) {
      edges {
        node {
          fields {
            slug,

          }
          frontmatter {
            category
            date(formatString: "MMMM D, YYYY")
            description
            title
          }
          timeToRead
        }
      }
    }
  }
`

export default WorkList