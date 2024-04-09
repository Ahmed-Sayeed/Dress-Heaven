import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import thumb1 from '../../images/cauro-2.jpg';
import thumb2 from '../../images/cauroPhotoroom.jpg';
import Collections from '../Collections/Collections';
import NewCollections from '../NewCollections/NewCollections';
import SearchResult from '../SearchedResult/SearchedResult';
import Hook from '../Hook/Hook';
import './Home.css';
import Achivements from '../Achivements/Achivements';

const Home = ()=>{
    // this start is for showing searched products 
    const [search, setSearch] = useState(false);
    const searcHander = ()=>{
        setSearch(true);
    }

    const [searchedProducts, setSearchedProducts] = useState([]);
    const allProducts = Hook('./localDataBase.json');

    const inputFieldHandler = e =>{
        const typedName = e.target.value;
        const matchedProduct = allProducts.filter(products => products.shortInfo.toLowerCase().includes(typedName.toLowerCase()));
        setSearchedProducts(matchedProduct);               
    }
    
    return(
        <div>
            <div className='bg-black mt-xs-0 mt-lg-5 p-1 pt-0'>
                <input type='search' placeholder='SEARCH FOR PRODUCT' 
                        className='search-field w-75 bg-black ps-4 text-white'
                        onChange={inputFieldHandler}/>
                <button onClick={()=>{searcHander()}} className='search-btn mt-2 mt-lg-0'>
                    <i className="bi bi-search fs-5 ms-2"></i>
                </button>
            </div>
            {   search ? <SearchResult
                            searchedProducts={searchedProducts}
                            key={searchedProducts.id}
                        ></SearchResult> :
                <div>
                    <Carousel data-bs-theme="dark" indicators={false}>
                        <Carousel.Item interval={2500}>
                            <img
                            className="d-block w-100"
                            src={thumb1}
                            alt="First slide"
                            />
                            <Carousel.Caption className='caption text-white'>
                                    <h1 className='caption-title mb-1 mb-md-2 mb-lg-4'>Show Your <br/> <span className='text-dark'> Outlook</span></h1>
                                    <i className='caption-subtitle d-none d-md-inline-block d-lg-inline-block ms-5 w-50'>" Be stronger than your excuse." "Perseverance is the hard work you do after you get tired of doing the hard work you already did.</i><br/>
                                <Link to='/summer_collection'>
                                    <button className='enroll-btn mt-md-2 mt-lg-5 py-2 py-lg-3 px-3 px-lg-5 fs-6'>Shop Now</button>
                                </Link>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item interval={2500}>
                        <img
                        className="d-block w-100"
                        src={thumb2}
                        alt="Second slide"
                        />
                    </Carousel.Item>                      
                </Carousel>

        {/*---------- here is the Collections section ---------- */}
                <Collections></Collections>

        {/*------------- here is the Achivements section -------- */}
                <Achivements></Achivements>

        {/* --------Here is the New Collections section ---------*/}
                <NewCollections></NewCollections>
        </div>
            }
        </div>
    )
}

export default Home;