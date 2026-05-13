import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {increaseQuantity,decreaseQuantity,removeItem} from "./CartSlice";
import "./App.css";
import logo from "./nursery-logo.png";

function CartItem() {
  const dispatch = useDispatch();
  const cartItems = useSelector(
    state => state.cart.items
  );
  const totalAmount = cartItems.reduce(
    (total, item) =>
      total + (item.price * item.quantity),
    0
  );
  const totalPlants = cartItems.reduce(
    (total, item) =>
      total + item.quantity,
    0
  );

  return (
    <div>
      <div className="navbar">
        <Link to="/" className="nav-left">
          <img src={logo} alt="logo" className="img-logo"/>
          <div className="logo-text">
            <h2>Paradise Nursery</h2>
            <p>
              Where Green Meets Serenity
            </p>
          </div>
        </Link>
        <h1 className="nav-center">
          Cart
        </h1>
        <Link to="/cart" className="cart-section"
        >
          <span className="cart-icon">
            🛒
          </span>
          <span className="cart-count">
            {totalPlants}
          </span>
        </Link>
      </div>
      <div className="cart-summary">
        <h1>
          Total Cart Amount:
          {" "}
          ${totalAmount}
        </h1>
      </div>
      <div className="cart-container">
        {cartItems.map((item) => (
          <div key={item.id} className="cart-card">
            <img src={item.image} alt={item.name} className="cart-image"/>
            <div className="cart-details">
              <h2>{item.name}</h2>
              <p>
                Unit Price:
                {" "}
                ${item.price}
              </p>
              <div className="quantity-buttons">
                <button onClick={() =>
                    dispatch(
                      decreaseQuantity(item.id)
                    )
                  }
                >
                  -
                </button>
                <span>
                  {item.quantity}
                </span>
                <button onClick={() =>
                    dispatch(
                      increaseQuantity(item.id)
                    )
                  }
                >
                  +
                </button>
              </div>
              <h3>
                Total:
                {" "}
                ${item.price * item.quantity}
              </h3>
              <button className="delete-btn" onClick={() =>
                  dispatch(
                    removeItem(item.id)
                  )
                }
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="cart-buttons">
        <Link to="/products">
          <button className="continue-btn">
            Continue Shopping
          </button>
        </Link>
        <button className="checkout-btn" onClick={() =>
            alert("Coming Soon")
          }
        >
          Checkout
        </button>
      </div>
    </div>
  );
}

export default CartItem;