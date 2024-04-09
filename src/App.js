import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import Navigation from './Components/Navigation/Navigation';
import Contact from './Components/ContactUs/Contact';
import NotFound from './Components/NotFound/NotFound';
import Footer from './Components/Footer/Footer';
import WomensCollection from './Components/WomensCollection/Womens_Collection';
import MensCollections from './Components/MensCollections/MensCollections';
import SummerCollections from './Components/SummerCollections/SummerCollections';
import DetailCard from './Components/DetailCard/DetailCard';
import CheckOut from './Components/CheckOut/CheckOut';
import Successful from './Components/SuccessfulCompo/Successful';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation></Navigation>
        <Routes>
          <Route exact path='/' element={<Home />}></Route>
          <Route path='/home' element={<Home />}></Route>
          <Route path='/womens_collection' element={<WomensCollection />}></Route>
          <Route path='/mens_collection' element={<MensCollections />}></Route>
          <Route path='/summer_collection' element={<SummerCollections />}></Route>
          <Route path='/checkOut' element={<CheckOut />}></Route>
          <Route exact path='/home/summer_collection/:productsId' element={<DetailCard />}></Route>
          <Route exact path='/mens_collection/summer_collection/:productsId' element={<DetailCard />}></Route>
          <Route exact path='/womens_collection/summer_collection/:productsId' element={<DetailCard />}></Route>
          <Route exact path='/summer_collection/summer_collection/:productsId' element={<DetailCard />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
          <Route path='/successful' element={<Successful />}></Route>        
          <Route path='*' element={<NotFound />}></Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
