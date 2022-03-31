import React from 'react'
import { FaBars } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { Nav, 
    NavbarContainer, 
    NavLogo, 
    MobileIcon, 
    NavMenu, 
    NavItem, 
    NavLinks, 
    NavBtn, 
    NavBtnLink
 } from "./NavbarElemets";


const Navbar = ({ toggle }) => {
    return (
    <>
        <Nav>
            <NavbarContainer>

                <NavLogo className="logo" to="/">Smart Estate</NavLogo>
        

                <MobileIcon onClick={ toggle }>
                    <FaBars />
                </MobileIcon>
               
                <NavMenu> 
                <NavItem >
                       <div className="navitem"> 
                       <Link className="link" to="">Home</Link></div>
                    </NavItem>
                    <NavItem >
                       <div className="navitem"> 
                       <Link className="link" to="about">About</Link></div>
                    </NavItem>

                    <NavItem >
                       <div className="navitem"> 
                       <Link className="link" to="property">Property List</Link></div>
                    </NavItem>

                    <NavItem>
                    <div className="navitem">
                         <Link className="link" to="commercial">Commercial</Link></div>
                    </NavItem>
                    
                      <NavItem>
                      <div className="navitem">
                           
                        <Link className="link" to="residential">Residential</Link>
                        </div>
                    </NavItem>
             
            <NavBtn>
                <Link className="Btn" to='/RegisterProperty'> Register Property </Link>
            </NavBtn>

                </NavMenu>
            </NavbarContainer>
        </Nav>         
     </>
    )
};

export default Navbar;
