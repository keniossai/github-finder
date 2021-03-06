import React from 'react'
import UserItems from './UserItems'
import styled from 'styled-components'
import Spinner from '../layouts/Spinner'
import PropTypes from 'prop-types';

const Users = ({ users, loading }) => {

    if(loading){
        return <Spinner />
    }else{
        return (
            <UserCard>
                {users.map((user, index) => (
                    <UserItems key={index} user={user} />
                ))}
            </UserCard>
        )
    }
}

Users.propTypes = {
    users: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired
}

export default Users

const UserCard = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-gap: 1rem;
`
