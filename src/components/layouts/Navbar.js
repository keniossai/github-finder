import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types';

const Navbar = ({icon, title}) => {
    

return (
    <Nav className='navbar bg-info'>
        <div className="container">
            <h3><i className={icon}></i>{title}</h3>
        </div>
    </Nav>
    )
}

Navbar.defaultProps = {
    title: 'Github Finder',
    icon: 'fab fa-github'
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
}

export default Navbar

const Nav = styled.nav`
    
`

