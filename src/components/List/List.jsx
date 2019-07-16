import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Item } from '../Item/Item'

const StyledList = styled.div`
  ul {
    padding: 0;
    flex: 100%;
    display: flex;
    flex-flow: wrap;
    list-style: none;
    justify-content: center;
  }
`

export const List = ({ list, handleCheck }) => (
  <StyledList>
    <ul>
      {list &&
        list.map((item) => (
          <Item key={item.value} handleCheck={handleCheck} item={item} />
        ))}
    </ul>
  </StyledList>
)

List.propTypes = {
  list: PropTypes.array.isRequired
}
