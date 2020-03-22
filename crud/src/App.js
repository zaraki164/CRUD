import React, { useState, Fragment } from "react";
import EditUserForm from "./forms/EditUserForm";
import AddUserForm from "./forms/AddUserForm";
import UserTable from "./table/UserTable";

const App = () => {
    const usersData = [
        { id: 1, username: "da222", name: "sfsffsf" },
        { id: 2, username: "ss222", name: "sfsffsf" }
    ];
    const initialFormState = { id: null, username: "", name: "" };

    const [users, setUsers] = useState(usersData);
    const [currentUser, setCurrentUser] = useState(initialFormState);
    const [editing, setEditing] = useState(false);

    const addUser = user => {
        user.id = users.length + 1;
        setUsers([...users, user]);
    };
    const deleteUser = id => {
        setEditing(false);
        setUsers(users.filter(user => user.id !== id));
    };
    const updateUser = (id, updatedUser) => {
        setEditing(false);
        setUsers(users.map(user => (user.id === id ? updatedUser : user)));
    };
    const editRow = user => {
        setEditing(true);
        setCurrentUser({
            id: user.id,
            username: user.username,
            name: user.name
        });
    };

    return (
        <div className="container">
            <div className="flex-row">
                <div className="flex-large">
                    {editing ? (
                        <Fragment>
                            <EditUserForm
                                currentUser={currentUser}
                                updateUser={updateUser}
                                setEditing={setEditing}
                            ></EditUserForm>
                        </Fragment>
                    ) : (
                        <Fragment>
                            <AddUserForm addUser={addUser}></AddUserForm>
                        </Fragment>
                    )}
                </div>
                <div className="flex-large">
                    <UserTable
                        users={users}
                        editRow={editRow}
                        deleteUser={deleteUser}
                    ></UserTable>
                </div>
            </div>
        </div>
    );
};

export default App;
