import react, { useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./Store/CartProvider";


function App() {
  const[cartIsShown,setCartIsShow]=useState(false);

  const showCartHandler=()=>{
    setCartIsShow(true);
  }
  const hideCartHandler=()=>{
    setCartIsShow(false);
  }

  return (
    <CartProvider>
      {cartIsShown && <Cart onCloseCart={hideCartHandler} ></Cart>}
      <Header onShowCart={showCartHandler} ></Header>
      <main>
        <Meals/>
      </main>
      </CartProvider>
  );
}

export default App;
