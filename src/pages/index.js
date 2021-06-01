import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import SocialLinks from "../components/SocialLinks"
import Profile from "../components/Profile"

import * as S from "../components/Post/styled"


const IndexPage = () => (
  <Layout>
    <S.MainContent>
        <Profile />
        <h1>About</h1>
        <p>Front-end UX/UI developer with 5 years experience in web developing focusing in usability, semantics, accessibility and clean code.</p>
        <p>Experience in application development using Javascript, HTML, CSS, SASS, React, Graphql.</p>
        <p> Since I'm a non-stop learner, I'm always looking for development of new technologies, industry trends and standardization.</p>
        <h2>Contact</h2>
        <p>You can contact me through any of my social networks:</p> 
        <SocialLinks/>
    </S.MainContent>
  </Layout>
)

export default IndexPage