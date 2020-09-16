import React from "react"
import styled from "styled-components"

import ContentWrapper from "../styles/ContentWrapper"

import Layout from "../components/layout"
import SEO from "../components/seo"

const StyledSection = styled.section`
  width: 100%;
  max-width: 62.5rem;
  margin: 0 auto;
  padding: 0 2.5rem;
  height: auto;
  background: ${({ theme }) => theme.colors.background};
  h1 {
    font-size: 1.5rem;
  }
  h2 {
    font-size: 1.25rem;
  }
  h3 {
    font-size: 1rem;
    margin-bottom: 1rem;
  }
  #fs-frm input,
  #fs-frm select,
  #fs-frm textarea,
  #fs-frm fieldset,
  #fs-frm optgroup,
  #fs-frm label,
  #fs-frm #card-element:disabled {
    font-family: inherit;
    font-size: 100%;
    color: inherit;
    border: none;
    border-radius: 0;
    display: block;
    width: 100%;
    padding: 0;
    margin: 0;
    -webkit-appearance: none;
    -moz-appearance: none;
  }
  #fs-frm label,
  #fs-frm legend,
  #fs-frm ::placeholder {
    font-size: 0.825rem;
    margin-bottom: 0.5rem;
    padding-top: 0.2rem;
    display: flex;
    align-items: baseline;
  }

  /* border, padding, margin, width */
  #fs-frm input,
  #fs-frm select,
  #fs-frm textarea,
  #fs-frm #card-element {
    border: 1px solid rgba(0, 0, 0, 0.2);
    background-color: rgba(255, 255, 255, 0.9);
    padding: 0.75em 1rem;
    margin-bottom: 1.5rem;
  }
  #fs-frm input:focus,
  #fs-frm select:focus,
  #fs-frm textarea:focus {
    background-color: white;
    outline-style: solid;
    outline-width: thin;
    outline-color: gray;
    outline-offset: -1px;
  }
  #fs-frm [type="text"],
  #fs-frm [type="email"] {
    width: 100%;
  }
  #fs-frm [type="button"],
  #fs-frm [type="submit"],
  #fs-frm [type="reset"] {
    width: auto;
    cursor: pointer;
    -webkit-appearance: button;
    -moz-appearance: button;
    appearance: button;
  }
  #fs-frm [type="button"]:focus,
  #fs-frm [type="submit"]:focus,
  #fs-frm [type="reset"]:focus {
    outline: none;
  }
  #fs-frm [type="submit"],
  #fs-frm [type="reset"] {
    margin-bottom: 0;
  }
  #fs-frm select {
    text-transform: none;
  }

  #fs-frm [type="checkbox"] {
    -webkit-appearance: checkbox;
    -moz-appearance: checkbox;
    appearance: checkbox;
    display: inline-block;
    width: auto;
    margin: 0 0.5em 0 0 !important;
  }

  #fs-frm [type="radio"] {
    -webkit-appearance: radio;
    -moz-appearance: radio;
    appearance: radio;
  }

  /* address, locale */
  #fs-frm fieldset.locale input[name="city"],
  #fs-frm fieldset.locale select[name="state"],
  #fs-frm fieldset.locale input[name="postal-code"] {
    display: inline;
  }
  #fs-frm fieldset.locale input[name="city"] {
    width: 52%;
  }
  #fs-frm fieldset.locale select[name="state"],
  #fs-frm fieldset.locale input[name="postal-code"] {
    width: 20%;
  }
  #fs-frm fieldset.locale input[name="city"],
  #fs-frm fieldset.locale select[name="state"] {
    margin-right: 3%;
  }
`

const StyledContentWrapper = styled(ContentWrapper)`
  && {
    width: 100%;
    max-width: 36rem;
    margin: 0;
    padding: 0;
    height: 100%;
  }
`

const Contact = () => {
  return (
    <Layout splashScreen={false}>
      <SEO
        title="MeetingBar: Contact"
        meta={[{ name: "robots", content: "noindex" }]}
      />
      <StyledSection>
        <StyledContentWrapper>
          <h1>{"Contact form"}</h1>
          <form
            id="fs-frm"
            name="simple-contact-form"
            acceptCharset="utf-8"
            action="https://formspree.io/xoqkgrnw"
            method="post"
          >
            <fieldset id="fs-frm-inputs">
              <label htmlFor="email-address">Email</label>
              <input
                type="email"
                name="_replyto"
                id="email-address"
                required
              ></input>
              <label htmlFor="message">Message</label>
              <textarea
                rows="5"
                name="message"
                id="message"
                placeholder=""
                required
              ></textarea>
              <input type="submit" value="Submit"></input>
            </fieldset>
          </form>
        </StyledContentWrapper>
      </StyledSection>
    </Layout>
  )
}

export default Contact
