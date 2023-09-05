import React, { Component } from 'react'

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export class AutoBoard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      AutoInfo: [],
      AutoData: []
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
            <Button variant="outline-danger" type="button" id="btn-clear">Vaciar</Button>
            <Button variant="outline-success" type="button" id="btn-export">Exportar</Button>
          </span>
        </div>
        <table>
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
        </table>
      </div>
    );
  }
}

export default AutoBoard