import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{}}>
     <h2 className='title-name'>Bill Wilke</h2>
      <div className='nav-button-container'>
          <Link 
            to='/home/'
            className='nav-button'
            activeClassName='nav-button-active'
            style={{textDecoration: 'none'}}>
            Home
          </Link>
          <Link
            to='/contact/'
            className='nav-button'
            activeClassName='nav-button-active'
            style={{textDecoration: 'none'}}>
            Contact
          </Link>
          <Link 
            to='/blog'
            className='nav-button'
            activeClassName='nav-button-active'
            style={{textDecoration: 'none'}}>
            Blog
          </Link>
          <Link 
            to='/projects'
            className='nav-button'
            activeClassName='nav-button-active'
            style={{textDecoration: 'none'}}>
            Projects
          </Link>
        </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
