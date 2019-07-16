import React from 'react'
import styled from 'styled-components'

const StyledInput = styled.div`
  height: 80px;
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  background-color: #1e6d80;

  input {
    position: relative;
    padding-left: 10px;
    margin-left: 15px;
    height: 40px;
    width: 100%;
    flex: 90%;
    border: none;
    outline: none;
    font-size: 1.2em;
    border-radius: 5px;
  }
`

const StyledButton = styled.div`
  height: 40px;
  border-radius: 5px;
  color: ${props => (props.item ? 'white' : '#235460')};
  border: 1px solid ${props => props.item ? 'white' : '#235460'};
  font-size: 2em;
  flex: 10%;
  margin: 10px;
  display: block;
  text-align: center;
  line-height: 1;

  &:hover {
    cursor: pointer;
  }
`

export const Input = ({ item, handleInputChange, addItemHandler }) => (
  <StyledInput>
    <input
      type="text"
      placeholder="Remember me to buy...."
      onChange={handleInputChange}
      value={item.value}
    />
    <StyledButton
      item={item.value}
      onClick={item.value ? addItemHandler : undefined}
    >+
    </StyledButton>
  </StyledInput>
)
