import React, { useState, useEffect } from 'react'
import CartCard from '../components/CartCard'
import { useAuth } from '../contexts/AuthContext';
import OrderCard from '../components/OrderCard';

const Order = () => {

    const [orders, setOrders] = useState([]);

    const { token } = useAuth();

    const getOrders = async()=>{

        const response = await fetch('/api/v1/orders/getOrders',{
            method: "GET",
            headers:{
                "Authorization": `${token}`
            }
        })

        const res = await response.json();

        setOrders(res.data);
    }

    useEffect(()=>{
        getOrders();
    },[])

  return (
    <>
    <div className="bg-white w-full min-h-[80vh] flex flex-wrap gap-8 justify-evenly">
              
              {orders.map(item=>(
        <OrderCard
        key={item.id}
        props={item}
        />
    ))}
              
    </div>
    </>
  )
}

export default Order