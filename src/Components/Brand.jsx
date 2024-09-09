import React from 'react';
import Amazon from "../assets/images/amazon.png";
import Flipkart from "../assets/images/flipkart.png";
import Shoe from "../assets/images/hero-image.png"; 

const Brand = () => {

  return (
    <div className='brand container'>
        <div className='brand-content'>
            <h1>YOUR FEET DESERVES THE BEST</h1>
            <p>YOUR FEET DESERVES THE BEST AND WE'RE HERE TO HELP YOU WITH OUR SHOES. ALL YOU NEED TO DO IS TO SHOP WITH US AND YOU WILL CERTAINLY GET THE BEST AT AFFORDABLE PRICES.</p>
        <div className='brand-btn'>
            <button>Shop Now</button>
            <button className='secondary-btn'>Category</button>
        </div>
        <div className='shopping'>
            <p>Also Available On</p>
            <div className='brand-icon'>
                <img src={Amazon} alt='amazon-icon' />
                <img src={Flipkart} alt='flipkart-icon' />
            </div>
        </div>    
        </div>
        <div className='brand-image'>
            <img src={Shoe} alt='shoe-image' />
        </div>
    </div>
  )
}

export default Brand