import "./App.css";
import { useEffect, useState } from "react";
import bakeryData from "./assets/bakery-data.json";
import BakeryItem from "./components/BakeryItem";

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

function App() {
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */
  const [data, setData] = useState(bakeryData);
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const loadData = () => {
    setData(bakeryData);
  };

  useEffect(() => {
    loadData();
  }, []);

  const addToCart = (item) => {
    // console.log("adding to cart:", price);

    //setCart((prev_cart) => [...prev_cart, price].filter((price) => price < 5));
    setCart((prev_cart) => [...prev_cart, item.name]);
    setTotalPrice((prev_price) => prev_price + item.price);
  };

  const buildElements = () => {
    const jsxlist = bakeryData.map((item, index) => {
      return <BakeryItem item={item} addToCart={addToCart} />;
    });

    return jsxlist;
  };

  const showCart = () => {
    if (cart.length === 0) {
      console.log("cart is empty");
      return <p>Cart is empty</p>;
    }

    const jsxlist = cart.map((price, index) => {
      return <p key={index}> {price}</p>;
    });

    return (
      <div>
        Total Price: ${totalPrice} {jsxlist}{" "}
      </div>
    );
  };

  return (
    <div className="App">
      <h1>My Bakery</h1> {/* TODO: personalize your bakery (if you want) */}
      <div id="content">{buildElements()}</div>
      <h2>Cart</h2>
      {showCart()}
    </div>
  );
}

export default App;
