import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {addUserAction} from "../../redux/actions";

function AddUserPage() {
    const dispatch = useDispatch()

    const [form, setForm] = useState({
        name: "",
        email: ""
    })
    const changeInput = (event) => {
        setForm({
            ...form,
            [event.target.name]: event.target.value
        })
    }

    const registerUser = () => {
        dispatch(addUserAction(form))
    }

    return (
        <div>
            <h1>Register user</h1>
            <input
                type="text"
                placeholder="name"
                name="name"
                onChange={changeInput}
            />
            <input
                type="text"
                placeholder="email"
                name="email"
                onChange={changeInput}
            />

            <button onClick={registerUser}>register</button>
        </div>
    );
}

export default AddUserPage;