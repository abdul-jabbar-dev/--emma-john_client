import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';

const OrderView = () => {
    const { user } = useAuth()
    const [orders, setOrders] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/orders?email=${user.email}`,{
            headers:{
                'authorization':`Bearer ${localStorage.getItem('userIdToken')}`
            }
        })
            .then(res => res.json())
            .then(pros => setOrders(pros))

    }, [user])

    return (
        <div style={{ textAlign: 'center' }}>
            <h3>Your order {orders.length}</h3>
            <ul>
                {
                    orders.map(data=> <li>{data.name},{data.email}</li> )
                }
            </ul>
        </div>
    );
};

export default OrderView;