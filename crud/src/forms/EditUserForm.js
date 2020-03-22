import React, { useState, useEffect } from "react";

const EditUserForm = props => {
    const [user, setUser] = useState(props.currentUser);

    const handleInputChange = event => {
        const { name, value } = event.target;
        setUser({ ...user, [name]: value });
    };

    useEffect(() => {
        setUser(props.currentUser);
    }, [props]);

    return (
        <form
            onSubmit={event => {
                event.preventDefault();
                if (!user.username || !user.name) return;

                props.updateUser(user.id, user);
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
            <button>Update</button>
            <button onClick={() => props.setEditing(false)}>Cancel</button>
        </form>
    );
};

export default EditUserForm;
