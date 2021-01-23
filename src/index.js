// react
import React from "react"
import ReactDOM from "react-dom"
import reportWebVitals from "./reportWebVitals"
// translations
import { I18nextProvider } from "react-i18next"
import i18next from "./translations"
// chakra-ui
import { ChakraProvider, ColorModeScript, CSSReset } from "@chakra-ui/react"
// components
import Layout from "./components/Layout"
import App from "./App"
// styles
import theme from "./styles/theme"

ReactDOM.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <ChakraProvider theme={theme}>
        <CSSReset />
        <ColorModeScript initialColorMode={theme.initialColorMode} />
        <Layout>
          <App />
        </Layout>
      </ChakraProvider>
    </I18nextProvider>
  </React.StrictMode>,
  document.getElementById("root")
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
