import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
// containers
import Layout from "containers/Layout"
import Home from "pages/Home"
import Cart from "pages/Cart"
import Checkout from "pages/Checkout"
import Help from "pages/Help"
import Notifications from "pages/Notifications"
import Favourites from "pages/Favourites"
import ItemDetail from "pages/ItemDetail"
import Products from "pages/Products"
import NotFound from "pages/NotFound"
import TermsAndCond from "pages/TermsAndCond"
import Purchases from "pages/Purchases"
// pages lazy load
// const Home = lazy(() => import("pages/Home"))
// const ItemDetail = lazy(() => import("pages/ItemDetail"))
// const Cart = lazy(() => import("pages/Cart"))
// const Products = lazy(() => import("pages/Products"))
// const NotFound = lazy(() => import("pages/NotFound"))
// const Checkout = lazy(() => import("pages/Checkout"))
// const Help = lazy(() => import("pages/Help"))
// const Notifications = lazy(() => import("pages/Notifications"))
// const Favourites = lazy(() => import("pages/Favourites"))

/**
 * Project routes
 * @constant
 */
export const ROUTES = {
  ENTRYPOINT: "/",
  HOME: "/home",
  ITEM_DETAIL: "/item",
  CART: "/cart",
  PRODUCTS: "/products",
  CHECKOUT: "/ckeckout",
  HELP: "/help",
  NOTIFICATIONS: "/notifications",
  FAVOURITES: "/favourites",
  TERMS_AND_COND: "/termsAndCond",
  PURCHASES: "/purchases",
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
        <Route path={ROUTES.CHECKOUT}>
          <Layout>
            <Checkout />
          </Layout>
        </Route>
        <Route path={ROUTES.HELP}>
          <Layout>
            <Help />
          </Layout>
        </Route>
        <Route path={ROUTES.TERMS_AND_COND}>
          <Layout>
            <TermsAndCond />
          </Layout>
        </Route>
        <Route path={ROUTES.NOTIFICATIONS}>
          <Layout>
            <Notifications />
          </Layout>
        </Route>
        <Route path={ROUTES.FAVOURITES}>
          <Layout>
            <Favourites />
          </Layout>
        </Route>
        <Route path={ROUTES.PURCHASES}>
          <Layout>
            <Purchases />
          </Layout>
        </Route>
        <Route path={ROUTES.ITEM_DETAIL + "/:id"}>
          <Layout>
            <ItemDetail />
          </Layout>
        </Route>
        <Route path={ROUTES.PRODUCTS + "/:category"}>
          <Layout>
            <Products />
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
