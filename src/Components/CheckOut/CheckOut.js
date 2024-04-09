import React, { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import './CheckOut.css';

const CheckOut = () =>{    
   const location = useLocation();
   const cartProduct = (location.state[0])
   const quantity = (location.state[1])

//    this state is using to set the delivary cost 
   const [isInsideDhaka, setisInsideDhaka] = useState(false);

//    this condition is use to calculate total cost 
   let delivary = 0
   if(isInsideDhaka === true){
       delivary = 100;
   }
   const totalAmmount = (cartProduct.price * quantity) + delivary;

   const [formData, setFormData] = useState({
       name: '',
       phone: '',
       address: ''
   });

   const changeHandler = (event) =>{
    setFormData(()=>({
        ...formData,
        [event.target.name] : event.target.value
    }));
   }

   const handelSubmit = e =>{
    e.preventDefault();
   }

   //    this conditional funciton is to handel rendering to the success page
   const navigate = useNavigate();
   const clearLocalStorage = ()=>{
    const datas2 = Object.values(formData);

    if(datas2[0].length && datas2[1].length && datas2[2].length !== 0){        
        navigate('/successful');        
    }
   }
    return(
        <div className='checkout-container'>   
            <Row className='container m-auto'>
                <Col sm={8}><div className='checkout-box shadow container bg-white w-xs-100 py-5 mb-4'>
                    <div className='basic-info'>                    
                        <p><i className="bi bi-check-circle-fill me-3"></i>
                        "{cartProduct.name}", has been added to your cart.</p>
                    </div>
                    <h4>Shipping Information</h4>
                    <form onSubmit={handelSubmit}>
                        <div className='checkOut-form'>
                            <input type='text' placeholder='Your Name' name='name' className='checkOut-field' required onChange={changeHandler}/>
                            <input type='text' placeholder='Phone Number' name='phone' className='checkOut-field' required onChange={changeHandler}/> <br/>
                            
                        <div className='ms-5 mt-3 text-start'>
                            <strong>Select Location :</strong> <br/>
                            <label htmlFor='inside' className='me-2'>Inside Dhaka</label>
                            <input type='radio' name='location' value='inside Dhaka' className='me-5'
                                id='inside' onClick={()=>{setisInsideDhaka(false)}}/> 

                            <label htmlFor='outside' className='me-2'>Ourside Dhaka</label>
                            <input type='radio' name='location' value='outside Dhaka' className=''
                                id='outside' onClick={()=>{setisInsideDhaka(true)}} required/> <br/>
                        </div>                            
                            <input type='text' placeholder='Full Address' name='address' className='checkOut-field' required onChange={changeHandler}/> <br/>
                        </div>  

                            <input type="submit" value='Place Order' className='order-btn bg-black text-white fw-bold fs-4' onClick={()=>{clearLocalStorage()}}/>                        
                    </form>
                   
                </div>
                </Col>
                <Col sm={4} className='bg-black text-white pb-4 mb-4'>
                    <h4 className='mt-5'>Order Summery</h4>
                    <div className='mt-3'>
                        <div className='w-25 rounded mb-5 m-auto'>
                          <img src={cartProduct.img} alt='added-img' className='w-100'></img>
                          <h6>{cartProduct.name}</h6>
                        </div>

                        <table>  
                            <tbody>                          
                                <tr>
                                    <td>Product Cost (x {quantity})</td>                                    
                                    <td>{cartProduct.price * quantity} tk</td>
                                </tr>                                                        
                                <tr className='last-item'>
                                    <td>Delivary Cost</td>                                    
                                    <td>{isInsideDhaka ? '100 tk' : 'Free'}</td>
                                </tr>   
                                <tr>
                                    <td>Total Cost</td>                                    
                                    <td>{totalAmmount} tk</td>
                                </tr>
                            </tbody>                         
                        </table>                        
                    </div>
                </Col>
            </Row>
                
        </div>
    )
}

export default CheckOut;