import React from 'react';
import Hook from '../Hook/Hook';
import ProductsCard from '../ProductsCard/ProductsCard';
import { Row } from 'react-bootstrap';

const SummerCollections = () =>{
    const summerWares = Hook('localDataBase.json');
    return (
        <div>
            <Row xs={2} md={4} className="g-4 m-auto container my-5">
            {
                summerWares.map(wares => <ProductsCard
                    key={wares.id}
                    wares={wares}
                ></ProductsCard>)
            }
            </Row>
        </div>
    )
}

export default SummerCollections;