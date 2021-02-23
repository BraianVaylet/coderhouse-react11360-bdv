import React, { useState, createContext, useEffect } from "react"
import PropTypes from "prop-types"
// hooks
import { useLocalStorage } from "hooks/useLocalStorage"

export const CartContext = createContext({})

export const CartContextProvider = ({ children }) => {
  const [storedValue, setLocalStorage] = useLocalStorage("cart", [])
  const [cartItems, setCartItems] = useState(storedValue)
  const [total, setTotal] = useState(0)

  useEffect(() => setLocalStorage(cartItems), [cartItems])

  const addItemToCart = (items) => {
    const newCartItemsArray = [...cartItems]
    const newCartItemsArray2 = [...newCartItemsArray, ...items]
    setCartItems(newCartItemsArray2)
  }

  const deleteItemsFromCart = (item) => {
    const newCartItemsArray = cartItems.filter(
      (cartItem) => cartItem.id !== item.id
    )
    setCartItems(newCartItemsArray)
  }

  const deleteOneItemFromCart = (item) => {
    const filterProductArr = cartItems.filter(
      (cartItem) => cartItem.id === item.id
    )
    filterProductArr.pop()
    const productsArr = cartItems.filter((cartItem) => cartItem.id !== item.id)
    const newArr = [...productsArr, ...filterProductArr]
    setCartItems(newArr)
  }

  const cleanCart = () => setCartItems([])

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addItemToCart,
        deleteItemsFromCart,
        deleteOneItemFromCart,
        cleanCart,
        total,
        setTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

CartContextProvider.propTypes = {
  children: PropTypes.element.isRequired,
}
