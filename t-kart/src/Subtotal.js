import React from 'react'
import "./subtotal.css"
// import CurrencyFormat from "npm install react-format-currency";
// import CurrencyFormat from 'react-currency-format';
import { useStateValue } from './StateProvider';
import { getBasketTotal } from './reducer';
import NumberFormat from 'react-number-format';


function Subtotal() {
    const [{basket} , dispatch] = useStateValue();
    return (
        <div className="subtotal">
           <NumberFormat
               renderText={(value) => (
                   <>
                   <p>
                       Subtotal({basket.length} items):
                       <strong>{value}</strong>
                   </p>
                   <small className="subtotal__gift">
                       <input type="checkbox" /> This order contains Gift
                   </small>
                   </>
               )
        }
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"₹"}
        />
        <button>Procced to Checkout</button>

        </div>
    )
}

export default Subtotal
