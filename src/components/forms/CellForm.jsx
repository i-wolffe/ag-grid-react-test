import React, { Component } from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

export class CellForm extends Component {
  constructor(props) {
		super(props);
		this.state = {
			CellGroup: "",
			CellArea: "",
			CellModel: "",
			CellPzas: "",
			CellOperators: "",
			Validated: false,
		};
	}
  async componentDidMount() {
		if (this.props.method !== "add" && this.props.method !== "") {
			//Load data from db with the id
			let id = this.props.id;
		}
	}
	async handleSubmit(ev) {
		let form = ev.currentTarget;
		if (form.checkValidity() === false) {
			ev.preventDefault();
			ev.stopPropagation();
		}
    console.log(this.state.Validated)
		this.setState({
			Validated: true,
		});
	}
  render() {
    return <Form noValidate validated={this.state.Validated} onSubmit={(e) => this.handleSubmit(e)}>
    <Row>
      <Form.Group  as={Col} md="6" className='Form-field' controlId='cell-group'>
        <Form.Label>Grupo de Celda:</Form.Label>
        <Form.Control 
          required
          type='text'
          placeholder='Ex. 8'
          defaultValue=''
        />
        <Form.Control.Feedback type="invalid">
          Por favor ingresa un valor válido
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group as={Col} md="6" className='Form-field' controlId='cell-area'>
        <Form.Label>Area de Celda:</Form.Label>
        <Form.Control 
          required
          type='text'
          placeholder='Ex. OSHAWA'
          defaultValue=''
        />
        <Form.Control.Feedback type="invalid">
          Por favor ingresa un valor válido
        </Form.Control.Feedback>
      </Form.Group>
    </Row>
    <Form.Group className='Form-field' controlId='cell-model'>
      <Form.Label>Nuevo Modelo:</Form.Label>
      <Form.Control 
        required
        type='text'
        placeholder='Ex. 33-G-78279912'
        defaultValue=''
      />
    <Form.Control.Feedback type="invalid">
      Por favor ingresa un valor válido
    </Form.Control.Feedback>
    </Form.Group>
    <Row>
      <Form.Group as={Col} md="6" className='Form-field' controlId='cell-pzas'>
        <Form.Label>Piezas por hora:</Form.Label>
        <Form.Control 
          required
          type='number'
          placeholder='Ex. 66'
          defaultValue=''
        />
        <Form.Control.Feedback type="invalid">
          Las piezas por hora deben ser un número
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group as={Col} md="6" className='Form-field' controlId='cell-operators'>
        <Form.Label>Número de Operadores:</Form.Label>
        <Form.Control 
          required
          type='number'
          placeholder='Ex. 4'
          defaultValue=''
        />
        <Form.Control.Feedback type="invalid">
          Por favor ingresa un valor válido
        </Form.Control.Feedback>
      </Form.Group>
    </Row>
    <Form.Group className='Form-field' controlId='cell-submit'>
      <Button type="submit">Agregar</Button>
    </Form.Group>
  </Form>
  }
}

export default CellForm;
