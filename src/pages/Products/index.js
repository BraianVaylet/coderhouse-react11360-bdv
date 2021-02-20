// react
import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { useTranslation } from "react-i18next"
// components
import ProductsListTemplate from "components/_templates/ProductsListTemplate"
import HelmetSEO from "components/_atoms/HelmetSEO"
// utils
import { CATEGORIES } from "utils/constants"
// fake data
import { accesories, jackets, PRODUCTS, shirts, shoes } from "test"

/**
 * Products Page
 * @component
 * @author Braian D. Vaylet
 * @description Page Products
 */
const Products = () => {
  const { category } = useParams("category")
  const [t] = useTranslation("global")
  const [data, setData] = useState(null)

  // ! Desafío: Catálogo con MAPS y Promises ---
  const handleCategories = () => {
    switch (category) {
      case CATEGORIES.JACKETS:
        return jackets
      case CATEGORIES.SHIRTS:
        return shirts
      case CATEGORIES.SHOES:
        return shoes
      case CATEGORIES.ACCESORIES:
        return accesories
      default:
        return PRODUCTS
    }
  }

  const getDataTest = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(handleCategories())
      }, 2000)
    })
  }

  // simula la primera carga
  useEffect(async () => {
    try {
      const data = await getDataTest()
      setData(data)
    } catch (error) {
      console.log("error", error)
    }
  }, [])

  // cuando cambio la ruta
  useEffect(async () => setData(handleCategories()), [category])
  // ! fin ---

  return (
    <>
      <HelmetSEO
        title={t("HelmetSEO.title.products") + category}
        description={t("HelmetSEO.description.products") + category}
      />
      <ProductsListTemplate data={data} category={category} />
    </>
  )
}

export default Products
