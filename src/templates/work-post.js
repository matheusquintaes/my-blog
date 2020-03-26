import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"


const WorkPost = ( {data }) => {

  const work = data.markdownRemark

  return (
    <Layout>
     <SEO
        title={work.frontmatter.title}
        description={work.frontmatter.description}
        thumbnail={work.frontmatter.thumbnail}
      />
      <h1> { work.frontmatter.title }</h1>
      <h3> { work.frontmatter.description }</h3>
      <h3> { work.frontmatter.category }</h3>
      <p>
        <div dangerouslySetInnerHTML={{ __html: work.html }}></div>
      </p>

    </Layout>
  )
}



export const query = graphql`
  query Work($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      fields {
        slug
      }
      frontmatter {
        title
        description
        date(formatString: "MMMM D, YYYY") 
        thumbnail
        category
      }
      html
      timeToRead
    }
  }
`

export default WorkPost