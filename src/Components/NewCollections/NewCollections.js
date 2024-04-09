import React from 'react';
import { Link } from 'react-router-dom';
import newCollectionThumb from '../../images/newCollection-thumb.PNG';
import './NewCollection.css';

const NewCollections = () =>{
    return(
        <div className='new-collection py-5 py-lg-0'>    
        <div className='new-collection-container container py-4'>
            <div className='new-collection-box'>
                <div className='bg-black text-white p-2 py-md-5'>
                    <h2>New season</h2>
                    <h1>New Collections</h1>
                </div>
                <Link to='/summer_collection'>
                    <button className='new-collection-btn mt-4'>SHOP NOW</button>
                </Link>                
            </div>
            <div className='new-thumb-container'>
                <img src={newCollectionThumb} alt='new-collection-thumb' className='img-fluid w-100'></img>
            </div>
        </div>        
        </div>
    )
}

export default NewCollections;