import React, { Suspense } from "react"
import PropTypes from "prop-types"
// translations
import { I18nextProvider } from "react-i18next"
import i18next from "translations"
// ui
import { ChakraProvider, ColorModeScript, CSSReset } from "@chakra-ui/react"
// styles
import theme from "styles/theme"
// context
import { FavouriteContextProvider } from "context"

/**
 * Wrapper Container
 * @component
 * @author Braian D. Vaylet
 * @description Contenedor Wrapper, da acceso a I18Next y ChakraProvider
 */
const Wrapper = ({ children }) => {
  return (
    <FavouriteContextProvider>
      <Suspense fallback={<div />}>
        <I18nextProvider i18n={i18next}>
          <ChakraProvider theme={theme}>
            <CSSReset />
            <ColorModeScript initialColorMode={theme.initialColorMode} />
            {children}
          </ChakraProvider>
        </I18nextProvider>
      </Suspense>
    </FavouriteContextProvider>
  )
}

Wrapper.propTypes = {
  children: PropTypes.element.isRequired,
}

export default Wrapper
