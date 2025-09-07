import React from "react";
import products from "../data/products";
import { useCart } from "../context/CartContext";
import "../styles/items-page.css";

export default function ItemsPage() {
  const { addToCart } = useCart();

  return (
    <div className="items-page">
      <h2 className="items-title">Our Products</h2>
      <div className="items-grid">
        {products.map((item, index) => (
          <div key={item.id} className="item-card" style={{ animationDelay: `${index * 0.07}s` }}>
            <img
              src={item.imageUrl || "https://via.placeholder.com/280x200?text=No+Image"}
              alt={item.name}
              className="item-img"
              loading="lazy"
            />
            <h4 className="item-name">{item.name}</h4>
            <p className="item-desc">{item.description}</p>
            <p className="item-price">₹{(item.price * 84).toFixed(0)}</p>
            <button className="btn btn-primary w-100" onClick={() => addToCart(item, 1)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}




// import React, { useEffect, useState } from "react";
// import API from "../api";
// import "../styles/items-page.css"; // ⬅️ new stylesheet

// const ItemsPage = () => {
//   const [items, setItems] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchItems = async () => {
//       try {
//         const res = await API.get("/items");
//         setItems(res.data.items || []);
//       } catch (err) {
//         console.error("Error fetching items:", err);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchItems();
//   }, []);

//   const addToCart = async (item) => {
//     try {
//       await API.post("/cart/add", { itemId: item.id, quantity: 1 });
//       alert(`${item.name} added to cart!`);
//     } catch (err) {
//       if (err?.response?.status === 401) {
//         alert("Please login to add items to your cart.");
//       } else {
//         alert("Failed to add to cart");
//       }
//     }
//   };

//   return (
//     <div className="items-page">
//       <h2 className="items-title">Our Products</h2>

//       {loading ? (
//         <div className="items-state items-loading">
//           <div className="items-state-emoji spin">🔄</div>
//           <p className="items-state-text">Loading products...</p>
//         </div>
//       ) : items.length === 0 ? (
//         <div className="items-state items-empty">
//           <div className="items-state-emoji dim">📦</div>
//           <p className="items-state-text">No items found.</p>
//           <p className="items-state-sub">Check back later for new products</p>
//         </div>
//       ) : (
//         <div className="items-grid">
//           {items.map((item, index) => (
//             <div
//               key={item.id}
//               className="item-card"
//               style={{ animationDelay: `${index * 0.1}s` }}
//             >
//               <img
//                 src={item.imageUrl || "https://via.placeholder.com/280x200?text=No+Image"}
//                 alt={item.name}
//                 className="item-img"
//               />
//               <h4 className="item-name">{item.name}</h4>
//               <p className="item-price">₹{item.price}</p>
//               <button className="btn btn-primary w-100" onClick={() => addToCart(item)}>
//                 Add to Cart
//               </button>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default ItemsPage;
