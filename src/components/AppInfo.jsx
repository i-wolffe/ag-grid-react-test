import React, { Component } from "react";
import axios from 'axios';

import Form from "react-bootstrap/Form";

export class AppInfo extends Component {
	constructor(props) {
		super(props);
		this.state = {
      useLazyLoad : true,
			Validated: false,
      AreaData: this.props.cellAreas, // []
      SelectedArea: this.props.selectedArea,
      CellsData: [],
      AllCells: this.props.cellNames,
      SelectedName: this.props.selectedName,
		};
	}
	async componentDidMount() {
    // Set the passed group and area as well
    // So it does not dissapear on the re-render
    // when calling this back to block it
    // maybe pass a bool called isDisabled??????
    // OOOOOOOOOR wait for that action-lock
		this.setState({
      Mode: this.props.Mode,
		});
    if (this.state.AreaData.length === 0) {
      //Fetch from DB
      await axios.get("http://localhost:8800/cellAreas").then(response => {
        // console.log('-',response.data);
        this.setState({
            AreaData: response.data,
        });
        this.props.setCellAreas(response.data)
      }).then(async () => {
        if (this.state.useLazyLoad) {
          await axios.get("http://localhost:8800/allCells").then(response => {
            // console.log('-',response.data);
            this.setState({
              AllCells: response.data,
            });
            this.props.setCellNames(response.data)
          })
        }
      });
      console.log('Options Fetched')
    } else {
      // OptionsAlreadyFetched
      console.log('Already Fetched Areas -> ', this.state.AreaData.length)
    }
		// .then display on dropdown
	}
	ChangeArea = async (e) => {
    // console.log('ChangeArea',e)
    this.setState({
        SelectedArea: e.value
    });
    if (this.state.CellsData.length !== 0) {
      let ansList = []
      this.state.AllCells.map((cell) => {
        if (cell.Area === e.value) {
          ansList.push({ name: cell.Nombre})
        }
        return 0
      })
      this.setState({
        CellsData: ansList
      })
      this.props.setCellNames(ansList)
    } else { // Default operation mode
      // console.log('------ENTER CHANGE AREA',e.value,'-',this.state.SelectedCell,'-')
      await axios.get('http://localhost:8800/cellsOnArea?area=' + e.value).then(response => {
          // console.log('CELLSDATA->',response.data);    
          this.setState({
              CellsData: response.data,
          });
      });
    }
  }
	ChangeCell = async (e) => {
    // console.log('ChangeCell',e)
    this.setState({
      SelectedName: e.value
    })
    setTimeout(() => {
      if (this.state.SelectedArea !== ''){
        // console.log('CurrentState',this.state)
        console.log('Updated state properties')
        this.returnStates()
      }
    },500);
  }
  returnStates = () => {
    console.log('RETURNING.. Area... ',this.state.SelectedArea)
    this.props.setSelectedArea(this.state.SelectedArea)
    console.log('RETURNING.. Name... ',this.state.SelectedName)
    this.props.setSelectedName(this.state.SelectedName)
    console.log('Turn ON fetch for models...')
    this.props.canFetchModels(true)
  }
	render() {
		return (
			<div className="App-info">
				<div className="Info-container">
					<p className="Info-field">
						<strong>Area: </strong>
						<Form.Select aria-label="AreaSelect" placeholder="Area"
              onChange={(e) => this.ChangeArea(e.target)}
              defaultValue={this.state.SelectedArea}
              disabled={this.props.isLocked}
            >
							<option id='ph-area' value={null}>--</option>
              {
                this.state.AreaData.map((area,idx) => {
                  return <option key={`area-${idx}`} value={area.name}>{area.name}</option>
                })
              }
						</Form.Select>
						<strong>Grupo: </strong>
						<Form.Select aria-label="GroupSelect" placeholder="Grupo"
              onChange={(e) => this.ChangeCell(e.target)}
              defaultValue={this.state.SelectedCell}
              disabled={this.props.isLocked}
            >
							<option id='ph-cell' value={null}>--</option>
              {
                this.state.CellsData.map((cell,idx) => {
                  return <option key={`cell-${idx}`} value={cell.name}>{cell.name}</option>
                })
              }
						</Form.Select>
					</p>
				</div>
				<div className="Info-container">
					<p className="Info-field">
						<strong>Responsable: </strong>
						<span id="resName">
							<Form.Control type="text" placeholder="John Doe" />
						</span>
					</p>
					{/* <p className='Info-field'><strong>Supervisa: </strong><span id='superName'><Form.Control type="text" placeholder="Jane Doe" /></span></p> */}
				</div>
			</div>
		);
	}
}

export default AppInfo;
