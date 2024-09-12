//  setting up a React Context, which is a way to share data across different
// parts of a React application without passing props manually at every level.

// importing the createContext function from React to create a Context object.
import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";

// a new Context object named StoreContext is created.
//The null you see is the default value of the context
// when no provider is found above in the component tree.
export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [cartItems, setCartItems] = useState({});
  // This is a React component called StoreContextProvider.
  //It wraps its children components with a StoreContext.Provider.
  //The value prop of the provider is set to contextValue,
  //which is currently an empty object.
  //This is where you would put any data or functions you want to share with components
  // that consume this context.

  //foodlist array can be accessed anywhere

  const addToCart = (itemId) => {
    if (!cartItems[itemId]) {
      setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
    } else {
      setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  useEffect(() => {
    console.log(cartItems);
  }, [cartItems]);

  const contextValue = {
    food_list,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;

//go to index.js and wrap app in StoreContextProvider
