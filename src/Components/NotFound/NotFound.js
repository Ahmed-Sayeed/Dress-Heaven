import React from 'react';
import { Link } from 'react-router-dom';
import thumb from '../../images/notFound.png';
import './NotFound.css';

const NotFound = ()=>{
    return(
        <div className='not-found-container pt-5'>
            <img src={thumb} alt='not found thumb'/>
            <h1>Opps !!! Page is not found...</h1>
            <Link to='/home'>
                <button className='back-to-home-btn my-5'>Go back to Home</button>
            </Link>
        </div>
    )
}

export default NotFound;