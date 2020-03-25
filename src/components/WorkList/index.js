import React from "react"

const WorkList = props => {

  const works = props.works.data.allMarkdownRemark.edges

  return (
    <>
      {works.map(
        ({
          node: {
            frontmatter: {description, title },
          },
        }) => (
          <>
            <h1>{title}</h1>
            <p>{description}</p>
          </>
        )
      )}
    </>
  )
}

export default WorkList


