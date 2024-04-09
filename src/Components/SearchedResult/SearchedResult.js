import React from 'react';
import { Row } from 'react-bootstrap';
import ProductsCard from '../ProductsCard/ProductsCard';

const SearchResult = (props)=>{
    const matchedProducts = (props.searchedProducts);

    return(
        <div>
            <h2 className='my-4'>{matchedProducts.length ? "Your Search Results are here..." : "Sorry !!! Product is not available"}</h2>
            <Row xs={2} md={4} lg={4} className='container mx-auto'>
                {
                    matchedProducts.map(wares => 
                        <ProductsCard
                            wares={wares}
                            key={wares.id}
                        >
                        </ProductsCard>
                    )
                }
            </Row>
        </div>
    )
}

export default SearchResult;