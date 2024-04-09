import React from 'react';
import { Row } from 'react-bootstrap';
import mensWaresThumb from '../../images/mens-collections-thumb.PNG';
import Hook from '../Hook/Hook';
import ProductsCard from '../ProductsCard/ProductsCard';

const MensCollections = () =>{
    const mensCollections = Hook('localDataBase.json');
    const mensWares = mensCollections.filter(mensWare => mensWare.type === 'mens clothing');
    
    return(
        <div>
            <div className='banner-container mt-2 mt-lg-5'>
                <img src={mensWaresThumb} alt='mens wares thumb'></img>
            </div>            
                <Row xs={2} md={4} className="g-4 m-auto container mb-5">
                    {
                        mensWares.map(wares =>
                            <ProductsCard
                            key={wares.id}
                            wares={wares}>                                
                            </ProductsCard>
                            )
                    }
                </Row>            
        </div>
    )
}

export default MensCollections;