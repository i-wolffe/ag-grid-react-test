import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import AutoclaveForm from '../components/forms/AutoclaveForm';
import CellForm from '../components/forms/CellForm';

export const Register = (props) => {
  const { type,method,id } = useParams() // register/(cell/auto)/(add/edit)
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
            <CellForm props={props} method={method} id={id}/>
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
