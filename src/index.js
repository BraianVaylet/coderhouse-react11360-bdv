// react
import React from "react"
import ReactDOM from "react-dom"
import reportWebVitals from "./reportWebVitals"
// containers
import Wrapper from "containers/Wrapper"
import Layout from "containers/Layout"
// pages
import Home from "./pages/Home"
import ItemDetail from "components/ItemDetail"

const active = false

ReactDOM.render(
  <React.StrictMode>
    <Wrapper>
      <Layout>
        {active && <Home />}
        {!active && <ItemDetail />}
      </Layout>
    </Wrapper>
  </React.StrictMode>,
  document.getElementById("root")
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
