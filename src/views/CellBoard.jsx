import React, { Component } from 'react'
import axios from 'axios';

import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';

import AppInfo from '../components/AppInfo';

import { FiSettings } from 'react-icons/fi';

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
      SelectedArea: '',
      SelectedName: '',
      SelectedModel: '',
      AvailableModels: [],
      CanFetchModels: false,
    }
  } 
  formatHours(time) {

  }
  genHours(shift,mode) {
    let startH = 0
    let startM = 0
    // mode -> 12
    if (parseInt(mode) === 12) {
      startH = parseInt(shift) === 1 ? 6 : 18
    } else {
      // mode -> 8
      const hours = [6,14,21]
      const mins = [0,0,1]
      startH = hours[shift-1]
      startM = mins[shift-1]
    }
    return []
  }
  genHours2(shift,mode) {
    let myHours2 = []
    if (parseInt(mode) === 12) {
      if (parseInt(shift) === 1) {
        myHours2 = [
          '6:00 - 7:00',
          '7:00 - 8:00',
          '8:00 - 9:00',
          '9:00 - 10:00',
          '10:00 - 11:00',
          '11:00 - 12:00',
          '12:00 - 13:00',
          '13:00 - 14:00',
          '14:00 - 15:00',
          '15:00 - 16:00',
          '16:00 - 17:00',
          '17:00 - 18:00',
        ]
      } else {
        myHours2 = [
          '18:00 - 19:00',
          '19:00 - 20:00',
          '20:00 - 21:00',
          '21:00 - 22:00',
          '22:00 - 23:00',
          '23:00 - 0:00',
          '0:00 - 1:00',
          '1:00 - 2:00',
          '2:00 - 3:00',
          '3:00 - 4:00',
          '4:00 - 5:00',
          '5:00 - 6:00',
        ]
      }
    } else {
      switch(parseInt(shift)) {
        case 1:
          myHours2 = [
            '6:00 - 7:00',
            '7:00 - 8:00',
            '8:00 - 9:00',
            '9:00 - 10:00',
            '10:00 - 11:00',
            '11:00 - 12:00',
            '12:00 - 13:00',
            '13:00 - 14:00'
          ]
          break
        case 2:
          myHours2 = [
            '14:00 - 15:00',
            '15:00 - 16:00',
            '16:00 - 17:00',
            '17:00 - 18:00',
            '18:00 - 19:00',
            '19:00 - 20:00',
            '20:00 - 21:00',
            '21:00 - 21:30',
          ]
          break
        case 3:
          myHours2 = [
            '21:30 - 22:00',
            '22:00 - 23:00',
            '23:00 - 0:00',
            '0:00 - 1:00',
            '1:00 - 2:00',
            '2:00 - 3:00',
            '3:00 - 4:00',
            '4:00 - 5:00',
            '5:00 - 6:00',
          ]
          break
        default:
          myHours2 = []
          break
      }
    }
    return myHours2
  }
  componentDidMount() {
    // Add query to DB  
    // if(this.props.selectedArea !== '' && this.props.selctedName !== '') {
    //   //Db call for models
    // } else {
    //   console.log('missing data')
    // }
  }
  componentDidUpdate() {
    // Verify state variable to see if the query has to be made
    console.log('UPDATED??',this.state)
    if (this.state.CanFetchModels) {
      this.setState({
        CanFetchModels: false
      })
      this.fetchModels()
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
  async fetchModels() {
    //verify info on the state -- done on caller
    // await axios -> work on endpoint
    await axios.get("http://localhost:8800/modelsByCell/?area=" + this.state.SelectedArea + '&name=' + this.state.SelectedName).then(response => {
      console.log('-',response.data);
      this.setState({
        AvailableModels: response.data,
      });
    });
    // list the models on the dropdown
  }
  async getProduction() {
    //verify info on the state -- done on caller
    // await axios -> work on endpoint
    await axios.get("http://localhost:8800/modelsByCell/?area=" + this.state.SelectedArea + '&name=' + this.state.SelectedName).then(response => {
      console.log('-',response.data);
      this.setState({
        AvailableModels: response.data,
      });
    });
    // list the models on the dropdown
  }
  async SelectModel(e) {
    this.setState({
      SelectedModel: e.value
    })
    this.getModelInfo(e.value)
  }
  getModelInfo(modelName) {
    // find the index of the model information
    let obj = {}
    this.state.AvailableModels.map((item,key) => {
      if (item.Nombre === modelName)
        obj =  item
      return 0
    })
    // console.log(obj) // yay <3
    // Load it into the respective fields
    document.getElementById('model-pzas').setAttribute('value',obj.Piezas)
    document.getElementById('model-nops').setAttribute('value',obj.Operadores)
    // read Table parameters
    // Modify table
  }
  modifyTableParams() {
    console.log('MOD TABLE PARAMS', this.state)
  }
  generateTable(dataList) {
    // reset table
    let tabWrapper = document.getElementById('Table-body-container')
    tabWrapper.innerHTML('')
    // fetch the correct configuration of 
    let hourArr = this.genHours2()
    // rebuild / build table
    dataList.map((data,index) => {
      return <tr>
        <td id={`id-${index+1}`} >1{index+1}</td>
        <td id={`hours-${index+1}`} >{hourArr[index]}</td>
        <td id={`model-${index+1}`} >{this.state.SelectedModel}</td>
        <td id={`pzas-${index+1}`} >{data.prodPzas}</td>
        <td id={`acum-${index+1}`} >{this.state.AcumPzas}</td>
        <td id={`deadt-${index+1}`} >{data.deadTime}</td>
        <td id={`reason-${index+1}`} >
          <Form.Select aria-label="Default select" type="text" placeholder="Motivo">
            <option>Selecciona una opción</option>
            <option value="1">MF - Motivo Fuera</option>
            <option value="2">MR - Mantenimiento Robot</option>
            <option value="3">CM - Comedor</option>
          </Form.Select>
        </td>
        <td id={`nok-${index+1}`} >OK?</td>
        <td id={`sign-${index+1}`} ><Form.Control className="Firm" type="text" placeholder="Firma" /></td>
      </tr>
      })
    console.log(hourArr)
  }
  render() {
    return (
      <div className="Content-container">
        {
          this.props.showInfo === '/cell'
          ? 
            <AppInfo Mode={this.props.showInfo} 
              selectedArea={this.state.SelectedArea}
              setSelectedArea={(val)=> this.setState({SelectedArea: val})}
              selectedName={this.state.SelectedName}
              setSelectedName={(val)=> this.setState({SelectedName: val})} 
              canFetchModels={(val)=> this.setState({CanFetchModels: val})} 
            />
          : null
        }
        <div className="Action-container">
          <span>
            Modelo:
            <Form.Select
              aria-label="Model-Select"
              placeholder="Modelo"
              onChange={(e) => this.SelectModel(e.target)}
            >
              <option value="">--</option>
              {
                this.state.AvailableModels.map((model,idx) => {
                  return <option key={`model-${idx}`} value={model.Nombre}>{model.Nombre}</option>
                })
              }
              {/* <option value="1">370952E</option>
              <option value="2">388898B</option>
              <option value="3">15-2F14</option> */}
            </Form.Select>
          </span>
          <span>Pzas x hora: <Form.Control disabled id="model-pzas"type="text" placeholder="Pzas." /></span>
          <span>Num. Operadores: <Form.Control disabled id="model-nops"type="text" placeholder="N.Ops." /></span>
          <span>
            <Button variant="outline-warning Action-button" type="button" id="btn-change">Cambiar</Button>
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
          <tbody id="Table-body-container">
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
