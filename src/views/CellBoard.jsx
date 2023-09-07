import React, { Component } from 'react'

import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import Dropdown from 'react-bootstrap/Dropdown';

import { FiSettings } from 'react-icons/fi'

export class CellBoard extends Component {
  buildTable = () => {
    return (
      <tr>
        <td></td>
        <td></td>
        <td>HERE</td>
        <td>GOES</td>
        <td>THE</td>
        <td>FETCH</td>
        <td>LOGIC</td>
        <td></td>
        <td></td>
      </tr>
    )
  }
  constructor(props) {
    super(props)
    this.state = {
      CellInfo: [],
      CellData: []
    }
  } 
  componentDidMount() {
    // Add query to DB
    console.log('PROPOS: ',this.props)
    if(this.props.selectedArea !== '' && this.props.selctedName !== '') {
      //Db call for models
    } else {
      console.log('missing data')
    }
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
            Modelo:
            <Form.Select aria-label="Default select"  placeholder="Modelo">
              <option>Seleccionar modelo</option>
              <option value="1">370952E</option>
              <option value="2">388898B</option>
              <option value="3">15-2F14</option>
            </Form.Select>
          </span>
          <span>Pzas x hora: <Form.Control disabled type="text" placeholder="Pzas." /></span>
          <span>Num. Operadores: <Form.Control disabled type="text" placeholder="N.Ops." /></span>
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
              <th>Modelo</th>
              <th>Producción Real</th>
              <th>Acumulado</th>
              <th>Tiempo muerto</th>
              <th>Motivo</th>
              <th>Status</th>
              <th>Firma Supervisor</th>
            </tr>
          </thead>
          <tbody>
            {
              this.buildTable()
            }
            <tr>
              <td>1</td>
              <td>06:00 - 07:00</td>
              <td>370952E</td>
              <td>40</td>
              <td>40</td>
              <td>20</td>
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
              <td>370952E</td>
              <td>30</td>
              <td>70</td>
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
              <td>3</td>
              <td>08:00 - 09:00</td>
              <td>370952E</td>
              <td>60</td>
              <td>130</td>
              <td>00</td>
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
              <td>370952E</td>
              <td>50</td>
              <td>180</td>
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

export default CellBoard
