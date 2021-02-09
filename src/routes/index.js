import React, { lazy } from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
// containers
import Layout from "containers/Layout"
// pages lazy load
const Home = lazy(() => import("pages/Home"))
const ItemDetail = lazy(() => import("pages/ItemDetail"))
const Cart = lazy(() => import("pages/Cart"))
const NotFound = lazy(() => import("pages/NotFound"))

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
        <Route path={ROUTES.HOME}>
          <Layout>
            <Home />
          </Layout>
        </Route>
        <Route path={ROUTES.CART}>
          <Layout>
            <Cart />
          </Layout>
        </Route>
        <Route path={ROUTES.ITEM_DETAIL + "/:id"}>
          <Layout>
            <ItemDetail />
          </Layout>
        </Route>
        <Route exact path={ROUTES.ENTRYPOINT}>
          <Layout>
            <Home />
          </Layout>
        </Route>
        <Route path="*" component={NotFound} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
