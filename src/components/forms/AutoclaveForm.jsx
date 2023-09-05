import React, { Component } from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

export class AutoclaveForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			AutoNumber: "",
			AutoArea: "",
			AutoCrew: "",
			AutoCycles: "",
			AutoCyclesA: "",
			AutoCyclesB: "",
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
    console.log('LOG!!')
    console.log(this.state.Validated)
		this.setState({
			Validated: true,
		});
	}
	render() {
		return (
			<Form noValidate validated={this.state.Validated} onSubmit={(e) => this.handleSubmit(e)}>
				<Row>
					<Form.Group
						as={Col}
						md="4"
						className="Form-field"
						controlId="auto-number"
					>
						<Form.Label>Número de Autoclave</Form.Label>
						<Form.Control
							required
							type="number"
							placeholder="Ex. 26"
							defaultValue=""
						/>
						<Form.Control.Feedback type="invalid">
							Por favor ingresa un valor válido
						</Form.Control.Feedback>
					</Form.Group>
					<Form.Group
						as={Col}
						md="4"
						className="Form-field"
						controlId="auto-area"
					>
						<Form.Label>Area de Autoclave:</Form.Label>
						<Form.Control
							required
							type="text"
							placeholder="Ex. OSHAWA"
							defaultValue=""
						/>
						<Form.Control.Feedback type="invalid">
							Por favor ingresa un valor válido
						</Form.Control.Feedback>
					</Form.Group>
					<Form.Group
						as={Col}
						md="4"
						className="Form-field"
						controlId="auto-crew"
					>
						<Form.Label>Tripulación:</Form.Label>
						<Form.Control
							required
							type="number"
							placeholder="Ex. 8"
							defaultValue=""
						/>
						<Form.Control.Feedback type="invalid">
							Por favor ingresa un valor válido
						</Form.Control.Feedback>
					</Form.Group>
				</Row>
				<Row>
					<Form.Group
						as={Col}
						md="4"
						className="Form-field"
						controlId="auto-cycles"
					>
						<Form.Label>Ciclos Esperados:</Form.Label>
						<Form.Control
							required
							type="number"
							placeholder="Ex. 12"
							defaultValue=""
						/>
						<Form.Control.Feedback type="invalid">
							Por favor ingresa un valor válido
						</Form.Control.Feedback>
					</Form.Group>
					<Form.Group
						as={Col}
						md="4"
						className="Form-field"
						controlId="auto-cycles-a"
					>
						<Form.Label>Piezas por Ciclo A:</Form.Label>
						<Form.Control
							required
							type="number"
							placeholder="Ex. 650"
							defaultValue=""
						/>
						<Form.Control.Feedback type="invalid">
							Las piezas por ciclo deben ser un valor numérico
						</Form.Control.Feedback>
					</Form.Group>
					<Form.Group
						as={Col}
						md="4"
						className="Form-field"
						controlId="auto-cycles-b"
					>
						<Form.Label>Piezas por Ciclo B:</Form.Label>
						<Form.Control
							required
							type="number"
							placeholder="Ex. 785"
							defaultValue=""
						/>
						<Form.Control.Feedback type="invalid">
							Las piezas por ciclo deben ser un valor numérico
						</Form.Control.Feedback>
					</Form.Group>
				</Row>
				<Form.Group className="Form-field" controlId="auto-submit">
					<Button type="submit">Agregar</Button>
				</Form.Group>
			</Form>
		);
	}
}

export default AutoclaveForm;
