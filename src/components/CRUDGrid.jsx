import React, { Component } from "react";

export class CRUDGrid extends Component {
	constructor(props) {
		super(props); // contains the "type" for the DB
		this.state = {
			AutoNumber: "",
		};
	}
  async componentDidMount() {
    // Fetch info from DB
  }
  render () {
    return (
      <div>CRUDGrid</div>
    )
  }
}

export default CRUDGrid
