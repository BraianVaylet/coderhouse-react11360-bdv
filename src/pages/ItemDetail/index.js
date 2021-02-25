import React, { useContext, useEffect, useState } from "react"
import { useParams, useHistory } from "react-router-dom"
import { useTranslation } from "react-i18next"
// components
import HelmetSEO from "components/_atoms/HelmetSEO"
import ItemDetailTemplate from "components/_templates/ItemDetailTemplate"
// routes
import { ROUTES } from "routes"
// context
import { ProductsContext } from "context"

/**
 * ItemDetail Page
 * @Component
 * @author Braian D. Vaylet
 * @description Page ItemDetail, detalle del producto seleccionado
 */
const ItemDetail = () => {
  const { productsDb } = useContext(ProductsContext)
  const { id } = useParams()
  const routerHistory = useHistory()
  const [t] = useTranslation("global")
  const [item, setItem] = useState(null)

  useEffect(async () => {
    try {
      const value =
        productsDb && productsDb.filter((product) => product.id === id)
      !value.length && routerHistory.push(ROUTES.HOME)
      setItem(value[0])
    } catch (error) {
      console.log("error", error)
    }
  }, [])

  const handleInfoSEO = () => {
    return item !== null
      ? {
          title: item.title,
          description: item.title + " | " + item.description,
        }
      : {
          title: "...",
          description: "...",
        }
  }

  return (
    <>
      <HelmetSEO
        title={t("HelmetSEO.title.itemDetail") + handleInfoSEO().title}
        description={
          t("HelmetSEO.description.itemDetail") + handleInfoSEO().description
        }
      />
      <ItemDetailTemplate item={item} />
    </>
  )
}

export default ItemDetail
