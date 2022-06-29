import React from 'react';
import './Home.css';

import Product from './Product';



function Home(){
  return (
    <div className='home'>
        <div className="home__container">
          <div className="posters">
            <img  className='home__image' src="https://m.media-amazon.com/images/I/91OXOR85PxL._SX3000_.jpg" alt=''/>
            <img  className='home__image' src="https://m.media-amazon.com/images/I/71zBGVPtAKL._SX3000_.jpg" alt=''/>
            </div>
            <div className="home__row">
            <Product
            id="11"
            title="the smart washing machine"
            price={20000}
            image="https://m.media-amazon.com/images/I/7144KdCjAyL._AC_SR360,240_QL70_.jpg" 
            rating={3}
            />
            
            <Product
            id="12"
            title="Samsung Galaxy M32 "
            price={16999}
            image="https://m.media-amazon.com/images/I/71F4jU7MRUS._SX342_.jpg" 
            rating={4}
            />
            
            
              </div>
              <div className="home__row">
              <Product
              id="13"
            title="ASIAN Oxygen-01 Running Shoes for Boys"
            price={1098}
            image="https://m.media-amazon.com/images/I/61z3crSHT0L._UY675_.jpg" 
            rating={4}
            />
            
            <Product
            id="14"
            title="Mi Power Bank 3i 20000mAh "
            price={16999}
            image="https://images-eu.ssl-images-amazon.com/images/I/31grUs8OpvL._AC_SR400,600_.jpg" 
            rating={4}
            />
            
            <Product
            id="15"
            title="Oppo Enco Buds True Wireless Earbuds(TWS) with Mic"
            price={999}
            image="https://m.media-amazon.com/images/I/619oMs9SLyL._SX466_.jpg" 
            rating={5}
            />
            
               
                </div>
              <div className="home__row">
              <Product
              id="16"
            title="MI Super Bass Bluetooth Wireless On Ear Headphones with Mic (Black and Red)"
            price={1799}
            image="https://m.media-amazon.com/images/I/71s9FMKzr+L._SX466_.jpg" 
            rating={3}
            />
                
                </div>
            
            </div>
    </div>
  )
  
}

  
  export default Home