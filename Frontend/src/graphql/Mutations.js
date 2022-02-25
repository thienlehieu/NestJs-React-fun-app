import { gql } from '@apollo/client';

const CREATE_USER = gql`
    mutation createUser(
        $name: String!
        $email: String!
        $address: String
        $phone: String
    ){
        createUser(
        createUserData: {
            name: $name
            email: $email
            address: $address
            phone: $phone
        }
        ){
            _id
        }
    }
`
const DELETE_USER = gql`
    mutation deleteUser($_id: String!
        ){
        deleteUser(
            deleteUserData: {
                _id: $_id
            }
        ){
            _id
        }
    }
`
const UPDATE_USER = gql`
    mutation updateUser(
        $_id: String!
        $name: String
        $email: String
        $address: String
        $phone: String
        ){
        updateUser(
            updateUserData: {
                _id: $_id
                name: $name
                email: $email
                address: $address
                phone: $phone
            }
        ){
            _id
        }
    }
`
export {CREATE_USER, DELETE_USER, UPDATE_USER}