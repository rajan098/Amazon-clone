import React from 'react'
import "./Subtol.css"
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from './StateProvider';
import { getBasketTotal } from './reducer';
import { useHistory } from 'react-router-dom';

function Subtol() {
  const history=useHistory();
  const[{basket},dispatch]=useStateValue();
  return (
    <div className='subtol'>
        <CurrencyFormat
        renderText={(value)=>(
        <>
        <p>
        Subtotal({basket.length}items):<strong>{value}</strong>
        </p>
        <small className='subtol__gift'>
            <input type="checkbox"/>This item Contains a gift
            </small>
        </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"Rs."}
        />
        <button className='button11' onClick={e=>history.push('/payment')}>Proceed to Checkout</button>
    </div>
  )
}

export default Subtol