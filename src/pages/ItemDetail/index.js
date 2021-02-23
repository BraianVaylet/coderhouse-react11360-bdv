import React, { useEffect, useState } from "react"
import { useParams, useHistory } from "react-router-dom"
import { useTranslation } from "react-i18next"
// components
import HelmetSEO from "components/_atoms/HelmetSEO"
import ItemDetailTemplate from "components/_templates/ItemDetailTemplate"
// routes
import { ROUTES } from "routes"
// fake data
import { PRODUCTS } from "test"

/**
 * ItemDetail Page
 * @Component
 * @author Braian D. Vaylet
 * @description Page ItemDetail, detalle del producto seleccionado
 */
const ItemDetail = () => {
  const [t] = useTranslation("global")
  const { id } = useParams()
  const routerHistory = useHistory()

  // ! Desafío: Detalle de Producto
  const [item, setItem] = useState(null)

  useEffect(async () => {
    try {
      const value = await handleDataByItemId()
      setItem(value)
    } catch (error) {
      console.log("error", error)
    }
  }, [])

  /**
   * handleDataByItemId
   * @function
   * @returns {object} item info
   */
  const handleDataByItemId = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const item = PRODUCTS.filter((product) => product.id === id)
        item.length ? resolve(item[0]) : routerHistory.push(ROUTES.HOME)
      }, 2000)
    })
  }

  // ! end

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
