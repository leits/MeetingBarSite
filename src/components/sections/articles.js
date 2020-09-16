import React, { useState, useEffect, useContext } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from "styled-components"
import SkeletonLoader from "tiny-skeleton-loader-react"
import { motion, useAnimation } from "framer-motion"
import { faReddit, faHackerNews, faProductHunt } from "@fortawesome/free-brands-svg-icons"
import { OutboundLink } from 'gatsby-plugin-gtag'

import Context from "../../context"
import config from "../../config"
import { parseDate } from "../../utils"
import ContentWrapper from "../../styles/ContentWrapper"
import Underlining from "../../styles/Underlining"

const { shownArticles } = config

const StyledSection = styled.section`
  width: 100%;
  height: auto;
  background: ${({ theme }) => theme.colors.background};
`

const StyledContentWrapper = styled(ContentWrapper)`
  && {
    width: 100%;
    height: 100%;
    padding-right: 0;
    padding-left: 0;
    @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
      padding-right: 2.5rem;
      padding-left: 2.5rem;
    }
    .section-title {
      padding-right: 2.5rem;
      padding-left: 2.5rem;
      @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
        padding-right: 0;
        padding-left: 0;
      }
    }
    .articles {
      display: flex;
      justify-content: space-between;
      overflow-x: scroll;
      overflow-y: hidden;
      -webkit-overflow-scrolling: touch;
      margin: -2rem 0 0 0;
      padding: 0 2rem;
      &::-webkit-scrollbar {
        display: none;
      }
      @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
        padding: 0;
        overflow: visible;
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
    }
    .card {
      width: 16.25rem;
      height: 12rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 1rem;
      margin: 2rem 1rem;
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.16);
      border-radius: ${({ theme }) => theme.borderRadius};
      transition: box-shadow 0.3s ease-out;
      &:hover {
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.32);
      }
      &:hover ${Underlining} {
        box-shadow: inset 0 -1rem 0 ${({ theme }) => theme.colors.secondary};
      }
      @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
        margin: 2rem auto;
      }
      .category {
        color: ${({ theme }) => theme.colors.primary};
        text-transform: uppercase;
        letter-spacing: +1px;
        font-weight: 700;
      }
      .title {
        margin-top: 0.25rem;
        margin-bottom: 0.25rem;
      }
      .date {
        font-size: 0.75rem;
        color: #555555;
        letter-spacing: +0.5px;
      }
    }
  }
`

const Articles = () => {
  // shownArticles is set in config.js, due to the rss feed loader
  // it is currently limited to max 3
  const MAX_ARTICLES = shownArticles

  const { isIntroDone } = useContext(Context).state
  const [articles, setArticles] = useState()
  const articlesControls = useAnimation()

  // Load and display articles after the splashScreen sequence is done
  useEffect(() => {
    const loadArticles = async () => {
      if (isIntroDone) {
        await articlesControls.start({ opacity: 1, y: 0, transition: { delay: 1 } })
        // MediumRssFeed is set in config.js
        setArticles([
          {
            title: "Posted at /r/apple with 250+ upvotes!",
            link: "https://www.reddit.com/r/apple/comments/i17qex/your_next_meeting_always_before_your_eyes_in/",
            pubDate: "2020-07-31",
            categories: ["", "", "Reddit"],
            icon: faReddit
          },
          {
            title: "Raised up to #1 with 130+ points",
            link: "https://news.ycombinator.com/item?id=23991111",
            pubDate: "2020-07-30",
            categories: ["", "", "HackerNews"],
            icon: faHackerNews
          },
          {
            title: "Launched with 400+ upvotes!",
            link: "https://www.producthunt.com/posts/meetingbar",
            description: "MeetingBar is a macOS menu bar app for your calendar meetings. Integrated with Google Meet and Zoom so you can quickly join meetings from event or create ad hoc meeting.",
            pubDate: "2020-05-31",
            categories: ["", "", "ProductHunt"],
            icon: faProductHunt
          },
        ])
      }
    }
    loadArticles()
  },[isIntroDone, articlesControls, MAX_ARTICLES])

  return (
    <StyledSection
      id="articles"
      initial={{ opacity: 0, y: 20 }}
      animate={articlesControls}
    >
      <StyledContentWrapper>
        <h3 className="section-title">Featured on</h3>
        <div className="articles">
          {articles
            ? articles.map(item => (
                <OutboundLink
                  href={item.link}
                  target="_blank"
                  rel="noopener"
                  title={item.title}
                  aria-label={item.link}
                  key={item.link}
                >
                  <div className="card">
                    <span className="category">
                      <FontAwesomeIcon icon={item.icon} />
                      {" "}
                      <Underlining color="tertiary" hoverColor="secondary">
                        {item.categories[2]}
                      </Underlining>
                    </span>
                    <h4 className="title">{item.title}</h4>
                    <span className="date">{parseDate(item.pubDate)}</span>
                  </div>
                </OutboundLink>
              ))
            : [...Array(MAX_ARTICLES)].map((i, key) => (
              <div className="card" key={key}>
                <SkeletonLoader 
                  background="#f2f2f2"
                  height="1.5rem" 
                  style={{ marginBottom: ".5rem" }}
                />
                <SkeletonLoader 
                  background="#f2f2f2" 
                  height="4rem"
                />
                <SkeletonLoader 
                  background="#f2f2f2" 
                  height=".75rem" 
                  width="50%" 
                  style={{ marginTop: ".5rem" }}
                />
              </div>
            ))}
        </div>
      </StyledContentWrapper>
    </StyledSection>
  )
}

export default Articles
