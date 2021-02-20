import React, { useEffect, useContext, useRef, useState } from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import Img from "gatsby-image"
import { motion, useAnimation } from "framer-motion"
import { navigate } from "gatsby"
import Modal from "react-modal"

import Context from "../../context/"
import ContentWrapper from "../../styles/ContentWrapper"
import Underlining from "../../styles/Underlining"
import Theme from "../../styles/Theme"
import { OutboundLink } from "gatsby-plugin-gtag"

Modal.setAppElement(`#___gatsby`)

const modalStyles = {
  content: {
    padding: 20,
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
}

const StyledSection = styled.section`
  width: 100%;
  height: auto;
  background: ${({ theme }) => theme.colors.background};
`

const code = styled.p`{
  font-family: Monaco, monospace;
  font-size: $base-font-size;
  line-height: 100%;
  background-color: #eee;
  padding: 50px;
  letter-spacing: -0.05em;
  word-break: normal;
  /border-radius: 5px;/
}`

const StyledContentWrapper = styled(ContentWrapper)`
  && {
    width: 100%;
    height: 100%;
    min-height: 60vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-bottom: 6rem;
    @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
      margin-bottom: 4rem;
    }
    .greetings {
      display: flex;
      justify-content: flex-start;
      align-items: center;
    }
    .title {
      margin-bottom: 1.5rem;
      @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
        margin-bottom: 0;
      }
    }
    .subtitle {
      margin-top: -0.75rem;
    }
    .description {
      font-size: 1.125rem;
      margin-bottom: 2rem;
    }
    .image-content {
      width: 100%;
      max-width: 43rem;
      margin-top: 1rem;
      margin-left: 0;
      // @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
      //   margin-left: 2rem;
      // }
    }
  }
`

const StyledSocialWrapper = styled.div`
  display: grid;
  /* Calculate columns, depending on how many profiles there are */
  grid-template-columns: repeat(${({ itemCount }) => itemCount + 1}, auto);
  justify-content: start;
  justify-items: start;

  margin-left: -2.5rem;
  margin-right: -2.5rem;
  padding-left: 2.5rem;
  padding-right: 2.5rem;

  overflow-x: scroll;
  overflow-y: hidden;
  -webkit-overflow-scrolling: touch;
  &::-webkit-scrollbar {
    display: none;
  }

  /* Workaround: https://stackoverflow.com/questions/38993170/last-margin-padding-collapsing-in-flexbox-grid-layout */
  &::after {
    content: "";
    width: 2.5rem;
  }

  /* Show scrollbar if desktop and wrapper width > viewport width */
  @media (hover: hover) {
    &::-webkit-scrollbar {
      display: block;
      -webkit-appearance: none;
    }

    &::-webkit-scrollbar:horizontal {
      height: 0.8rem;
    }

    &::-webkit-scrollbar-thumb {
      border-radius: 8px;
      border: 0.2rem solid white;
      background-color: rgba(0, 0, 0, 0.5);
    }

    &::-webkit-scrollbar-track {
      background-color: #fff;
      border-radius: 8px;
    }
  }

  a {
    margin-right: 0.5rem;
    margin-bottom: 0.75rem;
    @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
      margin-right: 1rem;
    }
  }
`

const StyledSocialProfile = styled.p`
  width: ${({ width }) => (width ? width : "auto")};
  height: auto;
  background: ${({ theme }) => theme.colors.background};
  background: linear-gradient(
    to right,
    ${({ theme }) => theme.colors.primary} 50%,
    ${({ theme }) => theme.colors.background} 50%
  );
  background-size: 205% 100%;
  background-position: right bottom;
  border-radius: ${({ theme }) => theme.borderRadius};
  border: 0.125rem solid ${({ theme }) => theme.colors.primary};
  padding: ${({ padding }) => (padding ? padding : ".3rem 1.25rem")};
  transition: all 0.1s ease-out;
  font-size: ${({ fontSize }) => (fontSize ? fontSize : "1rem")};
  font-weight: 500;
  color: ${({ theme }) => theme.colors.primary};
  &:hover {
    background-position: left bottom;
    color: #ffffff;
  }
  &:hover svg {
    /* Change svg color to white */
    filter: brightness(0) invert(1);
  }
  svg {
    height: 1rem;
    width: 1rem;
    margin-right: 0.5rem;
    margin-bottom: -0.05rem;
  }
`

const AnimatedUnderlining = motion.custom(Underlining)

const Hero = ({ content }) => {
  const { frontmatter } = content[0].node
  const { isIntroDone } = useContext(Context).state

  // Controls to orchestrate animations of greetings, emoji, social profiles, underlining
  const gControls = useAnimation()
  const eControls = useAnimation()
  const sControls = useAnimation()
  const uControls = useAnimation()

  // Required for animating the image
  const iRef = useRef()
  const iVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0 },
  }

  // Start Animations after the splashScreen sequence is done
  useEffect(() => {
    const pageLoadSequence = async () => {
      if (isIntroDone) {
        eControls.start({
          rotate: [0, -10, 12, -10, 9, 0, 0, 0, 0, 0, 0],
          transition: { duration: 2.5, loop: 3, repeatDelay: 1 },
        })
        await gControls.start({
          opacity: 1,
          y: 0,
          transition: { delay: 0.4 },
        })
        await sControls.start({
          opacity: 1,
          x: 0,
        })
        // Animate underlining to hover state
        await uControls.start({
          boxShadow: `inset 0 -2rem 0 ${Theme.colors.secondary}`,
          transition: { delay: 0.4, ease: "circOut" },
        })
      }
    }
    pageLoadSequence()
  }, [isIntroDone, eControls, gControls, sControls, uControls])

  const [modalOpen, setModalOpen] = useState(false)
  const modalCloseTimeout = 10
  const closeModal = () => {
    setModalOpen(false)
    setTimeout(() => navigate(`/`), modalCloseTimeout)
  }

  return (
    <StyledSection id="hero">
      <StyledContentWrapper>
        <div initial={{ opacity: 0, y: 20 }} animate={gControls}>
          <h1 className="title">
            <div className="greetings">{frontmatter.greetings}</div>
            {frontmatter.title}
          </h1>
          <div className="description">
            {frontmatter.subtitlePrefix}{" "}
            {/* Hover state color can be set in useEffect hook */}
            <AnimatedUnderlining animate={uControls} color="tertiary" big>
              {frontmatter.subtitle}
            </AnimatedUnderlining>
            {"."}
          </div>
        </div>
        <div initial={{ opacity: 0, x: 20 }} animate={sControls}>
          <StyledSocialWrapper itemCount={3}>
            <OutboundLink
              href="https://apps.apple.com/us/app/id1532419400"
              target="_blank"
              rel="noopener"
            >
              <StyledSocialProfile
                fontSize=".95rem"
                padding=".3rem 1.25rem"
                width="auto"
                aria-label={"App Store"}
              >
                {"App Store"}
              </StyledSocialProfile>
            </OutboundLink>
            <a href="#" onClick={() => setModalOpen(true)}>
              <StyledSocialProfile
                fontSize=".95rem"
                padding=".3rem 1.25rem"
                width="auto"
                aria-label={"Homebrew"}
              >
                {"Homebrew"}
              </StyledSocialProfile>
            </a>
            {/* <OutboundLink
              href="https://github.com/leits/MeetingBar/releases/latest/download/MeetingBar.dmg"
              target="_blank"
              rel="noopener"
            >
              <StyledSocialProfile
                fontSize=".95rem"
                padding=".3rem 1.25rem"
                width="auto"
                aria-label={"Download"}
              >
                {"Download"}
              </StyledSocialProfile>
            </OutboundLink> */}
          </StyledSocialWrapper>
          <Modal
            isOpen={modalOpen}
            onRequestClose={closeModal}
            style={modalStyles}
            contentLabel="Modal"
            closeTimeoutMS={modalCloseTimeout}
          >
            <code>brew install --cask meetingbar</code>
          </Modal>
        </div>
        <div className="image-content" ref={iRef} variants={iVariants}>
          <Img
            className="screenshot"
            fluid={frontmatter.image.childImageSharp.fluid}
          />
        </div>
      </StyledContentWrapper>
    </StyledSection>
  )
}

Hero.propTypes = {
  content: PropTypes.arrayOf(
    PropTypes.shape({
      node: PropTypes.shape({
        frontmatter: PropTypes.object.isRequired,
      }).isRequired,
    }).isRequired
  ).isRequired,
}

export default Hero
