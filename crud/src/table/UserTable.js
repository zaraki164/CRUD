import React from "react";

const UserTable = props => {
    return (
        <table>
            <thead>
                <th>Username</th>
                <th>Name</th>
                <th>Action</th>
            </thead>
            <tbody>
                {props.users.length > 0 ? (
                    props.users.map(user => (
                        <tr id={user.id}>
                            <td>{user.username}</td>
                            <td>{user.name}</td>
                            <td>
                                <button onClick={() => props.editRow(user)}>
                                    Edit
                                </button>
                                <button
                                    onClick={() => props.deleteUser(user.id)}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))
                ) : (
                    <tr>
                        <td colSpan={3}>No Record</td>
                    </tr>
                )}
            </tbody>
        </table>
    );
};

export default UserTable;
