import React, { useEffect, useState } from 'react';
import api from '../api';

export default function ItemList() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    api.get('/items')
      .then(res => setItems(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h2>Items</h2>
      <ul>
        {items.map(item => (
          <li key={item.id}>
            {item.name} - ${item.price}
          </li>
        ))}
      </ul>
    </div>
  );
}
