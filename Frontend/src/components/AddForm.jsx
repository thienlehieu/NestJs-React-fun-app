import { Form, Button } from "react-bootstrap"
import { useState } from 'react';
import { useMutation } from "@apollo/client";
import { CREATE_USER } from "../graphql/Mutations";

const AddForm = () =>{

    const [newEmployee, setNewEmployee] = useState({
        name:"", email:"", phone:"", address:""
    });

    const onInputChange = (e) => {
        setNewEmployee({...newEmployee,[e.target.name]: e.target.value})
    }

    const {name, email, phone, address} = newEmployee;

    const [createUser, {loading, error, data}] = useMutation(CREATE_USER);

    const handleSubmit = (e) => {
        //e.preventDefault();
        createUser({
            variables: {
                name: name,
                email: email,
                address: address,
                phone: phone
            }
        });
        if (error) console.log(error);
    }

     return (

        <Form onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="name *"
                    name="name"
                    value={name}
                    onChange = { (e) => onInputChange(e)}
                    required
                />
            </Form.Group>
            <Form.Group>
                <Form.Control
                    type="email"
                    placeholder="Email *"
                    name="email"
                    value={email}
                    onChange = { (e) => onInputChange(e)}
                    required
                />
            </Form.Group>
            <Form.Group>
                <Form.Control
                    as="textarea"
                    placeholder="address"
                    rows={3}
                    name="address"
                    value={address}
                    onChange = { (e) => onInputChange(e)}
                />
            </Form.Group>
            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="phone"
                    name="phone"
                    value={phone}
                    onChange = { (e) => onInputChange(e)}
                />
            </Form.Group>
            <Button variant="success" type="submit" block>
                Add Employee
            </Button>
        </Form>

     )
}

export default AddForm;