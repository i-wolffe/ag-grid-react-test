import React, { Component } from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

export class CellForm extends Component {
  constructor(props) {
		super(props);
		this.state = {
			CellName: this.props.ActionData.cell || "",
			CellArea: this.props.ActionData.area || "",
			CellModel: this.props.ActionData.name || "",
			CellPzas: this.props.ActionData.pzas || "",
			CellOperators: this.props.ActionData.ops || "",
      Data: this.props.ActionData,
      StateMethod: this.props.StateMethod,
      LoadedData: this.props.LoadedData,
			Validated: false,
      CellAreas: this.props.CellAreas,
      CellNames: this.props.CellNames,
		};
	}
  async componentDidMount() {
    console.error('------> MOUNT ->',this.state)
    // // console.log('method ->',this.props.StateMethod)
    // // console.log('Data ->',this.props.ActionData)
    // // console.info('loaded ->',this.state.LoadedData)
    // // console.info('loadedPROP ->',this.props.LoadedData)
    // // console.warn('warn -> name',this.state.CellNames)
		// if (this.props.method !== "add" && this.props.method !== "") {
		// 	//Load data from db with the id
		// 	let id = this.props.id;
		// }
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
  async componentDidUpdate() {
    // only if it is MODIFICAR
    console.info(this.props.LoadedData,'------> UPDATE ->',this.state)
    console.log('Data ->',this.props.ActionData)
    if (this.props.ActionData !== this.state.Data || this.state.StateMethod !== this.props.StateMethod) {
      let d = this.props.ActionData
      this.setState({
        CellName: d.cell,
        CellArea: d.area,
        CellModel: d.name,
        CellPzas: d.pzas,
        CellOperators: d.ops,
        Data: d,
        LoadedData: true,
        StateMethod: this.props.StateMethod
      })
      console.warn('Enter condition:',d)
    }
  }
  render() {
    return <Form 
    noValidate validated={this.state.Validated} 
    onSubmit={(e) => this.handleSubmit(e)}
    className={`background-form-${this.state.StateMethod} background-form`}
    >
    <Row>
      <Form.Group as={Col} md="6" className='Form-field' controlId='cell-area'>
        <Form.Label>Area de Celda:</Form.Label>
        <Form.Select
          disabled={this.state.StateMethod === 'Eliminar'}
          required
          id="area-selector"
          placeholder="Ex. OSHAWA 2"
          style={{margin: 'auto'}}
          onClick={ (e) => {this.setState({CellAreas: this.props.CellAreas})}}
          onChange={ (e) => this.setState({ CellArea: e.target.value }) }
          value={this.state.CellArea}
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
          disabled={this.state.StateMethod === 'Eliminar'}
          required
          id="cell-selector"
          placeholder="Ex. A1"
          style={{margin: 'auto'}}
          onChange={ (e) => this.setState({ CellName: e.target.value }) }
          value={this.state.CellName}
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
        disabled={this.state.StateMethod === 'Eliminar'}
        required
        type='text'
        placeholder='Ex. 33-G-78279912'
        onChange={ (e) => this.setState({ CellModel: e.target.value }) }
        value={this.state.CellModel}
      />
    <Form.Control.Feedback type="invalid">
      Por favor ingresa un valor válido
    </Form.Control.Feedback>
    </Form.Group>
    <Row>
      <Form.Group as={Col} md="6" className='Form-field' controlId='cell-pzas'>
        <Form.Label>Piezas por hora:</Form.Label>
        <Form.Control 
          disabled={this.state.StateMethod === 'Eliminar'}
          required
          type='number'
          min={1}
          placeholder='Ex. 66'
          onChange={ (e) => this.setState({ CellPzas: e.target.value }) }
          value={this.state.CellPzas}
        />
        <Form.Control.Feedback type="invalid">
          Las piezas por hora deben ser un número
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group as={Col} md="6" className='Form-field' controlId='cell-operators'>
        <Form.Label>Número de Operadores:</Form.Label>
        <Form.Control 
          disabled={this.state.StateMethod === 'Eliminar'}
          required
          min={1}
          type='number'
          placeholder='Ex. 4'
          onChange={ (e) => this.setState({ CellOperators: e.target.value }) }
          value={this.state.CellOperators}
        />
        <Form.Control.Feedback type="invalid">
          Por favor ingresa un valor válido
        </Form.Control.Feedback>
      </Form.Group>
    </Row>
    <Form.Group className='Form-field' controlId='cell-submit'>
      <Button 
        type="submit"
        variant={parseBootstrapClass(this.state.StateMethod)} 
      >
        {this.state.StateMethod}
      </Button>
    </Form.Group>
  </Form>
  }
}

let parseBootstrapClass = (method) => {
  console.log(method)
  let retClass = ''
  switch(method.toString()){
    case 'Eliminar': retClass = 'outline-danger';break;
    case 'Agregar': retClass = 'outline-success';break;
    case 'Modificar': retClass = 'outline-primary';break;
    default: retClass = 'outline-secondary';break;
  }
  return retClass;  
}

export default CellForm;
