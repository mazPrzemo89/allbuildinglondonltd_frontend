import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const StyledLink = styled(Link)`
  text-decoration: none;

  &:focus,
  &:hover,
  &:visited {
    color: black;
  }
  ,
  &:link {
    color: black;
  }
  ,
  &:active {
    text-decoration: none;
  }
`

export default (props) => <StyledLink {...props} />
