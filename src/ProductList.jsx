import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "./CartSlice";
import { useState } from "react";
import "./App.css";
import logo from "./nursery-logo.png";
import snake from "./snake_plant.png";
import spider from "./spider_plant.png";
import peace from "./peace_lily.png";
import fern from "./fern.png";
import aloe from "./aloe_vera.png";
import cactus from "./cactus.png";
import areca from "./areca_palm.png";
import rubber from "./rubber_plant.png";
import monstera from "./monstera.png";
import pothos from "./pothos.png";
import zz from "./zz_plant.png";
import calathea from "./calathea.png";
import chinese from "./chinese_evergreen.png";
import parlor from "./parlor_palm.png";
import basil from "./basil.png";
import mint from "./mint.png";
import lavender from "./lavender.png";
import neem from "./neem.png";

function ProductList() {
  const dispatch=useDispatch();
  const [addedToCart,setAddedToCart]=useState({});
  const cartItems=useSelector(state=>state.cart.items);

  const plants=[
    {
      id:1,
      name:"Snake Plant",
      price:15,
      category:"Air Purifying Plants",
      image:snake,
      description:"Produces oxygen at night."
    },
    {
      id:2,
      name:"Spider Plant",
      price:12,
      category:"Air Purifying Plants",
      image:spider,
      description:"Filters harmful toxins."
    },
    {
      id:3,
      name:"Peace Lily",
      price:18,
      category:"Air Purifying Plants",
      image:peace,
      description:"Purifies indoor air."
    },
    {
      id:4,
      name:"Areca Palm",
      price:20,
      category:"Air Purifying Plants",
      image:areca,
      description:"Removes harmful pollutants."
    },
    {
      id:5,
      name:"Rubber Plant",
      price:17,
      category:"Air Purifying Plants",
      image:rubber,
      description:"Improves air quality."
    },
    {
      id:6,
      name:"Boston Fern",
      price:14,
      category:"Air Purifying Plants",
      image:fern,
      description:"Freshens indoor spaces."
    },
    {
      id:7,
      name:"Monstera",
      price:22,
      category:"Indoor Plants",
      image:monstera,
      description:"Stylish indoor plant."
    },
    {
      id:8,
      name:"Pothos",
      price:11,
      category:"Indoor Plants",
      image:pothos,
      description:"Easy to maintain."
    },
    {
      id:9,
      name:"ZZ Plant",
      price:19,
      category:"Indoor Plants",
      image:zz,
      description:"Thrives in low light."
    },
    {
      id:10,
      name:"Calathea",
      price:16,
      category:"Indoor Plants",
      image:calathea,
      description:"Beautiful patterned leaves."
    },
    {
      id:11,
      name:"Chinese Evergreen",
      price:15,
      category:"Indoor Plants",
      image:chinese,
      description:"Perfect houseplant."
    },
    {
      id:12,
      name:"Parlor Palm",
      price:21,
      category:"Indoor Plants",
      image:parlor,
      description:"Elegant indoor palm."
    },
    {
      id:13,
      name:"Aloe Vera",
      price:10,
      category:"Medicinal Plants",
      image:aloe,
      description:"Known for healing properties."
    },
    {
      id:14,
      name:"Cactus",
      price:8,
      category:"Medicinal Plants",
      image:cactus,
      description:"Low maintenance plant."
    },
    {
      id:15,
      name:"Basil",
      price:7,
      category:"Medicinal Plants",
      image:basil,
      description:"Useful medicinal herb."
    },
    {
      id:16,
      name:"Mint",
      price:6,
      category:"Medicinal Plants",
      image:mint,
      description:"Refreshing herbal plant."
    },
    {
      id:17,
      name:"Lavender",
      price:13,
      category:"Medicinal Plants",
      image:lavender,
      description:"Calming aromatic herb."
    },
    {
      id:18,
      name:"Neem",
      price:9,
      category:"Medicinal Plants",
      image:neem,
      description:"Traditional medicinal plant."
    }
  ];

  return (
    <div>
      <div className="navbar">
        <Link to="/" className="nav-left">
          <img src={logo} alt="logo" className="img-logo"/>
          <div className="logo-text">
            <h2>Paradise Nursery</h2>
            <p>Where Green Meets Serenity</p>
          </div>
        </Link>

        <h1 className="nav-center">Plants</h1>

        <Link to="/cart" className="cart-section">
          <span className="cart-icon">🛒</span>
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
          .filter(plant=>plant.category==="Air Purifying Plants")
          .map((plant)=>{

            const isAdded=addedToCart[plant.name];

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
                  disabled={addedToCart[plant.name]}
                  onClick={()=>{
                    dispatch(
                      addItem({
                        ...plant,
                        quantity:1
                      })
                    );
                    setAddedToCart({
                      ...addedToCart,
                      [plant.name]:true
                    });

                  }}
                >
                  {isAdded ? "Added" : "Add to Cart"}
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
          .filter(plant=>plant.category==="Indoor Plants")
          .map((plant)=>{
            const isAdded=addedToCart[plant.name];
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
                  disabled={addedToCart[plant.name]}
                  onClick={()=>{
                    dispatch(
                      addItem({
                        ...plant,
                        quantity:1
                      })
                    );
                    setAddedToCart({
                      ...addedToCart,
                      [plant.name]:true
                    });
                  }}
                >
                  {isAdded ? "Added" : "Add to Cart"}
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
          .filter(plant=>plant.category==="Medicinal Plants")
          .map((plant)=>{
            const isAdded=addedToCart[plant.name];
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
                  disabled={addedToCart[plant.name]}
                  onClick={()=>{
                    dispatch(
                      addItem({
                        ...plant,
                        quantity:1
                      })
                    );
                    setAddedToCart({
                      ...addedToCart,
                      [plant.name]:true
                    });
                  }}
                >
                  {isAdded ? "Added" : "Add to Cart"}
                </button>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default ProductList;