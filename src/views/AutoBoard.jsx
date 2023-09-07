import React, { Component } from 'react'

import Table from "react-bootstrap/Table";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';

import { FiSettings } from 'react-icons/fi'

export class AutoBoard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      AutoInfo: [],
      AutoData: [],
      TableHours: 8,
      TableShift: 1,
    }
  } 
  componentDidMount() {
    // Add query to DB
  }
  triggerScan(e) {
    // Write from Scanner on the selected input and then block it? REMEMBER Scanner ends with ENTER -> check ASCII
  }
  updateText(e){
    // Each keystroke perhaps? maybe unnecessary if it will have the scanner
  }
  async handleShiftSelection(e) {
    let elem = e.target
    let targetId = elem.getAttribute('id')
    console.log('Shift',targetId)
    if (targetId != null){
      this.setState({
        TableShift: parseInt(targetId)
      })
    }
  }
  async handleHourSelection(e) {
    // console.log('ENTER FORM CLICK')
    let elem = e.target
    let targetId = elem.getAttribute('id')
    console.log('Hour-group',targetId)
    this.setState({
      TableHours: parseInt(targetId)
    })
    if(parseInt(targetId) === 12) {
      document.getElementById('3').setAttribute('disabled',true)
    } else {
      document.getElementById('3').removeAttribute('disabled',false)
    }
  }
  render() {
    return (
      <div className="Content-container">
        <div className="Action-container">
          <span>
            Autoclave: 
            <Form.Select aria-label="Default select"  placeholder="Motivo">
              <option>Seleccionar</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </Form.Select>
          </span>
          <span>Ciclos: <Form.Control disabled type="text" placeholder="Ciclos" /></span>
          <span>Piezas/Ciclo (A): <Form.Control disabled type="text" placeholder="Pzas. A" /></span>
          <span>Piezas/Ciclo (B): <Form.Control disabled type="text" placeholder="Pzas. B" /></span>
          <span>Tripulación: <Form.Control disabled type="text" placeholder="N.Ops." /></span>
          <span>
            <Button variant="outline-danger Action-button" type="button" id="btn-clear">Vaciar</Button>
            <Button variant="outline-success Action-button" type="button" id="btn-export">Exportar</Button>
            <Dropdown>
              <Dropdown.Toggle variant="outline-dark Action-button" id="btn-config">
                <FiSettings />
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Form className='Config-form' onClick={(e) => this.handleHourSelection(e)}>
                  <h5>Horario</h5>
                  <Form.Check
                    type='radio'
                    id='8'
                    name='shift-opt'
                    label='8 Horas'
                    defaultChecked
                  />
                  <Form.Check
                    type='radio'
                    id='12'
                    name='shift-opt'
                    label='12 Horas'
                  />
                </Form>
                <Dropdown.Divider />
                <Form className='Config-form' onClick={(e) => this.handleShiftSelection(e)}>
                <h5>Turno</h5>
                  <Form.Check
                    type='radio'
                    id='1'
                    name='shift-hrs'
                    label='Turno 1'
                    defaultChecked
                  />
                  <Form.Check
                    type='radio'
                    id='2'
                    name='shift-hrs'
                    label='Turno 2'
                  />
                  <Form.Check
                    type='radio'
                    id='3'
                    name='shift-hrs'
                    label='Turno 3'
                  />
                </Form>
              </Dropdown.Menu>
            </Dropdown>
          </span>
        </div>
        <Table bordered hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>Horas</th>
              <th>Ciclos A</th>
              <th>Ciclos B</th>
              <th>Producción Real</th>
              <th>Acumulado</th>
              <th>Pzas Scrap</th>
              <th>Tiempo muerto</th>
              <th>Motivo</th>
              <th>Status</th>
              <th>Firma Supervisor</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>06:00 - 07:00</td>
              <td>1</td>
              <td>1</td>
              <td>1518</td>
              <td>1518</td>
              <td>0</td>
              <td>5</td>
              <td>
                <Form.Select aria-label="Default select" type="text" placeholder="Motivo">
                  <option>Selecciona una opción</option>
                  <option value="1">MF - Motivo Fuera</option>
                  <option value="2">MR - Mantenimiento Robot</option>
                  <option value="3">CM - Comedor</option>
                </Form.Select>
              </td>
              <td>OK?</td>
              <td><Form.Control className="Firm" type="text" placeholder="Firma" /></td>
            </tr>
            <tr>
              <td>2</td>
              <td>07:00 - 08:00</td>
              <td>1</td>
              <td>1</td>
              <td>1518</td>
              <td>3036</td>
              <td>0</td>
              <td>0</td>
              <td>
                <Form.Select aria-label="Default select" type="text" placeholder="Motivo">
                  <option>Selecciona una opción</option>
                  <option value="1">MF - Motivo Fuera</option>
                  <option value="2">MR - Mantenimiento Robot</option>
                  <option value="3">CM - Comedor</option>  
                </Form.Select>
              </td>
              <td>OK?</td>
              <td><Form.Control className="Firm" type="text" placeholder="Firma" /></td>
            </tr>
            <tr>
              <td>3</td>
              <td>08:00 - 09:00</td>
              <td>1</td>
              <td>0</td>
              <td>818</td>
              <td>3854</td>
              <td>0</td>
              <td>30</td>
              <td>
                <Form.Select aria-label="Default select" type="text" placeholder="Motivo">
                  <option>Selecciona una opción</option>
                  <option value="1">MF - Motivo Fuera</option>
                  <option value="2">MR - Mantenimiento Robot</option>
                  <option value="3">CM - Comedor</option>  
                </Form.Select>
              </td>
              <td>OK?</td>
              <td><Form.Control className="Firm" type="text" placeholder="Firma" /></td>
            </tr>
            <tr>
              <td>4</td>
              <td>09:00 - 10:00</td>
              <td>0</td>
              <td>1</td>
              <td>700</td>
              <td>4554</td>
              <td>0</td>
              <td>10</td>
              <td>
                <Form.Select aria-label="Default select" type="text" placeholder="Motivo">
                  <option>Selecciona una opción</option>
                  <option value="1">MF - Motivo Fuera</option>
                  <option value="2">MR - Mantenimiento Robot</option>
                  <option value="3">CM - Comedor</option>  
                </Form.Select>
              </td>
              <td>OK?</td>
              <td><Form.Control className="Firm" type="text" placeholder="Firma" /></td>
            </tr>
          </tbody>
        </Table>
      </div>
    );
  }
}

export default AutoBoard