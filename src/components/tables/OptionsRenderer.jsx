import React, { Component } from "react"
import { Button } from "react-bootstrap"
import { BiTrash,BiEdit } from 'react-icons/bi';

export default class OptionsRenderer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      Value: this.props.value
    }
    this.invokeSetAction = this.invokeSetAction.bind(this)
    // bind with parent method
  }
  invokeSetAction (e,action){
    this.props.context.componentParent.parentSetAction([action],[this.state.Value])
  }
  render() {
    return <div className="Table-buttons">
      <Button
        id={`edit-item-cell-${0+1}`}
        variant='outline-primary'
        onClick={(e) => this.invokeSetAction(e,`edit`)}
      >
        <BiEdit />
      </Button>
      <Button
        id={`remove-item-${0+1}`}
        variant='outline-danger'
        onClick={(e) => this.invokeSetAction(e,`delete`)}
      >
        <BiTrash />
      </Button>
    </div>
  }
}