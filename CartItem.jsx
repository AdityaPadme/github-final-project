import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice';

function CartItem({ onContinueShopping }) {
  // This grabs the cart items from our Redux store
  const cart = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  const handleRemove = (item) => {
    dispatch(removeItem(item.name));
  };

  return (
    <div className="cart-container">
      <h2>Your Shopping Cart</h2>
      
      {cart.length === 0 ? (
        <p>Your cart is currently empty.</p>
      ) : (
        <div>
          {cart.map(item => (
            <div className="cart-item" key={item.name} style={{ border: "1px solid #ccc", margin: "10px", padding: "10px" }}>
              <h3>{item.name}</h3>
              <p>Price: ${item.cost}</p>
              <p>Quantity: {item.quantity}</p>
              <p>Subtotal: ${item.cost * item.quantity}</p>
              <button onClick={() => handleRemove(item)}>Remove</button>
            </div>
          ))}
        </div>
      )}

      <div style={{ marginTop: '20px' }}>
        <button className="continue-shopping-btn" onClick={onContinueShopping}>
          Continue Shopping
        </button>
        <button className="checkout-btn" onClick={() => alert("Checkout coming soon!")}>
          Checkout
        </button>
      </div>
    </div>
  );
}

export default CartItem;
