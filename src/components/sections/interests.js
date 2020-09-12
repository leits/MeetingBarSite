import React, { useState, useEffect, useRef } from "react"
import styled from "styled-components"
import { motion, useAnimation } from "framer-motion"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReddit, faCreativeCommonsNc } from "@fortawesome/free-brands-svg-icons"

import { detectMobileAndTablet, isSSR } from "../../utils"
import { useOnScreen }  from "../../hooks/"
import ContentWrapper from "../../styles/ContentWrapper"
import Button from "../../styles/Button"

const StyledSection = styled.section`
  width: 100%;
  height: auto;
  background: ${({ theme }) => theme.colors.background};
  margin-top: 6rem;
`

const StyledContentWrapper = styled(ContentWrapper)`
  && {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-right: 0;
    padding-left: 0;
    @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
      padding-right: 2.5rem;
      padding-left: 2.5rem;
    }
    .section-title {
      padding-right: 2.5rem;
      padding-left: 2.5rem;
      @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
        padding-right: 0;
        padding-left: 0;
      }
    }
  }
`

const StyledInterests = styled.div`
  display: grid;
  /* Calculate how many columns are needed, depending on interests count */
  grid-template-columns: repeat(
    auto-fill,
    15.625rem
  );
  grid-template-rows: repeat(auto-fill, auto);
  grid-auto-flow: row;
  align-items: center;
  column-gap: 1rem;
  row-gap: 1rem;
  padding: 0 2.5rem;
  overflow-x: hidden;
  overflow-y: hidden;
  -webkit-overflow-scrolling: touch;
  &::-webkit-scrollbar {
    display: none;
  }
  /* Workaround: https://stackoverflow.com/questions/38993170/last-margin-padding-collapsing-in-flexbox-grid-layout */
  &::after {
    content: "";
    width: ${({ itemCount }) =>
      Math.ceil(itemCount / 2) % 2 === 1 ? "17.125rem" : "2.5rem"};
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-auto-flow: row;
    grid-template-columns: repeat(3, 15.625rem);
    overflow: visible;
    padding: 0;
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

  .interest {
    width: 15.625rem;
    height: 3rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 1rem;
    border: 0.125rem solid ${({ theme }) => theme.colors.primary};
    border-radius: ${({ theme }) => theme.borderRadius};
    .icon {
      margin-right: 0.5rem;
    }
  }
`

const Interests = () => {

  const shownItems = 10
  const interests = [
    {
      name: "✅ Fully free",
    },
    {
      name: "⏱ Quick and easy setup",
    },
    {
      name: "⚡ One click to join meeting",
    },
    {
      name: "🔒 No user data storing",
    },
    {
      name: "🧑‍💻 Open-source software",
    },
    {
      name: "💪 Powerful preferences",
    },
    {
      name: "🗓 Work with all calendars",
    },
    {
      name: "🔗 20+ meeting services",
    },
    {
      name: "🍃 Light and nice looking",
    },
  ]

  const [shownInterests, setShownInterests] = useState(shownItems)

  const ref = useRef()
  const onScreen = useOnScreen(ref)

  const iControls = useAnimation()
  const bControls = useAnimation()

  useEffect(() => {
    // If mobile or tablet, show all interests initially
    // Otherwise interests.mdx will determine how many interests are shown
    // (isSSR) is used to prevent error during gatsby build
    if (!isSSR && detectMobileAndTablet(window.innerWidth)) {
      setShownInterests(interests.length)
    }
  }, [interests])

  useEffect(() => {
    const sequence = async () => {
      if (onScreen) {
        // i receives the value of the custom prop - can be used to stagger
        // the animation of each "interest" element
        await iControls.start(i => ({
          opacity: 1, scaleY: 1, transition: { delay: i * 0.01 }
        }))
        await bControls.start({ opacity: 1, scaleY: 1 })
      }
    }
    sequence()
  }, [onScreen, shownInterests, iControls, bControls])

  const showMoreItems = () => setShownInterests(shownInterests + 4)

  return (
    <StyledSection id="features">
      <StyledContentWrapper>
        <h3 className="section-title">{"Features"}</h3>
        <StyledInterests itemCount={interests.length} ref={ref}>
          {interests.slice(0, shownInterests).map(({ name }, key) => (
            <div 
              className="interest" 
              key={key} 
              custom={key} 
              initial={{ opacity: 0, scaleY: 0 }}
            >
                {name}
            </div>
          ))}
        </StyledInterests>
      </StyledContentWrapper>
    </StyledSection>
  )
}

export default Interests
