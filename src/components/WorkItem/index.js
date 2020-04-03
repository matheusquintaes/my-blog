import React from "react"
import PropTypes from "prop-types"

import getThemeColor from "../../utils/getThemeColor"

import * as S from "./styled"

const WorkItem = ({
  slug,
  category,
  title,
  description,
  thumbnail
}) => (
  <S.WorkItemLink cover
      direction="right"
      bg={getThemeColor()}
      duration={0.6}
      activeClassName="active" to={`works/${slug}`}>
    <S.WorkItemWrapper>
      <S.WorkItemImage src={thumbnail}></S.WorkItemImage>
      <S.WorkItemTitle>{title}</S.WorkItemTitle>
      <S.WorkItemCategory>{category}</S.WorkItemCategory>
    </S.WorkItemWrapper>
  </S.WorkItemLink>
)

WorkItem.propTypes = {
  slug: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}

export default WorkItem 