import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `rebeccapurple`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        display: `flex`,
        justifyContent: `space-between`,
        alignItems: `center`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <div
        style={{
          display: `grid`,
          gridTemplateColumns: `1fr 1fr`,
          gridGap: `8px`,
          alignContent: `center`,
        }}
      >
        <h4 style={{ margin: 0 }}>
          <Link
            to="/blog"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
            Blog
          </Link>
        </h4>
        <h4 style={{ margin: 0 }}>
          <Link
            to="/notes"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
            Notes
          </Link>
        </h4>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
