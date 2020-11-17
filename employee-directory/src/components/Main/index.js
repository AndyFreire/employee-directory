import React, { Component } from "react";
import SearchBar from "../SearchBar";
import EmployeeList from "../EmployeeList";
import API from "../../utils/API";

export default class Main extends Component {

    state = {
        users: [{}],
        order: "descend"
      }

    UpdateSearch = event => {
        const searchTerm = event.target.value;
        console.log(searchTerm)

        const allUsers = this.state.users;

        const newUsers = allUsers.filter(user => {

          let values = Object.values(user).join("").toLowerCase();
          console.log(values);

          return values.indexOf(searchTerm.toLowerCase()) !== -1;
        });
        console.log(newUsers);
        this.setState({ users: newUsers });
      }

      componentDidMount() {
        API.getRandomUsers().then(results => {
          this.setState({
            users: results.data.results,
            order: 'descend'
          });
        });
      }

    render(){
        return (
            <div className="main">
                <SearchBar UpdateSearch={this.UpdateSearch} />
                <EmployeeList users={this.state.users}/>
            </div>
        );
    }
}
