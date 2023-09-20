import React, { Component } from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

export class CellForm extends Component {
  constructor(props) {
		super(props);
		this.state = {
			CellName: "",
			CellArea: "",
			CellModel: "",
			CellPzas: "",
			CellOperators: "",
      LoadedData: false,
			Validated: false,
      CellAreas: this.props.CellAreas,
      CellNames: this.props.CellNames,
		};
	}
  async componentDidMount() {
    // console.log(this.props)
    // console.log('info -> method',this.props.method)
    // console.log('info state -> area',this.state.CellAreas)
    // console.log('info props -> area',this.props.CellAreas)
    // console.log('info -> name',this.state.CellNames)
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
  componentDidUpdate() {
    let isReset = this.props.reset
		console.log('UPDATE ->',this.props.reset)
		console.log('method ->',this.props.StateMethod)
    if (isReset[0] === "cell") {
      if (!isReset[1]) {
        this.setState({
          Validated: isReset[1]
        })
      }
    }
    if (this.props.StateMethod !== undefined && this.props.StateMethod !== 'add' && !this.state.LoadedData) {
      console.warn(this.props.ActionData)
    }
	}
  async setArea (e) {
    this.setState({
      CellArea: e.value,
      CellNames: this.props.CellNames
    })
  }
  async setCell (e) {
    this.setState({
      CellName: e.value 
    })
  }
  render() {
    return <Form noValidate validated={this.state.Validated} onSubmit={(e) => this.handleSubmit(e)}>
    <Row>
      <Form.Group as={Col} md="6" className='Form-field' controlId='cell-area'>
        <Form.Label>Area de Celda:</Form.Label>
        <Form.Select
          required
          id="area-selector"
          placeholder="Ex. OSHAWA 2"
          defaultValue="--"
          onChange={ (e) => this.setArea(e.target) }
          onClick={ (e) => {this.setState({CellAreas: this.props.CellAreas})}}
          style={{margin: 'auto'}}
        >
          {
            this.state.CellAreas.map((area,idx) => {
              return <option key={`area-opt-${idx}`}  value={area.name}>{area.name}</option>
            })
          }
        </Form.Select>
      </Form.Group>
      <Form.Group  as={Col} md="6" className='Form-field' controlId='cell-group'>
        <Form.Label>Grupo de Celda:</Form.Label>
        <Form.Select
          required
          id="cell-selector"
          placeholder="Ex. A1"
          defaultValue="--"
          onChange={ (e) => this.setCell(e.target) }
          style={{margin: 'auto'}}
        >
          {
            this.state.CellNames.map((cell,idx) => {
              if (cell.Area === this.state.CellArea) {
                return  <option key={`cell-name-${idx}`} value={cell.Nombre}>{cell.Nombre}</option>
              } else {
                return null
              }
            })
          }
        </Form.Select>
      </Form.Group>
    </Row>
    <Form.Group className='Form-field' controlId='cell-model'>
      <Form.Label>Nombre del Modelo:</Form.Label>
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
      <Button variant="outline-success" type="submit">Enviar</Button>
    </Form.Group>
  </Form>
  }
}

export default CellForm;
