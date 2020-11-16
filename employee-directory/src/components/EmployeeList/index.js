import React, { Component } from "react";
import API from "../../utils/API";

export default class EmployeeList extends Component {

    // When component mounts, get all the users from randomuser.me and assign to the state of EmployeeList
    componentDidMount() {
        API.getRandomUsers().then(users=>{
            console.log("Users:", users);

            // TODO: Set the state of this to have all users
            this.setState({
                users: users.data.results
            })
        })
    }

    render() {
        return (
            <div>

            </div>
        );
      }
}