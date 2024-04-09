import React from 'react';
import { Link } from 'react-router-dom';
import './Success.css';

const Successful = () =>{
    return(
        <div className='success-container text-white'>
            <div className='text-container'>
                <i className="bi bi-check-circle-fill success-icon"></i> <br/>
                <h2 className=''>Order Place Successfylly</h2>
                <Link to='/summer_collection'>
                    <button className='continue-btn mt-5'>Continue Shopping</button>
                </Link>
            </div>
            
        </div>
    )
}

export default Successful;