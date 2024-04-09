import React from 'react';
import { Row } from 'react-bootstrap';
import Hook from '../Hook/Hook';
import womensBanner from '../../images/womens-banner.png';
import './Women.css';
import ProductsCard from '../ProductsCard/ProductsCard';

const WomensCollection = () =>{
    const womensWares = Hook('./localDataBase.json');
    const allClothing = womensWares.filter(womensWare => womensWare.type === 'womens clothing');
    return(
        <>
            <div className='banner-container mt-0 mt-lg-4'>
                <img src={womensBanner} alt='banner'></img>
            </div>

            <Row xs={2} md={4} className="g-4 m-auto container mb-5">
            {
                    allClothing.map(clothings =>
                        <ProductsCard
                        wares={clothings}
                        key={clothings.id}>
                        </ProductsCard>
                    )
                }
            </Row>
                
            
        </>
    )
}

export default WomensCollection;