import React from "react"
import * as S from "./styled"

import WorkItem from "../WorkItem" 

const WorkList = props => {

  const works = props.works.data.allMarkdownRemark.edges
  return (
    <>
    <S.PageTitle>Works</S.PageTitle>
      <S.WorksWrapper>
        {works.map(
          ({
            node: {
              frontmatter: {category, description, title, thumbnail},
              fields: {slug},
            },
          }) => (
              <WorkItem
                key={slug}
                slug={slug}
                category={category}
                title={title}
                description={description}
                thumbnail={thumbnail}
              />
          )

        )}
      </S.WorksWrapper>
    </>
  )
}

export default WorkList


