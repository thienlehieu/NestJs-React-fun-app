import { gql } from '@apollo/client';

export const LOAD_ALL_USERS = gql`
    query{
        getAllUsers{
        _id,
        name,
        email,
        address,
        phone
        }
    }
`