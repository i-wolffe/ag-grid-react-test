import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Form from "react-bootstrap/Form";

import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import AutoclaveForm from '../components/forms/AutoclaveForm';
import CellForm from '../components/forms/CellForm';

import axios from 'axios';
import CellRegisters from '../components/tables/CellRegisters';


export const Register = (props) => {
  const { type,method,id } = useParams() // register/(cell/auto)/(add/edit)
  const [isReset,setIsReset] = useState(["none",false])
  const [CellAreas,setCellAreas] = useState(props.cellAreas)
  const [CellNames,setCellNames] = useState(props.cellNames)
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
  let postCell = async (e,method,data) => {

  }
  let resetFields = () => {
    // When tab changes, 
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
          <div className="Half-content d-flex">
            <h4>Modelo de Celda</h4>
            <CellForm 
              props={props} method={method} id={id} 
              reset={isReset} 
              CellAreas={CellAreas}
              CellNames={CellNames}
            />
          </div>
          <div className="Half-content">
            <h4>Delete</h4>
            <CellRegisters />
          </div>
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
