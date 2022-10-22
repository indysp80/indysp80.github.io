import React from "react"
import PropTypes from "prop-types"

import Container from '@mui/material/Container';

import Language from "./language"

import "../styles.scss"

const Layout = ({ children }) => {

  return (
    <Container>
      <Language />
      <main>{children}</main>
    </Container>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
