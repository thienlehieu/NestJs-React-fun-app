import { useState, useEffect } from 'react';
import { Modal, Button, OverlayTrigger, Tooltip } from 'react-bootstrap';
import EditForm from './EditForm'
import { useMutation } from '@apollo/client';
import { DELETE_USER } from '../graphql/Mutations';

const Employee = ({employee}) => {

    const [deleteUser, {loading, error, data}] = useMutation(DELETE_USER);

    const handleDelete = (e) => {
        if (window.confirm("Confirm to delete user!")){
            deleteUser({
                variables: {
                    _id: employee._id
                }
            });
            window.location.reload(false);
            if (data) handleClose();
        }
    }

    const [show, setShow] = useState(false);
    
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    return (
        <>
            <td>{employee.name}</td>
            <td>{employee.email}</td>
            <td>{employee.address}</td>
            <td>{employee.phone}</td>
            <td>
                <OverlayTrigger
                    overlay={
                        <Tooltip id={`tooltip-top`}>
                            Edit
                        </Tooltip>
                    }>
                    <button onClick={handleShow}  className="btn text-warning btn-act" data-toggle="modal"><i className="material-icons">&#xE254;</i></button>
                </OverlayTrigger>
                <OverlayTrigger
                    overlay={
                        <Tooltip id={`tooltip-top`}>
                            Delete
                        </Tooltip>
                    }>
                    <button onClick={handleDelete}  className="btn text-danger btn-act" data-toggle="modal"><i className="material-icons">&#xE872;</i></button>
                </OverlayTrigger>
            </td>

        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>
                    Edit Employee
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <EditForm theEmployee={employee} />
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Cancel
                </Button>
            </Modal.Footer>
        </Modal>
        </>
    )
}

export default Employee;