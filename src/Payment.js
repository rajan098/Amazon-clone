
import React, { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom';
import Checkoutproduct from './Checkoutproduct';
import './Payment.css'
import { useStateValue } from './StateProvider';
import {  CardElement,useStripe, useElements,} from '@stripe/react-stripe-js';
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from './reducer';
import axios from 'axios';
import { db } from './firebase';


function Payment() {
    const[{basket,user},dispatch]=useStateValue();
    const history=useHistory();
    const stripe=useStripe();
    const elements=useElements();
    const [succeded,setSucceded]=useState(false);
    const [Processing,setProcessing]=useState("");

    const [error,SetError]=useState(null);
    const [disabled,setDisabled]=useState(true)
    const [clientSecret,setClientSecret]=useState(true)

useEffect(()=>{
    //genrate a spacial stripe secret which allow usto charge a customer
    const getClientSecret =async() =>{
        const response=await axios({
            method:'post',
            url:`payments/create?total=${getBasketTotal(basket)*100}`

        })
        setClientSecret(response.data.clientSecret)
    }
        getClientSecret();
},[basket])

console.log('the secret is',clientSecret)

    const handleSubmit= async (event)=>{
        //all fancy stripe stuff
        event.preventDefault();
        setProcessing(true);
        // const pyload=await stripe
        const payload=await stripe.confirmCardPayment(clientSecret,{
            payment_method:{
                card:elements.getElement(CardElement)
            }
        }).then(({paymentIntent})=>{
            //payment intent =payment confirmation
            db.cllection('users').doc(user?.uid).collection('orders').doc(paymentIntent.id)
            .set({
                basket:basket,
                amount:paymentIntent.amount,
                created:paymentIntent.created,
            })

            setSucceded(true);
            SetError(null)
            setProcessing(false)
            dispatch({
                type:'EMPTY_BASKET'
            })
            history.replace('/Orders')
        })
    }
    const handleChange = event =>{
        //listen for changes in the card elements
        //and display any error as the customer type there card details
        setDisabled(event.empty);
        SetError(event.error ? event.error.message: "");
        
    }


  return (
    <div className='pyment' id='payment1'>
        <div className="payment__container">
            <h1>
                checkout(
                <Link to="/checkout">{basket?.length}items
                </Link>)
            </h1>
            <div className="payment__sectoin">
               <div className="payment__title">
                   <h2>Delivery Addrss</h2>
                   </div> 
                   <div className="payment__address">
                       <p>{user?.email}</p>
                       <p>gothivali gaon 123,</p>
                       <p>gothivali gaon 123,</p>
                   </div>
            </div>

            <div className="payment__sectoin">
            <div className="payment__title">
                <h1>Review item and delivery</h1>
                </div>
                <div className="payment__item">
                    {basket.map(item=>(
                         <Checkoutproduct
                         id={item.id}
                         title={item.title}
                         image={item.image}
                         price={item.price}
                         rating={item.rating}
                         />
                     ) )}
                </div>
            </div>

            <div className="payment__sectoin">
            <div className="payment__title">
                <h2>Payment Method</h2>
            </div>
            <div className="payment__details">
                {/* strip magic */}
                <form onSubmit={handleSubmit}>
                    <CardElement onChange={handleChange}/>
                    <div className="priceContainer">
                        <CurrencyFormat
                        renderText={(value)=>(
                            <>
                            <h3>Order Total:{value}</h3>
                            </>
                        )}  
                        decimalScale={2}
                        value={getBasketTotal(basket)}
                        displayType={"text"}
                        thousandSeparator={true}
                        prefix={"Rs."}
                        />
                        <button disabled={Processing || disabled || succeded}>
                        <span>{Processing ? <p>Processing</p>:"Buy Now"}</span>
                        </button>
                        
                    </div>
                            {/* Error */}
                            {error && <div>{error}</div>}
                        
                </form>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Payment