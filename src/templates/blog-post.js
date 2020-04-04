import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import RecommendedPosts from "../components/RecommendedPosts"
import PostFooterContent from "../components/PostFooterContent"
// import Comments from "../components/Comments"

import SEO from "../components/seo"

import * as S from "../components/Post/styled"

const BlogPost = ({ data, pageContext }) => {
  const post = data.markdownRemark
  const next = pageContext.nextPost
  const previous = pageContext.previousPost

  return (
    <Layout>
     <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description}
        thumbnail={post.frontmatter.thumbnail}
      />
      <S.PostHeader>
        <S.PostDate>
          {post.frontmatter.date} • {post.timeToRead} min read
        </S.PostDate>
        <S.PostTitle>{post.frontmatter.title}</S.PostTitle>
        <S.PostDescription>{post.frontmatter.description}</S.PostDescription>
      </S.PostHeader>
      <S.MainContent>
        <div dangerouslySetInnerHTML={{ __html: post.html }}></div>
      </S.MainContent>
      <PostFooterContent/>
      <RecommendedPosts next={next} previous={previous} />
      {/* <Comments url={post.fields.slug} title={post.frontmatter.title} /> */}
    </Layout>
  )
}

export const query = graphql`
  query Post($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      fields {
        slug
      }
      frontmatter {
        title
        description
        date(formatString: "MMMM D, YYYY") 
        thumbnail
      }
      html
      timeToRead
    }
  }
`

export default BlogPost