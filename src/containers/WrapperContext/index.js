import React from "react"
import PropTypes from "prop-types"
// context
import { CartContextProvider, FavouriteContextProvider } from "context"

/**
 * WrapperContext Container
 * @component
 * @author Braian D. Vaylet
 * @description Contenedor del Context del proyecto
 *
 */
const WrapperContext = ({ children }) => {
  return (
    <FavouriteContextProvider>
      <CartContextProvider>{children}</CartContextProvider>
    </FavouriteContextProvider>
  )
}

WrapperContext.propTypes = {
  children: PropTypes.element.isRequired,
}

export default WrapperContext
