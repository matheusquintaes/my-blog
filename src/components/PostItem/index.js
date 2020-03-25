import React from "react"
import PropTypes from "prop-types"

import getThemeColor from "../../utils/getThemeColor"

import * as S from "./styled"

const PostItem = ({
  slug,
  category,
  date,
  timeToRead,
  title,
  description,
}) => (
  <S.PostItemLink cover
      direction="right"
      bg={getThemeColor()}
      duration={0.6}
      activeClassName="active" to={slug}>
    <S.PostItemWrapper>
      <S.PostItemCategory>{category}</S.PostItemCategory>
      <S.PostItemTitle>{title}</S.PostItemTitle>
      <S.PostItemDescription>{description}</S.PostItemDescription>
      <S.PostItemDate>
        {date} • {timeToRead} min read
      </S.PostItemDate>
  
    </S.PostItemWrapper>
  </S.PostItemLink>
)

PostItem.propTypes = {
  slug: PropTypes.string.isRequired,
  background: PropTypes.string,
  category: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  timeToRead: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}

export default PostItem 