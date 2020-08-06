import React from "react"
import styled from "styled-components"
import { OutboundLink } from "gatsby-plugin-google-analytics"

import { Container } from "../global"

const Footer = () => (
  <FooterWrapper id="footer">
    <FooterColumnContainer>
      <FooterColumn>
        <span>Resources</span>
        <ul>
          <li><OutboundLink target="_blank" rel="noopener" href="https://github.com/leits/MeetingBar">Github</OutboundLink></li>
          <li><OutboundLink target="_blank" rel="noopener" href="https://www.patreon.com/meetingbar">Patreon</OutboundLink></li>
        </ul>
      </FooterColumn>
      <FooterColumn>
        <span>Social</span>
        <ul>
          <li><OutboundLink target="_blank" rel="noopener" href="https://www.producthunt.com/posts/meetingbar">ProductHunt</OutboundLink></li>
          <li><OutboundLink target="_blank" rel="noopener" href="https://www.reddit.com/r/apple/comments/i17qex/your_next_meeting_always_before_your_eyes_in">Reddit</OutboundLink></li>
        </ul>
      </FooterColumn>
      <FooterColumn>
        <span>Contact</span>
        <ul>
          <li><OutboundLink target="_blank" rel="noopener" href="mailto:leits.dev@gmail.com?subject=MeetingBar">Email</OutboundLink></li>
          <li><OutboundLink target="_blank" rel="noopener" href="https://twitter.com/leits_dev">Twitter</OutboundLink></li>
        </ul>
      </FooterColumn>
    </FooterColumnContainer>
    {/* <BrandContainer>
      <Logo>MeetingBar</Logo>
    </BrandContainer> */}
  </FooterWrapper>
)

const FooterWrapper = styled.footer`
  background-color: white;
  margin: 80px 0 0;
  padding: 0 0 80px;
  a {
    color: ${props => props.theme.color.black.regular};
    text-decoration: none;
  }
`

const Logo = styled.div`
  font-family: ${props => props.theme.font.extrabold};
  ${props => props.theme.font_size.regular};
  color: ${props => props.theme.color.black.regular};
  text-decoration: none;
  letter-spacing: 1px;
  margin: 0;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 9;
  text-decoration: none;
  outline: 0px;
`

const BrandContainer = styled(Container)`
  position: relative;
  padding-top: 48px;
  display: flex;
  align-items: flex-end;

  @media (max-width: ${props => props.theme.screen.sm}) {
  }
`
const FooterColumnContainer = styled(Container)`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 32px;
  justify-content: start;
  @media (max-width: ${props => props.theme.screen.sm}) {
    grid-template-columns: 1fr 1fr;
    grid-gap: 32px;
  }
`
const FooterColumn = styled.div`
  span {
    font-size: 16px;
    font-family: ${props => props.theme.font.bold};
    color: ${props => props.theme.color.primary};
  }
  ul {
    list-style: none;
    margin: 16px 0;
    padding: 0;
    color: ${props => props.theme.color.black.regular};
    li {
      margin-bottom: 12px;
      font-family: ${props => props.theme.font.normal};
      font-size: 15px;
    }
  }
`

export default Footer
