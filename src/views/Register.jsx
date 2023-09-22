import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { unstable_usePrompt as Prompt } from "react-router-dom";

import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Button from 'react-bootstrap/Button';

import { GrAdd } from 'react-icons/gr';
import { FiRefreshCcw } from 'react-icons/fi';
import { AiOutlineCloseSquare } from 'react-icons/ai';


import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import AutoclaveForm from '../components/forms/AutoclaveForm';
import CellForm from '../components/forms/CellForm';

import axios from 'axios';
import CellRegisters from '../components/tables/CellRegisters';


export const Register = (props, {navigation}) => {
  const { type,method,id } = useParams() // register/(cell/auto)/(add/edit)
  const [isReset,setIsReset] = useState(["none",false])
  const [StateMethod,setStateMethod] = useState(method)
  const [CellAreas,setCellAreas] = useState(props.cellAreas)
  const [CellNames,setCellNames] = useState(props.cellNames)
  const [ActionData,setActionData] = useState({})
  const [LoadedData,setLoadedData] = useState(true)
  
  let queryAreas = async () => {
    console.info('Fetching Areas')
    await axios.get("http://localhost:8800/cellAreas").then(response => {
      props.setCellAreas(response.data)
      setCellAreas(response.data)
    })
  }
  let queryCells = async () => {
    console.info('Fetching Cells')
    await axios.get("http://localhost:8800/allCells").then(response => {
        props.setCellNames(response.data)
        setCellNames(response.data)
      })
  }
  let handleTabChange = (ev) => {
    let target = ev.target
    let obj = target.getAttribute('data-rr-ui-event-key') // Given name on the DOM to the Key
    setIsReset([obj,true])
  }
  // console.log(props.cellAreas)
  // console.log(props.cellNames)
  // Prepare Queries in case the props are empty
  if (props.cellAreas.length === 0) {
    // If this is the first place the user entered
    queryAreas()
  } else {
    console.log('Areas already fetched',CellAreas)
  }
  if (props.cellNames.length === 0) {
    // If this is the first place the user entered
    queryCells()
  } else {
    console.log('Cells already fetched')
  }
  let resetData = () => {
    setStateMethod('Agregar')
    setActionData({
      area :  "", 
      cell :"",
      name :"",
      ops: "",
      pzas:""
    })
  }
  return (
    <div className="Tab-container">
      {/* Crud conectado a una base de datos para 
      AGREGAR NUEVOS MODELOS, sus datos y sus Celdas activas */}
      <Tabs
      defaultActiveKey={type || 'cell'}
      id="register-tab-options"
      className="mb-3"
      onClick={(e) => handleTabChange(e)}
    >
      <Tab eventKey="cell" title="Celda">
        <div className="d-flex-r">
          <div className="Half-content-l">
            <div className="Half-title d-flex-r">
            <Button variant="outline-primary"
              type="button" id="btn-reload"
            >
              <FiRefreshCcw />
            </Button>
            <h4>Modelos de Celdas</h4>
            <Button variant="outline-success"
              type="button" id={`add-cell`}
              onClick={(e) => resetData()}
            >
              <GrAdd />
            </Button>
            </div>
            <CellRegisters
              props={props}
              method={method}
              setStateMethod={(val) => setStateMethod(val)}
              setActionData={(value) => setActionData(value)}
              setLoadedData={(val) => setLoadedData(val)}
            />
          </div>
          {
            (StateMethod) ?
              <div className="Half-content-s d-flex">
                <div 
                  className={`Half-title d-flex background-form-${StateMethod} background-header`}
                  style={{ width: '100%' }}
                >
                <div className="d-flex-r"
                  style={{ justifyContent: 'flex-end', width: '100%' }}
                >
                  <span
                    id='close-form'
                    variant='outline-secondary'
                    className='d-flex close-form'
                    onClick={() => setStateMethod(null)}
                    >
                    <AiOutlineCloseSquare />
                  </span>
                </div>
                  <h4>{StateMethod} Modelo</h4>
                </div>
                <CellForm 
                  props={props} id={id} 
                  reset={isReset} 
                  CellAreas={CellAreas}
                  CellNames={CellNames}
                  ActionData={ActionData}
                  StateMethod={StateMethod}
                  LoadedData={LoadedData}
                />
              </div>
            : null
          }
        </div>
      </Tab>
{/* *************************************************** */}
      <Tab eventKey="auto" title="Autoclave">
      <div className="d-flex-r">
          <div className="Half-content d-flex">
            <h4>Agregar Autoclave</h4>
            <AutoclaveForm props={props} method={method} id={id} reset={isReset}/>
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
