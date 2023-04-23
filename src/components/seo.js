import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

import Theme from "../styles/Theme"
const { colors } = Theme

const SEO = ({ description, lang, meta, title }) => {
  const { site } = useStaticQuery(query)

  const metaTitle = title || site.siteMetadata.title
  const metaDescription = description || site.siteMetadata.description

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={metaTitle}
      titleTemplate={`%s`}
      meta={[
        {
          name: `title`,
          content: metaTitle,
        },
        {
          name: `description`,
          content: metaDescription,
        },
        {
          name: `image`,
          content: `https://github.com/leits/MeetingBar/raw/master/screenshot.png`,
        },
        {
          property: `og:title`,
          content: metaTitle,
        },
        {
          property: `og:site_name`,
          content: site.siteMetadata.siteName,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:url`,
          content: site.siteMetadata.siteUrl,
        },
        {
          property: `og:type`,
          content: `og:product`,
        },
        {
          property: `og:image`,
          content: `https://github.com/leits/MeetingBar/raw/master/screenshot.png`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: metaTitle,
        },
        {
          name: `twitter:image`,
          content: `https://github.com/leits/MeetingBar/raw/master/screenshot.png`,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          name: `msapplication-TileColor`,
          content: colors.primary,
        },
        {
          name: `theme-color`,
          content: colors.primary,
        },
      ].concat(meta)}
    >
      <script async src="https://cdn.splitbee.io/sb.js"></script>
      <script async defer data-website-id="b665c9d9-e8cd-4a51-bdd3-ff18e8301aca" src="https://umami.leits.me/script.js"></script>
    </Helmet>
  )
}

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  meta: PropTypes.array,
  lang: PropTypes.string,
}

SEO.defaultProps = {
  title: ``,
  lang: `en`,
  meta: [],
  description: ``,
}

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        title
        siteName
        description
        author
        siteUrl
      }
    }
  }
`

export default SEO
