import React, { Component } from 'react'
import styled from 'styled-components'

import { Input } from '../../components/Input/Input'
import { List } from '../../components/List/List'
import { Footer } from './../../components/Footer/Footer'
import { Header } from './../../components/Header/Header'

const StyledTodo = styled.div`
  position: relative;
  margin-top: 50px;
  height: 100%;
`

export default class Todo extends Component {
  state = {
    item: { value: '', checked: false },
    list: []
  }

  addItemHandler = () => {
    this.setState({
      list: [...this.state.list, this.state.item],
      item: { value: '', checked: false }
    })
  }

  handleInputChange = e => {
    this.setState({
      item: { value: e.target.value, checked: false }
    })
  }

  handleCheck = e => {
    const { list } = this.state
    const newList = list.map(item => {
      if (item.value === e.target.id) {
        item.checked = !item.checked
      }
      return { ...item }
    })
    this.setState({
      list: newList
    })
  }

  ClearCompradosHandler = (e) => {
    const { list } = this.state
    const newList = list.filter(item => (
      item.checked === false
    ))
    this.setState({
      list: newList
    })
  }

  render() {
    const { list, item } = this.state
    return (
      <div>
        <Header list={list} />
        <StyledTodo>
          <Input
            handleInputChange={this.handleInputChange}
            addItemHandler={this.addItemHandler}
            item={item}
          />
          <List list={list} handleCheck={this.handleCheck} />
        </StyledTodo>
        <Footer list={list} ClearCompradosHandler={this.ClearCompradosHandler}/>
      </div>
    )
  }
}
