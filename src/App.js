import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavComponent from "./components/NavComponent";
import Header from "./components/Header";
import SectionComponent from "./components/SectionComponent";
import FooterComponent from "./components/FooterComponent";
import items from "./items.json";
import "font-awesome/css/font-awesome.min.css";

function App() {
  const [cartCount, setCartCount] = useState(0);
  const addCart = (e) => {
    setCartCount(cartCount + 1);
  };

  const removeCart = () => {
    if (cartCount <= 0) return;
    setCartCount(cartCount - 1);
  };
  return (
    <div>
      <NavComponent cartCount={cartCount} />
      <Header />
      <SectionComponent
        cardItems={items}
        addCart={addCart}
        removeCart={removeCart}
        cartCount={cartCount}
      />
      <FooterComponent />
    </div>
  );
}

export default App;
