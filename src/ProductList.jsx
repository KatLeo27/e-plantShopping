import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "./CartSlice";
import "./App.css";
import logo from "./nursery-logo.png";
import snake from "./snake_plant.png";
import spider from "./spider_plant.png";
import peace from "./peace_lily.png";
import fern from "./fern.png";
import aloe from "./aloe_vera.png";
import cactus from "./cactus.png";


function ProductList() {

  const dispatch = useDispatch();

  const cartItems = useSelector(
    state => state.cart.items
  );


  const plants = [

    {
      id: 1,
      name: "Snake Plant",
      price: 15,
      category: "Air Purifying Plants",
      image: snake,
      description:
        "Produces oxygen at night."
    },

    {
      id: 2,
      name: "Spider Plant",
      price: 12,
      category: "Air Purifying Plants",
      image: spider,
      description:
        "Filters harmful toxins."
    },

    {
      id: 3,
      name: "Peace Lily",
      price: 18,
      category: "Air Purifying Plants",
      image: peace,
      description:
        "Purifies indoor air."
    },

    {
      id: 4,
      name: "Fern",
      price: 14,
      category: "Indoor Plants",
      image: fern,
      description:
        "Beautiful decorative plant."
    },

    {
      id: 5,
      name: "Aloe Vera",
      price: 10,
      category: "Medicinal Plants",
      image: aloe,
      description:
        "Known for healing properties."
    },

    {
      id: 6,
      name: "Cactus",
      price: 8,
      category: "Medicinal Plants",
      image: cactus,
      description:
        "Low maintenance plant."
    }

  ];


  return (
    <div>
      <div className="navbar">
        <Link
          to="/"
          className="nav-left"
        >
          <img src={logo} alt="logo" className="img-logo"/>
          <div className="logo-text">
            <h2>Paradise Nursery</h2>
            <p>
              Where Green Meets Serenity
            </p>
          </div>
        </Link>

        <h1 className="nav-center">
          Plants
        </h1>
        <Link
          to="/cart"
          className="cart-section"
        >
          <span className="cart-icon">
            🛒
          </span>
          <span className="cart-count">
            {cartItems.length}
          </span>
        </Link>
      </div>

      <h1 className="category-title">
        Air Purifying Plants
      </h1>
      <div className="products-container">
        {plants
          .filter(
            plant =>
              plant.category ===
              "Air Purifying Plants"
          )
          .map((plant) => {
            const isAdded =
              cartItems.some(
                item =>
                  item.id === plant.id
              );
            return (
              <div key={plant.id} className="plant-card">
                <span className="sale">
                  SALE
                </span>
                <h2>{plant.name}</h2>
                <img src={plant.image} alt={plant.name}/>
                <p className="price">
                  ${plant.price}
                </p>
                <p className="description">
                  {plant.description}
                </p>
                <button
                  disabled={isAdded}
                  onClick={() =>
                    dispatch(
                      addItem({
                        ...plant,
                        quantity: 1
                      })
                    )
                  }
                >
                  {isAdded
                    ? "Added"
                    : "Add to Cart"}
                </button>
              </div>
            );
          })}
      </div>
      <h1 className="category-title">
        Indoor Plants
      </h1>
      <div className="products-container">
        {plants
          .filter(
            plant =>
              plant.category ===
              "Indoor Plants"
          )
          .map((plant) => {
            const isAdded =
              cartItems.some(
                item =>
                  item.id === plant.id
              );
            return (
              <div
                key={plant.id}
                className="plant-card"
              >
                <span className="sale">
                  SALE
                </span>
                <h2>{plant.name}</h2>
                <img
                  src={plant.image}
                  alt={plant.name}
                />
                <p className="price">
                  ${plant.price}
                </p>
                <p className="description">
                  {plant.description}
                </p>
                <button
                  disabled={isAdded}
                  onClick={() =>
                    dispatch(
                      addItem({
                        ...plant,
                        quantity: 1
                      })
                    )
                  }
                >
                  {isAdded
                    ? "Added"
                    : "Add to Cart"}
                </button>
              </div>
            );
          })}
      </div>

      <h1 className="category-title">
        Medicinal Plants
      </h1>

      <div className="products-container">
        {plants
          .filter(
            plant =>
              plant.category ===
              "Medicinal Plants"
          )
          .map((plant) => {
            const isAdded =
              cartItems.some(
                item =>
                  item.id === plant.id
              );

            return (

              <div key={plant.id} className="plant-card">
                <span className="sale">
                  SALE
                </span>
                <h2>{plant.name}</h2>
                <img src={plant.image} alt={plant.name}/>
                <p className="price">
                  ${plant.price}
                </p>
                <p className="description">
                  {plant.description}
                </p>
                <button disabled={isAdded}
                  onClick={() =>
                    dispatch(
                      addItem({
                        ...plant,
                        quantity: 1
                      })
                    )
                  }
                >
                  {isAdded
                    ? "Added"
                    : "Add to Cart"}
                </button>
              </div>
            );
          })}
      </div>
    </div>
  );
}
export default ProductList;