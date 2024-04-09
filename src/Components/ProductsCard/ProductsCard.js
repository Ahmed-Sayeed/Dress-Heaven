import React from 'react';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './ProductsCard.css';

const WomensWare = prompt =>{
    const {name, img, id} = prompt.wares
    return(
        <div>
        <Col className='mb-2'>
          <Link to={`summer_collection/${id}`} className='text-decoration-none'>
            <div className='card p-3'>
                <img src={img} alt='product' className='w-100'></img>
                <h5 className='mt-2'>{name}</h5>
            </div>
          </Link>
        </Col>
        </div>
    )
}

export default WomensWare;