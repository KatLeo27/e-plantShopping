import { Routes, Route }
from "react-router-dom";
import Landing from "./Landing";
import ProductList from "./ProductList";
import CartItem from "./CartItem";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />}/>
      <Route path="/products" element={<ProductList />}/>
      <Route path="/cart" element={<CartItem />}/>
    </Routes>
  );
}

export default App;