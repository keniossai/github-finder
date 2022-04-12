import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types';

class Navbar extends Component {
    static defaultProps = {
        title: 'Github Finder',
        icon: 'fab fa-github'
    }

    static propTypes = {
        title: PropTypes.string.isRequired,
        icon: PropTypes.string.isRequired
    }

  render() {
    return (
      <Nav className='navbar bg-info'>
        <div className="container">
            <h3><i className={this.props.icon}></i>{this.props.title}</h3>
        </div>
      </Nav>
    )
  }
}

export default Navbar

const Nav = styled.nav`
    
`

