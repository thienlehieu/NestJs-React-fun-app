import { Form, Button } from "react-bootstrap"
import { useState } from 'react';
import { useMutation } from "@apollo/client";
import { UPDATE_USER } from "../graphql/Mutations";

const EditForm = ({theEmployee}) =>{

    const _id = theEmployee._id;

    const [name, setName] = useState(theEmployee.name);
    const [email, setEmail] = useState(theEmployee.email);
    const [address, setAddress] = useState(theEmployee.address);
    const [phone, setPhone] = useState(theEmployee.phone);


    const updatedEmployee = {_id, name, email, address, phone};

    const [updateUser, {loading, error, data}] = useMutation(UPDATE_USER);

    const handleSubmit = (e) => {
        //e.preventDefault();
        //updateEmployee(id, updatedEmployee)
        updateUser({
            variables: updatedEmployee
        });
        if (error) console.log(error);
    }

     return (

        <Form onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="Name *"
                    name="name"
                    value={name}
                    onChange={(e)=> setName(e.target.value)}
                    required
                />
            </Form.Group>
            <Form.Group>
                <Form.Control
                    type="email"
                    placeholder="Email *"
                    name="email"
                    value={email}
                    onChange={(e)=> setEmail(e.target.value)}
                    required
                />
            </Form.Group>
            <Form.Group>
                <Form.Control
                    as="textarea"
                    placeholder="Address"
                    rows={3}
                    name="address"
                    value={address}
                    onChange={(e)=> setAddress(e.target.value)}
                />
            </Form.Group>
            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="Phone"
                    name="phone"
                    value={phone}
                    onChange={(e)=> setPhone(e.target.value)}
                />
            </Form.Group>
            <Button variant="success" type="submit" block>
                Edit Employee
            </Button>
        </Form>

     )
}

export default EditForm;