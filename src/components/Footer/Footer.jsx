import React from 'react'
import styled from 'styled-components'

const StyledFooter = styled.div`
  margin: 0;
  padding: 0;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 60px;
  background-color: #12404b;
  display: flex;
  justify-content: center;
`

const StyledButton = styled.div`
  border-radius: 5px;
  width: 40%;
  border: 1px solid white;
  color: ${props => (props.list.filter(item => item.checked === true).length) > 0 ? 'white' : '#1e6d80'};
  font-size: 1.5em;
  margin: 10px;
  display: flex;
  justify-content: center;

  &:hover {
    cursor: pointer;
  }
`

export const Footer = ({ list, ClearCompradosHandler }) => (
  <StyledFooter list={list}>
    <StyledButton list={list} onClick={ClearCompradosHandler}>Clear done</StyledButton>
  </StyledFooter>
)