import React, { useState, createContext, useEffect } from "react"
import PropTypes from "prop-types"
// hooks
import { useLocalStorage } from "hooks/useLocalStorage"

export const CartContext = createContext({})

export const CartContextProvider = ({ children }) => {
  const [storedValue, setLocalStorage] = useLocalStorage("cart", [])
  const [cartItems, setCartItems] = useState(storedValue)

  useEffect(() => setLocalStorage(cartItems), [cartItems])

  const addItemToCart = (items) => {
    const newCartItemsArray = [...cartItems]
    const newCartItemsArray2 = [...newCartItemsArray, ...items]
    setCartItems(newCartItemsArray2)
  }

  const deleteItemFromCart = (item) => {
    const newCartItemsArray = cartItems.filter((fav) => fav.id !== item.id)
    setCartItems(newCartItemsArray)
  }

  const cleanCart = () => setCartItems([])

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addItemToCart,
        deleteItemFromCart,
        cleanCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

CartContextProvider.propTypes = {
  children: PropTypes.element.isRequired,
}
