import React, { Component } from 'react';
import { AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import OptionsRenderer from './OptionsRenderer';

export class CellRegisters extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Data: [],
      columnDefs: [
        // { field: 'idModelo' },
        { field: 'area' , filter: 'agTextColumnFilter', sort: 'desc', unSortIcon: true },
        { field: 'cell' , filter: 'agTextColumnFilter' },
        { field: 'name', filter: true },
        { field: 'options', cellRenderer: OptionsRenderer }
        // { field: 'pzas' },
        // { field: 'ops' },
      ],
      defaultColDef: {
        flex: 1,
        minWidth: 50,
        maxWidth: 150,
        menuTabs: ['filterMenuTab'],
      },
      context: { componentParent: this },
      rowData: null,
    }
  }
  parentSetAction(action,index) {
    console.log('SETTING: ->',action,index)
    console.log(this.state.Data[parseInt(index)])
    this.props.setData({action: action, data: this.state.Data[parseInt(index)]})
  }
  processData(dataArr) {
    dataArr.forEach((element,index) => {
      element['options'] = `${index}`
    });
    return dataArr
  }
  onGridReady = (params) => {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;

    const updateData = (data) => params.api.setRowData(data);
    if (this.state.Data.length === 0) {
      fetch('http://localhost:8800/get/modelos')
        .then((resp) => resp.json())
        .then((data) => {
          let processed = this.processData(data)
          this.setState({
            Data: processed
          })
          updateData(processed)
        });
    } else {
      updateData(this.state.Data)
    }
  };
  render = () => {
    return (
      <div className="table-container">
          <div
            style={{
              height: '90%',
              width: '100%',
            }}
            className="ag-theme-alpine"
          >
            <AgGridReact
              columnDefs={this.state.columnDefs}
              context={this.state.context}
              defaultColDef={this.state.defaultColDef}
              onGridReady={this.onGridReady}
              rowData={this.state.rowData}
            />
          </div>
        </div>
    )
  }
}

export default CellRegisters