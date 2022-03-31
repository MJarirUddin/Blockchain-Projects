import React from 'react'
import {
    SidebarContainer,
    Icon,
    CloseIcon,
    SidebarWrapper,
    SidebarMenu,
    SidebarLink,
} from "./SidebarElements";
import { Link } from 'react-router-dom';

const Sidebar = ({ toggle, isOpen }) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>

            <Icon onClick={toggle}>

                <CloseIcon />

            </Icon>

            <SidebarWrapper>
                <SidebarMenu>


                    <SidebarLink to='Home' onClick={toggle}>
                        <Link className='link' to="/">Home</Link>
                    </SidebarLink>

                    <SidebarLink to='about' onClick={toggle}>
                        <Link className='link' to="about">About</Link>
                    </SidebarLink>


                    <SidebarLink to='property' onClick={toggle}>
                        <Link className='link' to="property">Property List</Link>
                    </SidebarLink>

                    <SidebarLink to='commercial' onClick={toggle}>
                        <Link className='link' to="commercial">Commercial</Link>
                    </SidebarLink>

                    <SidebarLink to='residential' onClick={toggle}>
                        <Link className='link' to="residential">Residential</Link>
                    </SidebarLink>

                    <SidebarLink to='RegisterProperty ' onClick={toggle}>
                        <Link className='Btn' to='/RegisterProperty'> Register Property </Link>
                    </SidebarLink>


                </SidebarMenu>
            </SidebarWrapper>
        </SidebarContainer>
    );
};

export default Sidebar;
