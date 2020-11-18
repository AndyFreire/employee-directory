import React, { Component } from "react";
import SearchBar from "../SearchBar";
import EmployeeList from "../EmployeeList";
import API from "../../utils/API";

export default class Main extends Component {

  state = {
    users: [{}],
    newUsers: [{}],
    order: "descending"
  }

  UpdateSearch = event => {
    const searchTerm = event.target.value;
    console.log(searchTerm)

    const allUsers = this.state.users;

    const newUsers = allUsers.filter(user => {

      // format the users for searchingg
      let formattedUsers = Object.values(user).join("").toLowerCase();
      console.log(formattedUsers);

      return formattedUsers.indexOf(searchTerm.toLowerCase()) !== -1;
    });
    console.log(newUsers);
    this.setState({ newUsers: newUsers });
  }

  componentDidMount() {
    API.getRandomUsers().then(results => {

      const allUsers = results.data.results;

      this.setState({
        users: allUsers,
        order: 'descending',
        newUsers: allUsers
      });
    });
  }

  render() {
    return (
      <div className="main">
        <SearchBar UpdateSearch={this.UpdateSearch} />
        <EmployeeList users={this.state.newUsers} />
      </div>
    );
  }
}
