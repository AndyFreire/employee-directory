import React, { Component } from "react";
import API from "../../utils/API";
import Employees from "../Employees";

function EmployeeList({ users }) {

    return (
        <div>
            <Employees users={users} />
        </div>
    );
}

export default EmployeeList;