import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"


import Layout from "../components/common/layout/layout"
import SEO from "../components/common/layout/seo"
import Navigation from "../components/common/navigation/navigation"
import Footer from "../components/sections/footer"

import { Container } from "../components/global"


const PageWrapper = styled(Container)`
    padding: 100px 0 0px 0;
    height: 100%;
`

const PostContent = styled.div`
  padding-bottom: 100px;
  h1 {
    font-size: 30px;
    margin-bottom: 0px;
    color: ${props => props.theme.color.black.light}
  }
  p{
    font-size: 18px;
  }
  a{
    text-decoration: none;
    color: ${props => props.theme.color.accent}
  }
`

export default function Template({
    data, // this prop will be injected by the GraphQL query below.
  }) {
    const { markdownRemark } = data // data.markdownRemark holds your post data
    const { frontmatter, html } = markdownRemark
    return (
      <Layout>
          <SEO title={frontmatter.title}/>
          <Navigation />
          <PageWrapper className="page-container">
              <Container className="post">
                  <h1>{frontmatter.title}</h1>
                  <PostContent
                  className="post-content"
                  dangerouslySetInnerHTML={{ __html: html }}
                  />
              </Container>
          </PageWrapper>
        <Footer />
      </Layout>
    )
  }


export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
      }
    }
  }
`