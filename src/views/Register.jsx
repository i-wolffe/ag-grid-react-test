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
import AutoclaveForm from '../components/forms/AutoclaveForm';

export const Register = (props) => {
  const { type,method,id } = useParams() // register/(cell/auto)/(add/edit)
  const [validatedCell, setValidatedCell] = useState(false);
  const [validatedAuto, setValidatedAuto] = useState(false);

  const handleSubmitCell = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidatedCell(true);
  };
  const handleSubmitAuto = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidatedAuto(true);
  };
  return (
    <div className="Tab-container">
      {/* Crud conectado a una base de datos para 
      AGREGAR NUEVOS MODELOS, sus datos y sus Celdas activas */}
      <Tabs
      defaultActiveKey={type || 'cell'}
      id="register-tab-options"
      className="mb-3"
    >
      <Tab eventKey="cell" title="Celda">
        <div className="d-flex-r">
          <div className="Half-content d-flex">
            <h4>Agregar modelo a Celda</h4>
            <Form noValidate validated={validatedCell} onSubmit={handleSubmitCell}>
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
          </div>
          <div className="Half-content">
            <h4>Delete</h4>
            AG grid goes here to select from the Query
          </div>
        </div>
      </Tab>
{/* *************************************************** */}
      <Tab eventKey="auto" title="Autoclave">
      <div className="d-flex-r">
          <div className="Half-content d-flex">
            <h4>Agregar Autoclave</h4>
            {/* <Form noValidate validated={validatedAuto} onSubmit={handleSubmitAuto}>
              <Row>
                <Form.Group  as={Col} md="4" className='Form-field' controlId='auto-number'>
                  <Form.Label>Número de Autoclave</Form.Label>
                  <Form.Control 
                    required
                    type='number'
                    placeholder='Ex. 26'
                    defaultValue=''
                  />
                  <Form.Control.Feedback type="invalid">
                    Por favor ingresa un valor válido
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="4" className='Form-field' controlId='auto-area'>
                  <Form.Label>Area de Autoclave:</Form.Label>
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
                <Form.Group as={Col} md="4" className='Form-field' controlId='auto-crew'>
                  <Form.Label>Tripulación:</Form.Label>
                  <Form.Control 
                    required
                    type='number'
                    placeholder='Ex. 8'
                    defaultValue=''
                  />
                  <Form.Control.Feedback type="invalid">
                    Por favor ingresa un valor válido
                  </Form.Control.Feedback>
                </Form.Group>
              </Row>
              <Row>
                <Form.Group as={Col} md="4" className='Form-field' controlId='auto-cycles'>
                  <Form.Label>Ciclos Esperados:</Form.Label>
                  <Form.Control 
                    required
                    type='number'
                    placeholder='Ex. 12'
                    defaultValue=''
                  />
                <Form.Control.Feedback type="invalid">
                  Por favor ingresa un valor válido
                </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="4" className='Form-field' controlId='auto-cycles-a'>
                  <Form.Label>Piezas por Ciclo A:</Form.Label>
                  <Form.Control 
                    required
                    type='number'
                    placeholder='Ex. 650'
                    defaultValue=''
                  />
                  <Form.Control.Feedback type="invalid">
                    Las piezas por ciclo deben ser un valor numérico
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="4" className='Form-field' controlId='auto-cycles-b'>
                  <Form.Label>Piezas por Ciclo B:</Form.Label>
                  <Form.Control 
                    required
                    type='number'
                    placeholder='Ex. 785'
                    defaultValue=''
                  />
                  <Form.Control.Feedback type="invalid">
                    Las piezas por ciclo deben ser un valor numérico
                  </Form.Control.Feedback>
                </Form.Group>
              </Row>
              <Form.Group className='Form-field' controlId='auto-submit'>
                <Button type="submit">Agregar</Button>
              </Form.Group>
            </Form> */}
            <AutoclaveForm props={props} method={method} id={id} />
          </div>
          <div className="Half-content">
            <h4>Delete</h4>
            AG grid goes here to select from the Query
          </div>
        </div>
      </Tab>
    </Tabs>
    </div>
  )
}
