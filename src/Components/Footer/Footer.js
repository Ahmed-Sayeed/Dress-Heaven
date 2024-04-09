import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.PNG';
import './Footer.css';

const Footer = ()=>{
    return(
        <div className='bg-black py-5 text-white text-start'>
            <Row className='container mx-auto' xs={1} md={3} lg={3}>
                <Col className='contacts text-start px-5'>
                    <img src={logo} alt='logo of the site' className='w-50 md-w-75 mb-4'></img>   
                    <p><i className="bi bi-telephone-fill fs-4"></i> +8801867713470</p> 
                    <p><i className="bi bi-geo-alt-fill fs-4"></i> 10/10 Kamrangrichar, Dhaka.</p>
                    <p><i className="bi bi-send-fill fs-4"></i> dressheaven@gmail.comstyfit.com</p>                
                </Col>
                <Col>
                    <h4 className='my-4 pb-4'>Quick Links</h4>
                    <div className='quick-links-container'>
                        <Link to='/home' className='quick-link decoration-none'>Home</Link>
                        <Link to='/womens-colllection' className='quick-link decoration-none'>Women's_Collection</Link>
                        <Link to='/mens-collection' className='quick-link decoration-none'>Men's_Collection</Link>
                        <Link to='/summer-collection' className='quick-link decoration-none'>summer_collection</Link>
                    </div>
                </Col>
                <Col>                    
                    <div className='medias-container text-center text-md-start'>
                        <h4 className='my-4 pb-2'>Social Medias</h4>                    
                        <a href='https://www.facebook.com/profile.php?id=61550261577968' target="_blank" rel='noopener noreferrer'>
                            <i className="bi bi-facebook fs-2 me-3 text-primary"></i>
                        </a> 
                        <a href='https://www.tiktok.com/@dress.heaven1?_t=8jxfoAhSOfg&_r=1&fbclid=IwAR05zMY3swMT4D1Qc7bVpP1U0dYLdj7w8lSsQXisrkBbrCYGq-WLBySE57c' target='_blank' rel='noopener noreferrer'>
                            <i className="bi bi-tiktok fs-2 me-3 text-black fw-bold"></i>
                        </a>                        
                        <i className="bi bi-youtube fs-2 me-3 text-danger"></i>
                        <i className="bi bi-whatsapp fs-2 me-3 text-success"></i>                          
                    </div>
                </Col>

            </Row>
        </div>
    )
}

export default Footer;