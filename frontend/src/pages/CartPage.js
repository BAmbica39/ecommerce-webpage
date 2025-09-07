import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api";
import "../styles/cart-style.css"

const CartPage = () => {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  const load = async () => {
    try {
      const res = await API.get("/cart/me");
      setCart(res.data || []);
    } catch (err) {
      console.error("Cart fetch error:", err);
    }
  };

  useEffect(() => {
    load();
  }, []);

  const handleRemove = async (id) => {
    try {
      await API.delete(`/cart/${id}`);
      setCart((prev) => prev.filter((i) => i.id !== id));
    } catch (err) {
      console.error("Remove error:", err);
    }
  };

  return (
    <div className="cart-page">
      <div className="cart-shell">
        <h2 className="cart-title">Your Cart</h2>

        {cart.length === 0 ? (
          <div className="cart-empty">
            <div className="cart-empty-emoji">🛒</div>
            <p className="cart-empty-text">No items in cart</p>
            <p className="cart-empty-sub">Add some items to get started</p>
          </div>
        ) : (
          <>
            <div className="cart-list">
              {cart.map((cartItem) => (
                <div key={cartItem.id} className="cart-row">
                  <img
                    src={cartItem.Item?.imageUrl}
                    alt={cartItem.Item?.name}
                    className="cart-img"
                  />
                  <div className="cart-details">
                    <strong className="cart-item-name">{cartItem.Item?.name}</strong>
                    <div className="cart-meta">
                      <span className="cart-price">₹{cartItem.Item?.price}</span>
                      <span className="cart-qty">Qty: {cartItem.quantity}</span>
                    </div>
                  </div>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleRemove(cartItem.id)}
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>

            <div className="cart-summary">
              <button
                className="btn btn-primary"
                onClick={() => navigate("/payment")}
              >
                Buy Now
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CartPage;
