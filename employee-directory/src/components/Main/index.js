import React, { Component } from "react";
import SearchBar from "../SearchBar";
import EmployeeList from "../EmployeeList";

export default class Main extends Component {

    UpdateSearch = (event) => {
        let searchTerm = event.target.value;

    }

    render(){
        return (
            <div className="main">
                <SearchBar UpdateSearch={this.UpdateSearch} />
                <EmployeeList />
            </div>
        );
    }
}
