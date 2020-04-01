import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"

import * as S from "../components/Work/styled"

const WorkPost = ( {data }) => {

  const work = data.markdownRemark
  console.log(work.html)
  return (
    <Layout>
     <SEO
        title={work.frontmatter.title}
        description={work.frontmatter.description}
        thumbnail={work.frontmatter.thumbnail}
      />
      <S.WorkHeader>
       <S.WorkTitle>{ work.frontmatter.title }</S.WorkTitle>
        <S.WorkCategory> { work.frontmatter.category }</S.WorkCategory>
      </S.WorkHeader>

      <S.WorkInfo>
        <S.WorkLongDescription>
          <h4>About this project</h4>
          <p>{ work.frontmatter.longDescription }</p>
        </S.WorkLongDescription>
        <S.WorkProjectDetails>
          <h4>Project Details</h4>
          <p>{ work.frontmatter.date } </p>
          <h4>Link</h4>
          <a>Launch Project</a>
        </S.WorkProjectDetails>
      </S.WorkInfo>
      <S.WorkContent>
        <div dangerouslySetInnerHTML={{ __html: work.html }}></div>
      </S.WorkContent>

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
        longDescription
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