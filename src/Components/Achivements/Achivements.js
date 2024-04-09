import React from 'react';
import { Col, Row } from 'react-bootstrap';
import CountUp from 'react-countup';
import './Achivements.css';

const Achivements = () =>{
    return(
        <>
            <h5 className='section-title shadow rounded'>Achivements</h5>
            <div className='achive-container mt-4'>
            <Row xs={1} md={3} lg={3} className='container achive-row mx-auto pt-2'>
                <Col className='pb-4'>
                    <div>
                    <i className="bi bi-cast fs-2"></i>
                    <h4>Media Activity</h4>
                    <h1><CountUp start={0} end={100} enableScrollSpy={true} suffix=' %'/> </h1>
                    </div>
                </Col>
                <Col className='pb-4'>
                    <div>
                    <i className="bi bi-truck fs-2"></i>
                    <h4>Job Completed</h4>
                    <h1><CountUp end={38} suffix=' k' enableScrollSpy={true}/> </h1>
                    </div>
                </Col>
            
                <Col className='pb-4'>
                    <div>
                    <i className="bi bi-person-hearts fs-2"></i>
                    <h4>Happy Clients</h4>
                    <h1><CountUp end={56} suffix=' k' enableScrollSpy={true}/> </h1>
                    </div>
                </Col>
            
            </Row>
        </div>
        </>
    )
}

export default Achivements;