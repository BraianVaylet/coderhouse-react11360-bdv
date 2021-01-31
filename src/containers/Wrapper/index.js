import React from "react"
import PropTypes from "prop-types"
// translations
import { I18nextProvider } from "react-i18next"
import i18next from "translations"
// ui
import { ChakraProvider, ColorModeScript, CSSReset } from "@chakra-ui/react"
// styles
import theme from "styles/theme"

/**
 * Wrapper Container
 * @component
 */
const Wrapper = ({ children }) => {
  return (
    <I18nextProvider i18n={i18next}>
      <ChakraProvider theme={theme}>
        <CSSReset />
        <ColorModeScript initialColorMode={theme.initialColorMode} />
        {children}
      </ChakraProvider>
    </I18nextProvider>
  )
}

Wrapper.propTypes = {
  children: PropTypes.element.isRequired,
}

export default Wrapper
