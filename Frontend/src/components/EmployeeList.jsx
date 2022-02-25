import { Modal, Button, Alert} from 'react-bootstrap';
import {useEffect, useState } from 'react';
import Employee from './Employee';
import AddForm from './AddForm';
import Pagination from './Pagination';
import { useQuery } from '@apollo/client';
import { LOAD_ALL_USERS } from '../graphql/Queries';

const EmployeeList = () => {
    
    const  {loading, error, data} = useQuery(LOAD_ALL_USERS);
    const [allEmployees, setEmployees] = useState([])

    if (error) console.log(error)

    useEffect(() => {
        if (data) {
            console.log("get users data was called");
            setEmployees(data.getAllUsers);
        }
    }, [data]);

    const [show, setShow] = useState(false);
    
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    const [currentPage, setCurrentPage] = useState(1);
    const [employeesPerPage] = useState(10)


    const indexOfLastEmployee = currentPage * employeesPerPage;
    const indexOfFirstEmployee = indexOfLastEmployee - employeesPerPage;
    const currentEmployees = allEmployees.slice(indexOfFirstEmployee, indexOfLastEmployee);
    const totalPagesNum = Math.ceil(allEmployees.length / employeesPerPage);


    return (
        <>
        <div className="table-title">
            <div className="row">
                <div className="col-sm-6">
                    <h2>Employee Information</h2>
                </div>
                <div className="col-sm-6">
                    <Button onClick={handleShow} className="btn btn-success" data-toggle="modal"><i className="material-icons">&#xE147;</i> <span>Сreate New Employee</span></Button>					
                </div>
            </div>
        </div>

        <table className="table table-striped table-hover">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Address</th>
                    <th>Phone</th>
                    <th>Edit</th>
                </tr>
            </thead>
            <tbody>
                {
                currentEmployees.map(employee => (
                    <tr key={employee._id}>
                        <Employee employee={employee} />
                    </tr>
                ))  
                }              
            </tbody>
        </table>

        <Pagination pages = {totalPagesNum}
                    setCurrentPage={setCurrentPage}
                    currentEmployees ={currentEmployees}
                    allEmployees = {allEmployees} />

        <Modal show={show} onHide={handleClose} backdrop="static">
            <Modal.Header closeButton>
                <Modal.Title>
                    Employee Information
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <AddForm />
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

export default EmployeeList;