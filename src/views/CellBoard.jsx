import React, { Component } from 'react'
import Form from 'react-bootstrap/Form';

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
      SelectedCell: '',
      SelectedArea: '',
      AreaData: [],
      CellsData: [],
      CellInfo: []
    }
  } 
  render() {
    return (
      <div className="Content-container">
        <div className="Action-container">
          <span>
            Modelo:
            <Form.Select aria-label="Default select"  placeholder="Motivo">
              <option>Seleccionar modelo</option>
              <option value="1"><span>370952E</span></option>
              <option value="2">388898B</option>
              <option value="3">15-2F14</option>
            </Form.Select>
          </span>
          <span>Pzas x hora: <Form.Control disabled type="text" placeholder="Pzas." /></span>
          <span>Num. Operadores: <Form.Control disabled type="text" placeholder="N.Ops." /></span>
          <span>
            <button className="Action-button" type="button" id="btn-clear">Vaciar</button>
            <button className="Action-button" type="button" id="btn-export">Exportar</button>
          </span>
        </div>
        <table>
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
        </table>
      </div>
    );
  }
}

export default CellBoard
