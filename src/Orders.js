import React, { useEffect, useState } from 'react'
import { db } from './firebase';
import Order from './Order';
import  './Orders.css'
import { useStateValue } from './StateProvider';

function Orders() {
    const[{basket,user},dispatch]=useStateValue();
    const [orders,setorders]=useState([]);
    
    useEffect(()=>{
            if(user){
            db.collection('users')
            .doc(user?.uid)
            .collection('created','desc')
            .onSnapshot(onSnapshot=>{
                setorders(onSnapshot.docs.map(doc=>({
                    id:doc.id,
                    data:doc.data()
                })))
            })
        }else{
            setorders([])
        }
        },[user])
  return (
    <div className='orders'>
        <h1>your orders</h1>
        <div className="orders_order">
            {orders.map(orders=>(
                <Order orders={orders}/>
            ))}
        </div>
    </div>
  )
}

export default Orders