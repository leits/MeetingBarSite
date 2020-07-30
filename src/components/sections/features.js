import React from "react"
import styled from "styled-components"
import ReactGA from 'react-ga';

import { Section, Container } from "../global"

const Features = () => (
  <Section id="features">
    <StyledContainer>
      <Subtitle>Installation</Subtitle>
      <FeaturesGrid>
        <FeatureItem>
          <FeatureTitle>manual</FeatureTitle>
          <FeatureText>
            <Button
              href="https://github.com/leits/MeetingBar/releases/latest/download/MeetingBar.dmg"
              onClick={()=> ReactGA.event({category: 'User', action: 'Click Download'})}
              target="_blank"
              rel="noopener">
              Download
          </Button>
          </FeatureText>
        </FeatureItem>
        <FeatureItem>
          <FeatureTitle>homebrew</FeatureTitle>
          <FeatureText>
            <Code>
              <pre>brew cask install meetingbar</pre>
            </Code>
          </FeatureText>
        </FeatureItem>
      </FeaturesGrid>
    </StyledContainer>
  </Section>
)

export default Features

const StyledContainer = styled(Container)``

const Code = styled.p`
  display: inline-block;
  // border-radius: 3px;
  padding: 0.5rem 1rem;
  margin: 0.5rem 1rem;
  // width: 20rem;
  text-align: left;
  // background: transparent;
  // color: white;
  border: 2px solid white;
  background: #F6F8FA;
`

const Button = styled.a`
  display: inline-block;
  border-radius: 3px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 11rem;
  background: transparent;
  color: grey;
  border: 2px solid grey;
  text-decoration: none;
`

const SectionTitle = styled.h3`
  color: ${props => props.theme.color.primary};
  display: flex;
  justify-content: center;
  margin: 0 auto 40px;
  text-align: center;
`

const Subtitle = styled.h5`
  font-size: 16px;
  color: ${props => props.theme.color.accent};
  letter-spacing: 0px;
  margin-bottom: 10px;
  text-align: center;
`

const FeaturesGrid = styled.div`
  max-width: 670px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 0px auto;
  grid-column-gap: 40px;
  grid-row-gap: 35px;
  @media (max-width: ${props => props.theme.screen.sm}) {
    grid-template-columns: 1fr;
    // padding: 0 64px;
  }
`

const FeatureItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const FeatureTitle = styled.h4`
  color: ${props => props.theme.color.primary};
  letter-spacing: 0px;
  line-height: 30px;
  margin-bottom: 10px;
`

const FeatureText = styled.p`
  text-align: center;
`
