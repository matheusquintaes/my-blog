import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"

import getThemeColor from "../utils/getThemeColor"

import * as S from "../components/Work/styled"

const WorkPost = ( {data }) => {

  const work = data.markdownRemark
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
          <p dangerouslySetInnerHTML={{ __html: work.frontmatter.description }}></p>
        </S.WorkLongDescription>
        <S.WorkProjectDetails>
          <h4>Project Details</h4>
          <p>{ work.frontmatter.date } </p>
          <h4>Technologies</h4>
          <p>{ work.frontmatter.technologies } </p>
        </S.WorkProjectDetails>
      </S.WorkInfo>
      <S.WorkContent>
        <div dangerouslySetInnerHTML={{ __html: work.html }}></div>
      </S.WorkContent>

      <S.WorkFooter>
        { work.frontmatter.link  && (
        <>
          <S.WorkLink>
            <a href={work.frontmatter.link} target="blank">Launch Project</a>
          </S.WorkLink> 
        </>
        )}
        <S.WorkContact>
          <p>Ready to Get Started?</p>
          <S.WorkItemLink cover
            direction="left"
            bg={getThemeColor()}
            duration={0.6}
            activeClassName="active" to="/about">
            LET'S TALK
        </S.WorkItemLink>
        </S.WorkContact>
      </S.WorkFooter>
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
        date(formatString: "MMMM, YYYY") 
        thumbnail
        category
        technologies
        link
      }
      html
    }
  }
`

export default WorkPost