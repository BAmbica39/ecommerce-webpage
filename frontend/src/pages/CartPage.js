import React from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import "../styles/cart-style.css";

export default function CartPage() {
  const navigate = useNavigate();
  const { cart, removeFromCart, updateQty, clearCart, totals } = useCart();

  if (cart.length === 0) {
    return (
      <div className="cart-page">
        <div className="cart-shell">
          <h2 className="cart-title">Your Cart</h2>
          <div className="cart-empty">
            <div className="cart-empty-emoji">🛒</div>
            <p className="cart-empty-text">No items in cart</p>
            <p className="cart-empty-sub">Add some items to get started</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <div className="cart-shell">
        <h2 className="cart-title">Your Cart</h2>

        <div className="cart-list">
          {cart.map((it) => (
            <div key={it.id} className="cart-row">
              <img src={it.imageUrl} alt={it.name} className="cart-img" />
              <div className="cart-details">
                <strong className="cart-item-name">{it.name}</strong>
                <div className="cart-meta">
                  <span className="cart-price">₹{(it.price * 84).toFixed(0)}</span>
                  <div className="cart-qty" style={{ marginLeft: 12 }}>
                    <button onClick={() => updateQty(it.id, it.qty - 1)}>-</button>
                    <input
                      type="number"
                      min="1"
                      value={it.qty}
                      onChange={(e) => updateQty(it.id, Number(e.target.value || 1))}
                    />
                    <button onClick={() => updateQty(it.id, it.qty + 1)}>+</button>
                  </div>
                </div>
              </div>

              <div className="cart-subtotal">
                ₹{(it.qty * it.price * 84).toFixed(0)}
              </div>

              <button className="btn btn-danger" onClick={() => removeFromCart(it.id)}>
                Remove
              </button>
            </div>
          ))}
        </div>

        <div className="cart-summary">
          <div>Items: <b>{totals.items}</b></div>
          <div>Total: <b>₹{(totals.amount * 84).toFixed(0)}</b></div>
          <button className="btn btn-danger" onClick={clearCart}>Clear Cart</button>
          <button className="btn btn-primary" onClick={() => navigate("/payment")}>
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}




// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import API from "../api";
// import "../styles/cart-style.css"

// const CartPage = () => {
//   const [cart, setCart] = useState([]);
//   const navigate = useNavigate();

//   const load = async () => {
//     try {
//       const res = await API.get("/cart/me");
//       setCart(res.data || []);
//     } catch (err) {
//       console.error("Cart fetch error:", err);
//     }
//   };

//   useEffect(() => {
//     load();
//   }, []);

//   const handleRemove = async (id) => {
//     try {
//       await API.delete(`/cart/${id}`);
//       setCart((prev) => prev.filter((i) => i.id !== id));
//     } catch (err) {
//       console.error("Remove error:", err);
//     }
//   };

//   return (
//     <div className="cart-page">
//       <div className="cart-shell">
//         <h2 className="cart-title">Your Cart</h2>

//         {cart.length === 0 ? (
//           <div className="cart-empty">
//             <div className="cart-empty-emoji">🛒</div>
//             <p className="cart-empty-text">No items in cart</p>
//             <p className="cart-empty-sub">Add some items to get started</p>
//           </div>
//         ) : (
//           <>
//             <div className="cart-list">
//               {cart.map((cartItem) => (
//                 <div key={cartItem.id} className="cart-row">
//                   <img
//                     src={cartItem.Item?.imageUrl}
//                     alt={cartItem.Item?.name}
//                     className="cart-img"
//                   />
//                   <div className="cart-details">
//                     <strong className="cart-item-name">{cartItem.Item?.name}</strong>
//                     <div className="cart-meta">
//                       <span className="cart-price">₹{cartItem.Item?.price}</span>
//                       <span className="cart-qty">Qty: {cartItem.quantity}</span>
//                     </div>
//                   </div>
//                   <button
//                     className="btn btn-danger"
//                     onClick={() => handleRemove(cartItem.id)}
//                   >
//                     Remove
//                   </button>
//                 </div>
//               ))}
//             </div>

//             <div className="cart-summary">
//               <button
//                 className="btn btn-primary"
//                 onClick={() => navigate("/payment")}
//               >
//                 Buy Now
//               </button>
//             </div>
//           </>
//         )}
//       </div>
//     </div>
//   );
// };

// export default CartPage;
