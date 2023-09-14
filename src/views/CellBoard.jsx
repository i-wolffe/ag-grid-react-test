import React, { Component } from 'react'
import axios from 'axios';

import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';

import AppInfo from '../components/AppInfo';

import { FiSettings,FiRefreshCcw,FiLock,FiUnlock } from 'react-icons/fi';
import { PiArrowsInLineVerticalLight, PiSplitVerticalLight } from 'react-icons/pi';
import { RxDividerHorizontal } from 'react-icons/rx';
import { TbFileExport } from 'react-icons/tb';

export class CellBoard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      SelectedArea: '',
      SelectedName: '',
      SelectedModel: '',
      useLazyLoad: false,
      ModelInfo: null,
      AvailableModels: [],
      ListTimeReasons: [],
      CanFetchModels: false,
      TableHours: 12,
      TableShift: 1,
      ActiveTarget: 1,
      isLocked: false,
      ShiftHours: [],
    }
  } 
  formatHours(time) {

  }
  genHours2(shift,mode) {
    let myHours2 = []
    if (parseInt(mode) === 12) {
      if (parseInt(shift) === 1) {
        myHours2 = [
          ['6:00','7:00','split'],
          ['7:00','8:00','split'],
          ['8:00','9:00','split'],
          ['9:00','10:00','split'],
          ['10:00','11:00','split'],
          ['11:00','12:00','split'],
          ['12:00','13:00','split'],
          ['13:00','14:00','split'],
          ['14:00','15:00','split'],
          ['15:00','16:00','split'],
          ['16:00','17:00','split'],
          ['17:00','18:00','split'],
        ]
      } else {
        myHours2 = [
          ['18:00','19:00','split'],
          ['19:00','20:00','split'],
          ['20:00','21:00','split'],
          ['21:00','22:00','split'],
          ['22:00','23:00','split'],
          ['23:00','0:00','split'],
          ['0:00','1:00','split'],
          ['1:00','2:00','split'],
          ['2:00','3:00','split'],
          ['3:00','4:00','split'],
          ['4:00','5:00','split'],
          ['5:00','6:00','split'],
        ]
      }
    } else {
      switch(parseInt(shift)) {
        case 1:
          myHours2 = [
            ['6:00','7:00','split'],
            ['7:00','8:00','split'],
            ['8:00','9:00','split'],
            ['9:00','10:00','split'],
            ['10:00','11:00','split'],
            ['11:00','12:00','split'],
            ['12:00','13:00','split'],
            ['13:00','14:00','split'],
          ]
          break
        case 2:
          myHours2 = [
            ['14:00','15:00','split'],
            ['15:00','16:00','split'],
            ['16:00','17:00','split'],
            ['17:00','18:00','split'],
            ['18:00','19:00','split'],
            ['19:00','20:00','split'],
            ['20:00','21:00','split'],
            ['21:00','21:30','split'],
          ]
          break
        case 3:
          myHours2 = [
            ['21:30','22:00','split'],
            ['22:00','23:00','split'],
            ['23:00','0:00','split'],
            ['0:00','1:00','split'],
            ['1:00','2:00','split'],
            ['2:00','3:00','split'],
            ['3:00','4:00','split'],
            ['4:00','5:00','split'],
            ['5:00','6:00','split'],
          ]
          break
        default:
          myHours2 = []
          break
      }
    }
    return myHours2
  }
  async componentDidMount() {

    // only executes on firstRender
    if (this.state.ListTimeReasons.length === 0) {
      await axios.get("http://localhost:8800/listMotivos").then(response => {
      this.setState({
        ListTimeReasons: response.data,
      });
    });
    console.log('Motivos loaded from DB')
    // if (false) { // Condition to toggle lazy load usage
      // get ALL areas and ALL cells
      // Filter data
      // Turn on LAZY FLAG
    } else {
      console.log('Motivos existed')
    }
    // Add query to DB  
    // if(this.props.selectedArea !== '' && this.props.selctedName !== '') {
    //   //Db call for models
    // } else {
    //   console.log('missing data')
    // }
  }
  componentDidUpdate() {
    // Verify state variable to see if the query has to be made
    if (this.state.CanFetchModels) {
      console.log('FETCHING MODELS for -> ',this.state.SelectedName)
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
      // this.setState({
      //   TableShift: parseInt(targetId)
      // })
      this.generateTable([0,parseInt(targetId)])
    }
  }
  async handleHourSelection(e) {
    // console.log('ENTER FORM CLICK')
    let elem = e.target
    let targetId = elem.getAttribute('id')
    console.log('Hour-group',targetId)
    // this.setState({
    //   TableHours: parseInt(targetId)
    // })
    this.generateTable([parseInt(targetId),0])
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
        SelectedModel: ''
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
    this.generateTable([this.state.TableHours,this.state.TableShift])
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
    this.setState({
      ModelInfo: obj
    })
    // read Table parameters
    // Modify table
  }
  modifyTableParams() {
    console.log('MOD TABLE PARAMS', this.state)
  }
  generateTable (modifications=[0,0]) { // modifications[hour,shift]
    // console.log('Building table -> ',modifications)
    let returnObj = []
    let myHours = []
    if (modifications[0] !== 0 || modifications[1] !== 0) {
      // modify hour/shift to remake the table
      let prevShift = modifications[1] === 0? this.state.TableShift : modifications[1]
      let prevHours = modifications[0] === 0? this.state.TableHours : modifications[0]
      myHours = this.genHours2(prevShift,prevHours)
      this.setState({
        ShiftHours: myHours,
        TableHours: prevHours,
        TableShift: prevShift
      })
      // console.log('from function -> ',prevHours,prevShift)
    } else {
      myHours = this.state.ShiftHours
      // console.log('from state -> ',this.state.TableHours,this.state.TableShift)
    }
    myHours.forEach((hour,index) => {
      returnObj.push(<tr key={`row-${index+1 }`} id={`row-${index+1 }`}>
        <td id={`id-${index+1}`} >
          <div className="id-container d-flex">
            <span>{index+1}</span>
            {
              hour[2] === 'split'
              ?
                <Button
                  id={`split-cell-${index+1}`}
                  variant='secondary'
                  onClick={(e) => this.splitCell(e,`split-cell-${index+1}`,`row-${index+1}`,hour,index)}
                >
                  <PiSplitVerticalLight />
                </Button>
              : hour[2] === 'join'
                ?
                  <Button
                    id={`join-cell-${index+1}`}
                    variant='dark'
                    onClick={(e) => this.joinCell(e,`join-cell-${index+1}`,`row-${index+1}`,hour,index)}
                  >
                    <PiArrowsInLineVerticalLight />
                  </Button>
                : 
                  <Button
                    variant='secondary'
                    disabled
                  >
                    <RxDividerHorizontal />
                  </Button>
            }
          </div>
        </td>
        <td id={`hours-${index+1}`} >{hour[0]}-{hour[1]}</td>
        <td id={`model-${index+1}`} >{this.state.SelectedModel}</td>
        <td id={`pzas-${index+1}`} ></td>
        <td id={`acum-${index+1}`} ></td>
        <td id={`deadt-${index+1}`} ></td>
        <td id={`reason-${index+1}`} >
          <Form.Select aria-label="Default select" 
            type="text" placeholder="Motivo"
            id={`reason-selector-${index+1}`}
          >
            <option value={null}>Selecciona una opción</option>
            {
              this.state.ListTimeReasons.map((reason,idx) => {
                return <option key={`opt-${idx+1}-${index+1}`} value={idx+1}>{reason.abv} - {reason.name}</option>
              })
            }
          </Form.Select>
        </td>
        <td id={`nok-${index+1}`} ></td>
        <td id={`sign-${index+1}`} ><Form.Control className="Firm" type="text" placeholder="Firma" /></td>
      </tr>)
    });
    return returnObj
  }

  splitCell(e,self,parent,hour,index){
    e.preventDefault()
    console.log('split ->',index)
    let elem = document.getElementById(parent)
    console.log('->',parent,elem)
    elem.focus()
    elem.style.setProperty('background-color', '#00ff00')
    elem.setAttribute('selected',true)
    // console.log('brfore--',this.state.ShiftHours)
    let wholeHour = hour[0].split(':')[0]
    let halfLowRange = [`${hour[0]}`,`${wholeHour}:30`,'']
    let halfHighRange = [`${wholeHour}:30`,`${hour[1]}`,'join']
    let myHours = this.state.ShiftHours
    myHours[index] = halfLowRange
    myHours.splice(index+1,0,halfHighRange)
    // console.log('arrfter--',myHours)
    this.setState({
      ShiftHours: myHours,
      isLocked: true
    })
  }
  joinCell(e,self,parent,hour,index) {
    e.preventDefault()
    console.log('join ->',index)
    // console.log('antes join--',hour,index,this.state.ShiftHours)
    let wholeHour = hour[0].split(':')[0]
    let newHour = [`${wholeHour}:00`,`${hour[1]}`,'split']
    let myHours = this.state.ShiftHours
    myHours[index-1] = newHour
    myHours.splice(index,1)
    // console.log('despues join --',myHours)
    this.setState({
      ShiftHours: myHours
    })
  }
  lockTable(e) {
    e.preventDefault()
    let prev = this.state.isLocked
    this.setState({
      isLocked: !prev
    })
    console.warn(!prev)
  }
  fillTable(dataList) {
    // reset table
    let tabWrapper = document.getElementById('Table-body-container')
    tabWrapper.innerHTML('')
    // fetch the correct configuration of 
    let hourArr = this.state.ShiftHours
    // Target cell to set information
    //
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
              isLocked={this.state.isLocked}
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
              disabled={this.state.isLocked}
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
            <Button 
              variant={`${this.state.isLocked ? "" : "outline-"}danger Action-button`}
              type="button" id="btn-lock"
              onClick={(e) => this.lockTable(e)}
              disabled={this.state.SelectedModel !== '' ? false : true}
            >
              { this.state.isLocked ? <FiLock /> : <FiUnlock /> }
            </Button>
            <Button variant="outline-primary Action-button"
              type="button" id="btn-reload"
              disabled={!(this.state.isLocked)}
            >
              <FiRefreshCcw />
            </Button>
            <Button variant="outline-success Action-button"
              type="button" id="btn-export"
              disabled={!(this.state.isLocked)}
            >
              <TbFileExport/>
            </Button>
            <Dropdown>
              <Dropdown.Toggle variant="outline-dark Action-button" id="btn-config" disabled={this.state.isLocked}>
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
                  />
                  <Form.Check
                    type='radio'
                    id='12'
                    name='shift-opt'
                    label='12 Horas'
                    defaultChecked
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
        <Table bordered hover striped>
          <thead>
            <tr>
              <th>ID</th>
              <th>Horas</th>
              <th>Modelo</th>
              <th>Producción Real</th>
              <th>Acumulado</th>
              <th>Tiempo muerto</th>
              <th>Motivo</th>
              <th>Scrap</th>
              <th>Firma Supervisor</th>
            </tr>
          </thead>
          <tbody id="Table-body-container">
            {
              this.generateTable().map((item) => {
                return item
              })
            }
            {/* <tr>
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
            </tr> */}
          </tbody>
        </Table>
      </div>
    );
  }
}

export default CellBoard
