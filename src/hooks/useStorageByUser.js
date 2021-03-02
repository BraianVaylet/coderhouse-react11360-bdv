import { useContext, useEffect } from "react"
// firebase
import { fetchStorageByUser } from "firebase/client"
// context
import { CartContext, FavouriteContext, NotificationContext } from "context"
// hooks
import useUser from "./useUser"

const useStorageByUser = () => {
  const user = useUser()
  const { setFavourites } = useContext(FavouriteContext)
  const { setCartItems } = useContext(CartContext)
  const { setNotification } = useContext(NotificationContext)

  useEffect(() => {
    user &&
      fetchStorageByUser(user.email)
        .then((value) => {
          setFavourites(value[0].favourites)
          setCartItems(value[0].cart)
          setNotification(value[0].notifications)
        })
        .catch((error) => console.log("error", error))
  }, [user])
}

export default useStorageByUser
