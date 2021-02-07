import React, { lazy } from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
// containers
import Layout from "containers/Layout"
// pages lazy load
const Home = lazy(() => import("pages/Home"))
const ItemDetail = lazy(() => import("pages/ItemDetail"))
const Cart = lazy(() => import("pages/Cart"))

/**
 * Project routes
 * @constant
 */
export const ROUTES = {
  ENTRYPOINT: "/",
  HOME: "/home",
  ITEM_DETAIL: "/item",
  CART: "/cart",
}

/**
 * Routes Component
 * @component
 * @author Braian D. Vaylet
 * @description Router con React-Router
 */
const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Layout>
          <Route path={ROUTES.HOME} component={Home} />
          <Route path={ROUTES.CART} component={Cart} />
          <Route path={ROUTES.ITEM_DETAIL + "/:id"} component={ItemDetail} />
          <Route exact path={ROUTES.ENTRYPOINT} component={Home} />
        </Layout>
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
