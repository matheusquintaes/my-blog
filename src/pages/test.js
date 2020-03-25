import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/seo"

const TestPage = (props) => (

  <>
    {console.log(props)}
    <Layout>
      <SEO title="Test" />
    </Layout>
  </>
)

export const query = graphql`
  query Test {
    allMarkdownRemark(filter: {fields: {collection: {eq: "works"}}}) {
      edges {
        node {
          id
          frontmatter {
            title
            description
          }
        }
      }
    }
  }
`

export default TestPage
