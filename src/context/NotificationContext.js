import React, { useState, createContext, useEffect } from "react"
import PropTypes from "prop-types"
// hooks
import { useLocalStorage } from "hooks/useLocalStorage"

export const NotificationContext = createContext({})

export const NotificationContextProvider = ({ children }) => {
  const [storedValue, setLocalStorage] = useLocalStorage("notifications", [])
  const [notification, setNotification] = useState(storedValue)

  useEffect(() => setLocalStorage(notification), [notification])

  const addNotification = (item) => {
    const newFavArray = [...notification, item]
    setNotification(newFavArray)
  }

  const deleteNotification = (item) => {
    const newFavArray = notification.filter((fav) => fav.id !== item.id)
    setNotification(newFavArray)
  }

  const cleanNotification = () => setNotification([])

  return (
    <NotificationContext.Provider
      value={{
        notification,
        addNotification,
        deleteNotification,
        cleanNotification,
      }}
    >
      {children}
    </NotificationContext.Provider>
  )
}

NotificationContextProvider.propTypes = {
  children: PropTypes.element.isRequired,
}
