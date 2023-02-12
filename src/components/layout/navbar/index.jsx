import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import { User, Briefcase, Feather, Smile, GitHub } from 'react-feather'

import {NavbarElement, NavbarList, NavbarLogo} from './style'

const Navbar = ({ siteTitle }) => (
  <nav>
    <div className="container">
      <NavbarElement>
          <NavbarLogo>
            <h3>
              <Link to="/">
                
	<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="align-middle"><polyline points="4 17 10 11 4 5"></polyline><line x1="12" y1="19" x2="20" y2="19"></line></svg><span className="align-middle"> {siteTitle} </span>
              </Link>
            </h3>
          </NavbarLogo> 
          <div className="main-navigation">
            <NavbarList>
              <li><Link to="/" className="lined-link" activeClassName="active"> <User /> <span> About </span> </Link></li> 
              <li><Link to="/repositories" className="lined-link" activeClassName="active"> <GitHub /> <span> Github </span> </Link></li>  
              <li><Link to="/works" className="lined-link" activeClassName="active"> <Briefcase /> <span> Portfolio </span> </Link></li>  
              <li><Link to="https://nikhil-xb.github.io" className="lined-link" activeClassName="active"> <Feather /> <span> Blog </span> </Link></li>
            </NavbarList>
          </div>
      </NavbarElement>
    </div>
  </nav>
)

Navbar.propTypes = {
  siteTitle: PropTypes.string,
}

Navbar.defaultProps = {
  siteTitle: ``,
}

export default Navbar
