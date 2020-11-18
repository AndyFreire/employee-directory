import React from "react";
import "./style.css";

function Employees({ users }) {

    if (users[0] !== undefined && users[0].name !== undefined) {
        return (
            users.map(user => {
                const name = user.name;
                const profilePic = user.picture.medium;
                const email = user.email;

                return (
                    <div className="user-cell">
                        <tbody className="w-100">
                        <tr>
                            <td data-th="Image" className="align-middle profile-image">
                                <img src={profilePic} className="img-responsive" />
                            </td>
                            <td data-th="Name" className="name-cell align-middle">
                                {name.first} {name.last}
                            </td>
                            <td data-th="Email" className="align-middle">
                                {email}
                            </td>
                        </tr>
                    </tbody>

                    </div>
                );
            })
        );
    } else {
        return (
            <div>
                No employees found!
            </div>
        )
    }
}

export default Employees;