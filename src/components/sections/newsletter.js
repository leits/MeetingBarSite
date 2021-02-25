import React from "react"
import styled from "styled-components"
import ContentWrapper from "../../styles/ContentWrapper"


const StyledSection = styled.section`
  display: grid;
  grid-gap: 1rem;
  max-width: 700px;
  margin: 0 auto;
  justify-items: center;

  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));

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
      justify-content: center;
      align-items: center;

    }
  }
`

const Newsletter = () => {
  return (
    <StyledSection id="newsletter">
        <StyledContentWrapper>
        <h3 className="section-title">{"Subscribe to my newsletter"}</h3>
        <iframe src="https://leits.substack.com/embed" width="480" height="320" style={{ border: "1px solid #EEE", background:"white"}} frameborder="0" scrolling="no"></iframe>
      </StyledContentWrapper>
    </StyledSection>
  )
}

export default Newsletter
