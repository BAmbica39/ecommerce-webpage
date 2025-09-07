import React, { useEffect, useState } from 'react';
import api from '../api';

export default function Cart() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    api.get('/cart')
      .then(res => setCart(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h2>Your Cart</h2>
      <ul>
        {cart.map(c => (
          <li key={c.id}>{c.Item?.name} - {c.quantity}</li>
        ))}
      </ul>
    </div>
  );
}
