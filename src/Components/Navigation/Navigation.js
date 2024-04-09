import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.PNG';
import Headroom from 'react-headroom';
import './Navigation.css';

const Navigation = ()=>{

    return(        
        <div className='d-block md-d-none sm-d-none'>                     
            <Headroom style={{height: '40px'}}>
                <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary p-1">
                <Container>
                    <Navbar.Brand href="/home" className='w-25'>
                        <img src={logo} alt='sites logo' className='w-50'></img>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto align-items-center">
                        <Nav.Link><Link to={{pathname: '/home'}} className='route text-decoration-none text-black fw-bold ms-4'>HOME</Link></Nav.Link>
                        <Nav.Link><Link to='/mens_collection' className='route text-decoration-none text-black fw-bold ms-4'>MEN</Link></Nav.Link>
                        <Nav.Link><Link to='/womens_collection' className='route text-decoration-none text-black fw-bold ms-4'>WOMEN</Link></Nav.Link>
                        <Nav.Link><Link to='/summer_collection' className='route text-decoration-none text-black fw-bold ms-4'>SUMMER COLLECTION</Link></Nav.Link>
                        <Nav.Link><Link to='/contact' className='route text-decoration-none text-black fw-bold ms-4'>CONTACT</Link></Nav.Link>
                        <div className='icons-container fs-4 ms-5'>                         
                            <i className="bi bi-heart"></i>                       
                            <i className="bi bi-person-circle ms-3"></i> 
                            <i className="bi bi-bag-check ms-3"></i> 
                            <span className="position-absolute top-10 start-90 translate-middle badge rounded-pill bg-black"> 0 </span>                                  
                        </div>   
                    </Nav>
                    </Navbar.Collapse>
                </Container>
                </Navbar>
            </Headroom>
        </div>
    )
}

export default Navigation;