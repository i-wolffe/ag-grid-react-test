import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

export const Register = (props) => {
  const { type,method,id } = useParams() // register/(cell/auto)/(add/edit)
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };
  return (
    <div className="Tab-container">
      {/* Crud conectado a una base de datos para 
      AGREGAR NUEVOS MODELOS, sus datos y sus Celdas activas */}
      <Tabs
      defaultActiveKey={type || 'cell'}
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      <Tab eventKey="cell" title="Celda">
        <div className="d-flex-r">
          <div className="Half-content d-flex">
            <h3>Agregar modelo a Celda</h3>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
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
                  placeholder=''
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
          </div>
          <div className="Half-content">
            <h3>Delete</h3>
            AG grid goes here to select from the Query
          </div>
        </div>
      </Tab>
      <Tab eventKey="auto" title="Autoclave">
        <div className="d-flex-r">
          Hello - {method} - {id}
        </div>
      </Tab>
    </Tabs>
    </div>
  )
}
