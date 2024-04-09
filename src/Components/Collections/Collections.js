import React from 'react';
import { Link } from 'react-router-dom';
import womensThumb from '../../images/womens-thumb.PNG';
import mensThumb from '../../images/mens-thumb.png';
import './Collections.css';

const Collections = ()=>{
    return(
        <div className='my-5'>            
            <h5 className="section-title shadow">Catagories</h5>
            <div className='my-5'>
                <Link to='/womens_collection' className='collection'>
                    <img src={womensThumb} alt='womens thumb'></img>
                </Link>

                <Link to='/mens_collection' className='collection men'>
                    <img src={mensThumb} alt='mens thumb'></img>
                </Link>
            </div>
        </div>
    )
}

export default Collections;