import React from 'react'
import "./Home.css";
import Product from "./Product.js";
import { ProductData } from "./ProductData.js";

function Home() {
    console.log(ProductData);

    const listItems = ProductData.map((item) =>
        
        <div className='produt__details' key={item.id}>
            {item.title}
            <p>
                <small>{item.currency}</small>
                <strong>{item.price}</strong>
            </p>
            <div id ='rating'>{Array(item.rating)
                    .fill()
                    .map((_, i) =>  (
                       <p>⭐</p> 
                    ))}</div>
                <img id='pic' src={item.image} />
            <div id='btn'>
                <button onClick='ADD_TO_BASKET'>Add To Basket</button>
            </div>
        </div>
    );

    console.log(listItems);

    return (
        <div className="home">
            <div className="home__container">
                    <img className="home__image" 
                    src="https://d2z1w4aiblvrwu.cloudfront.net/ad/75Jd/amazon-prime-customer-interviews-large-2.jpg"/>            
            <div className='product_list'>
                {listItems}
            </div>

            </div>
            
            
        </div>
    )
}

export default Home
