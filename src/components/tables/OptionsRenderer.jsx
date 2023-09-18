import React, { Component } from "react"
import { Button } from "react-bootstrap"
import { BiTrash,BiEdit } from 'react-icons/bi';

export default class OptionsRenderer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      Value: this.props.value
    }
  }
  handleClick(e,key) {
    e.preventDefault()
    console.log(e)
    console.log('state',this.state.Value)
  }
  render() {
    return <div className="Table-buttons">
      <Button
        id={`edit-item-cell-${0+1}`}
        variant='outline-primary'
        onClick={(e) => this.handleClick(e,`split-cell-${0+1}`,`row-${0+1}`)}
      >
        <BiEdit />
      </Button>
      <Button
        id={`remove-item-${0+1}`}
        variant='outline-danger'
        onClick={(e) => this.handleClick(e,`split-cell-${0+1}`,`row-${0+1}`)}
      >
        <BiTrash />
      </Button>
    </div>
  }
}