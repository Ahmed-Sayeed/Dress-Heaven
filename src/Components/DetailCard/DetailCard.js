import React, {useState} from 'react';
import { Col, Row } from 'react-bootstrap';
import { useParams, useNavigate } from 'react-router-dom';
import Hook from '../Hook/Hook';
import './DetailCard.css';

const DetailCard = () =>{
    // finding the product that is clicked 
    const {productsId} = useParams();
    const allProducts = Hook('../../localDataBase.json');
    const clickedProduct = allProducts.find(product => product.id == productsId);       

    // setting the quantity of selected product 
    const [quantity, setQuantity] = useState(1)
    const quantityHandler = (e) =>{
        setQuantity(e.target.value);        
    }

    const navigate = useNavigate();
    const data = [clickedProduct, quantity]
    const addToCardHandler = () =>{
        navigate('/checkOut', { state: data});        
    }

    const allSize = [38, 40, 42, 44];
    const [select, setSelect] = useState();
    return(
        <div>
            <Row xs={1} md={2} lg={2} className='container my-5 text-start'>
                <Col>
                    <div className='image-container ms-5'>
                        <img src={`../.${clickedProduct?.img}`} alt='clicked product img' className='w-75'></img>
                    </div>
                </Col>
                <Col>
                    <div className='price-container pb-4'>
                        <h4>{clickedProduct?.name}</h4>
                        <h5 className='old-price'>{clickedProduct?.oldPrice} (TK)</h5>
                        <h4>{clickedProduct?.price} (TK)</h4>
                    </div>
                    <div className='description-container my-3'>
                        <strong>{clickedProduct?.shortInfo}</strong> <br/>
                        <strong>{clickedProduct?.description}</strong>
                    </div>
                    <div className='size-container my-4'>
                        <h5>SIZE</h5>
                        {allSize.map(size =>{                            
                            return(
                                <button onClick={()=> setSelect(size)}
                                className={select === size ? "size-style active" : "size-style"}>{size}</button>
                            )
                        })}
                    </div>
                    <div className='cart-container mt-5'>
                        <input type='number' min='1' name='quantity' placeholder='1' onChange={quantityHandler}/>                                                 
                            <button className='add-to-cart-btn py-2 px-5 ms-5' onClick={()=>addToCardHandler()}>
                            <i className="bi bi-cart3 me-2 fw-bold"></i>Add To Cart</button>                         
                    </div>                
                </Col>
            </Row>
                

        </div>
    )
}

export default DetailCard;