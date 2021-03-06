import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import PostItem from "../components/PostItem"
import Pagination from '../components/Pagination'

import styled from "styled-components"
export const PageTitle = styled.h2`
  color: var(--text);
  font-size:1.4rem;
  font-weight: 500;
  margin-bottom: 3rem;
`

const BlogList = props => {

  const postList = props.data.allMarkdownRemark.edges

  const { currentPage, numPages } = props.pageContext
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPage = currentPage - 1 === 1 ? '/' : `/page/${currentPage - 1}`
  const nextPage = `/page/${currentPage + 1}`

  return (
    <Layout>

      <PageTitle>Recent Articles</PageTitle>

      <SEO  title="Matheus Quintaes"
            description="Front-end Developer | UI Designer"
      />
      {postList.map(
        ({
          node: {
            frontmatter: {category, date, description, title },
            timeToRead,
            fields: { slug },
          },
        }) => (
          <PostItem
            key={slug}
            slug={slug}
            category={category}
            date={date}
            timeToRead={timeToRead}
            title={title}
            description={description}
          />
        )
      )}

      <Pagination
        isFirst={isFirst}
        isLast={isLast}
        currentPage={currentPage}
        numPages={numPages}
        prevPage={prevPage}
        nextPage={nextPage}
      />
    </Layout>
  )
}

export const query = graphql`
  query PostList($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: frontmatter___date, order: DESC }
      limit: $limit
      skip: $skip
      filter: { fields: {collection: {eq: "posts"}} }
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

export default BlogList