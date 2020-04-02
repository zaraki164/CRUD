import React, { useState } from "react";

const AddUserForm = props => {

    const initialFormState = { id: null, username: "", name: "" };

    const [user, setUser] = useState(initialFormState);

    const handleInputChange = event => {

        const { name, value } = event.target;
        setUser({ ...user, [name]: value });

    };

    return (
        <form
            onSubmit={event => {
                event.preventDefault();
                if (!user.username || !user.name) return;

                props.addUser(user);
                setUser(initialFormState);
            }}
        >
            <label>Username</label>
            <input
                type="text"
                name="username"
                value={user.username}
                onChange={handleInputChange}
            ></input>
            <label>name</label>
            <input
                type="text"
                name="name"
                value={user.name}
                onChange={handleInputChange}
            ></input>
            <button>Add</button>
        </form>
    );
};

export default AddUserForm;
