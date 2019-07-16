import React from 'react'
import styled from 'styled-components'

const StyledItem = styled.li`
  display: flex;
  align-content: center;
  padding: 10px;
  margin: 10px;
  background-color: #C9E9F1;
  border: 1px solid white;
  border-radius: 5px;
  font-size: 1.5em;
  background-color: ${props => (!props.item.checked ? '#C9E9F1' : '#c1c1c1')};
  color: ${props => (!props.item.checked ? 'black' : 'white')};
  line-height: 1;

  &:hover {
    cursor: pointer;
  }
`

export const Item = ({ item, handleCheck }) => {
  return (
    <StyledItem item={item} id={item.value} onClick={handleCheck}>
      {item.value}
    </StyledItem>
  )
}
