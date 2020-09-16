import React, { useRef } from "react"
import styled from "styled-components"
import { OutboundLink } from "gatsby-plugin-gtag"

import { useOnScreen } from "../../hooks"
import Button from "../../styles/Button"

const StyledSection = styled.section`
  display: grid;
  grid-gap: 1rem;
  max-width: 700px;
  margin: 0 auto;
  justify-items: center;

  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));

  margin-top: 6rem;
`

const Projects = () => {
  // Required for animating the button
  const bRef = useRef()
  const bOnScreen = useOnScreen(bRef)
  const bVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
    },
  }
  return (
    <StyledSection id="projects">
      <div className="link">
        <OutboundLink
          ref={bRef}
          variants={bVariants}
          animate={bOnScreen ? "visible" : "hidden"}
          href="https://github.com/leits/MeetingBar"
          target="_blank"
          rel="noopener"
          aria-label="External Link"
        >
          <Button textAlign="center" color="primary" center>
            {"Visit on github"}
          </Button>
        </OutboundLink>
      </div>
      <div className="link">
        <OutboundLink
          ref={bRef}
          variants={bVariants}
          animate={bOnScreen ? "visible" : "hidden"}
          href="https://www.patreon.com/meetingbar"
          target="_blank"
          rel="noopener"
          aria-label="External Link"
        >
          <Button textAlign="center" color="primary" center>
            {"Support on Patreon"}
          </Button>
        </OutboundLink>
      </div>
    </StyledSection>
  )
}

export default Projects
