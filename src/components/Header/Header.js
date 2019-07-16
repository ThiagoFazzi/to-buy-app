import React from 'react'
import styled from 'styled-components'

import { IoIosBasket } from 'react-icons/io'

const StyledHeader = styled.div`
  background-color: #12404b;
  position: fixed;
  width: 100%;
  height: 50px;
  top: 0;
  display: flex;
  align-items: center;
  color: white;
`

const StyledLogo = styled.div`
  padding-left: 10px;
  flex: 30%;

  svg {
    font-size: 2em;
  }
`
const StyledGroup = styled.div`
  display: flex;
  flex: 70%;
  flex-flow: row;
  justify-content: space-around;
`

export const Header = ({ list }) => (
  <StyledHeader>
    <StyledLogo>
      <IoIosBasket />
    </StyledLogo>
    <StyledGroup>
      <div>{`Total: ${list.length}`}</div>
      <div>{`Done: ${list.filter(item => item.checked === true).length}`}</div>
    </StyledGroup>
  </StyledHeader>
)
