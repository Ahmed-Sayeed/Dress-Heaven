import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './Contact.css';

const Contact = ()=>{
    return(
        <div className='contact-container mt-5'>
            <div className='common-thumb'>
                <div className='text-white'>
                    <h1>Contact With Us</h1>
                    <h5>To get more spacific & clear information please contact us...</h5>
                </div>                
            </div>   
            <div className='container my-5'>
                <Row sm={1} md={3} lg={3} className='g-4'>
                    <Col className='border rounded py-5 my-2 my-lg-5 d-flex'>
                       <div> <i className="bi bi-headset orange-color d-block fs-1 mx-3"></i></div>
                        <div className=' text-start'>
                            <h5 className='orange-color'>CALL US 24/7</h5>
                            <h4>+8801867713470</h4>
                        </div>
                    </Col>
                    <Col className='border rounded py-5 my-2 my-lg-5 d-flex'>
                        <i className="bi bi-envelope-paper orange-color d-block fs-1 mx-3"></i>                        
                        <div className=' text-start'>
                            <h5 className='orange-color'>MAKE A QUOTE</h5>
                            <h4>dressheaven@gmail.com</h4>
                        </div>
                    </Col>
                    <Col className='border rounded py-5 my-2 my-lg-5 d-flex'>
                        <i className="bi bi-map orange-color d-block fs-1 mx-3"></i>                        
                        <div className=' text-start'>
                            <h5 className='orange-color'>SWRVICE STATION</h5>
                            <h4>10/10 Kamrangrichar, Dhaka.</h4>
                        </div>
                    </Col>
                </Row>                
            </div>         
           
           {/* this section is for form  */}
           <div className=' container'>
               <Row lg={2} md={2} sm={1} className='my-5 form'>
                   <Col className=' bg-dark text-white p-4'>
                        <div className='packages-container my-4'>
                            <h6>GET IN TOUCH</h6>
                            <h3>MORE <strong className='orange-color'>OFFERS</strong></h3>
                        </div>
                        <div className='d-flex mx-auto text-center gap-2 gap-md-4'>
                            <div className='cource-card pt-2 px-3 px-md-4 p-lg-4 rounded'>
                                <h5 className='cource-duration mb-0'>Get up to discount</h5>
                                <h2 className='cource-price orange-color'>10%</h2>
                            </div>
                            <div className='cource-card pt-2 px-3 px-md-4 p-lg-4 rounded'>
                                <h5 className='cource-duration mb-0'>Delivary charge</h5>
                                <h2 className='cource-price orange-color'>FREE</h2>
                            </div>
                            <div className='cource-card pt-2 px-3 px-md-4 p-lg-4 rounded'>
                                <h5 className='cource-duration mb-0'>Payment method</h5>
                                <h4 className='cource-price orange-color'>Cash On delivary</h4>
                            </div>                            
                        </div>
                   </Col>
                   <Col className='form-container p-5'>
                        <div className='mb-4'>
                            <h6 className='fw-bolder'>GET IN TOUCH</h6>
                            <h3>DROP YOUR <strong className='text-white'>ADDRESS</strong></h3>
                        </div>
                        <form>
                            <input type='text' placeholder='Name' className='form-field py-2 w-75'></input> <br/>
                            <input type='text' placeholder='Mobile' className='form-field py-2 w-75'></input> <br/>
                            <input type='mail' placeholder='E-Mail' className='form-field py-2 w-75'></input> <br/>
                            <input type='text' placeholder='Address' className='form-field py-2 w-75'></input> <br/>
                            <button className='enroll-btn bg-dark mt-4 px-4 py-2'>SEND</button>
                        </form>
                   </Col>
               </Row>
           </div>
        </div>
    )
}

export default Contact;