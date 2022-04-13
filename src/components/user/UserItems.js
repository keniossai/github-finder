import React from 'react'
import PropTypes from 'prop-types';
import styled from 'styled-components'

 const UserItems = ({ user: {html_url, avatar_url, login} }) =>  {
    
    return (
        <div className='card text-center'>
            <Image src={avatar_url} alt="" className='round mt-2' style={{width: '60px'}} />
            <div>{login}</div>
            <div>
                <a href={html_url} className='btn btn-dark btn-sm my-1'>More</a>
            </div>
        </div>
    )
}

UserItems.propTypes ={
    user: PropTypes.object.isRequired
}

export default UserItems

const Image = styled.img`
    margin: auto;
    border-radius: 50px;
`