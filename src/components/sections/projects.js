import React, {useState, useEffect, useRef} from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import {OutboundLink} from 'gatsby-plugin-gtag'

import {useOnScreen} from "../../hooks"
import Button from "../../styles/Button"

const StyledSection = styled.section `
  display: grid;
  grid-gap: 1rem;
  max-width: 700px;
  margin: 0 auto;
  justify-items: center;

  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));

  margin-top: 6rem;
`

const Projects = ({content}) => {
    const sectionDetails = content[0].node
    const projects = content.slice(1, content.length)

    // visibleProject is needed to show which project is currently being viewed in
    // the horizontal slider on mobile and tablet
    const [visibleProject,
      setVisibleProject] = useState(1)

    // projects don't track the visibility by using the onScreen hook instead they
    // use react-visibility-sensor, therefore their visibility is also stored
    // differently
    const [onScreen,
      setOnScreen] = useState({})
    const handleOnScreen = el => {
      if (!onScreen[el]) {
        const updatedOnScreen = {
          ...onScreen
        }
        updatedOnScreen[el] = true
        setOnScreen(updatedOnScreen)
      }
    }
    const pVariants = {
      hidden: {
        opacity: 0,
        y: 20
      },
      visible: {
        opacity: 1,
        y: 0
      }
    }

    useEffect(() => {
      // mobile and tablet only: set first project as visible in the horizontal slider
      setVisibleProject(1)
      // required for animations: set visibility for all projects to "false" initially
      let initial = {}
      projects.forEach(project => {
        initial[project.node.frontmatter.position] = false
      })
      setOnScreen(initial)
    }, [])

    // Required for animating the title
    const tRef = useRef()
    const tOnScreen = useOnScreen(tRef)
    const tVariants = {
      hidden: {
        opacity: 0
      },
      visible: {
        opacity: 1
      }
    }

    // Required for animating the button
    const bRef = useRef()
    const bOnScreen = useOnScreen(bRef)
    const bVariants = {
      hidden: {
        opacity: 0
      },
      visible: {
        opacity: 1
      }
    }
    return (
      <StyledSection id="projects">
        <div className="link">
          <OutboundLink
            ref={bRef}
            variants={bVariants}
            animate={bOnScreen
            ? "visible"
            : "hidden"}
            href="https://github.com/leits/MeetingBar"
            target="_blank"
            rel="noopener"
            aria-label="External Link">
            <Button textAlign="center" color="primary" center>
              {"Visit on github"}
            </Button>
          </OutboundLink>
        </div>
        <div className="link">
          <OutboundLink
            ref={bRef}
            variants={bVariants}
            animate={bOnScreen
            ? "visible"
            : "hidden"}
            href="https://www.patreon.com/meetingbar"
            target="_blank"
            rel="noopener"
            aria-label="External Link">
            <Button textAlign="center" color="primary" center>
              {"Support on Patreon"}
            </Button>
          </OutboundLink>
        </div>
      </StyledSection>
    )
  }

  Projects.propTypes = {
    content: PropTypes
      .arrayOf(PropTypes.shape({
      node: PropTypes
        .shape({body: PropTypes.string.isRequired, frontmatter: PropTypes.object.isRequired})
        .isRequired
    }).isRequired)
      .isRequired
  }

  export default Projects
