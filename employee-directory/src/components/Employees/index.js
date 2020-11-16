import React from "react";

function Employees({ users }) {

    if (users[0] !== undefined && users[0].name !== undefined) {
        return (
            users.map(user => {
                const name = user.name;
                const profilePic = user.picture.medium;
                const email = user.email;

                return (
                    <tbody>
                        <tr>
                            <td data-th="Image" className="align-middle">
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