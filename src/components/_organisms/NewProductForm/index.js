import React, { useState } from "react"
import { useTranslation } from "react-i18next"
// chakra-ui
import { Button, Flex, useToast } from "@chakra-ui/react"
// components
import { InputTextNumber } from "components/_molecules/Inputs"
import { addProduct } from "firebase/client"
import Select from "components/_molecules/Select"
// utils
import { CATEGORIES, GENDERS } from "utils/constants"

/**
 * NewProductForm Component
 * @component
 * @author Braian D. Vaylet
 * @description Componente con formulario para la carga de productos
 */
const NewProductForm = () => {
  const [t] = useTranslation("global")
  const [titleValue, setTitleValue] = useState(null)
  const [descriptionValue, setDescriptionValue] = useState(null)
  const [pictureUrlValue, setPictureUrlValue] = useState(null)
  const [priceValue, setPriceValue] = useState(null)
  const [stockValue, setStockValue] = useState(null)
  const [brandValue, setBrandValue] = useState(null)
  const [modelValue, setModelValue] = useState(null)
  const [categoryValue, setCategoryValue] = useState(null)
  const [genderValue, setGenderValue] = useState(null)
  const [sizesValue, setSizesValue] = useState(null)
  const [colorsValue, setColorsValue] = useState(null)
  const toast = useToast()

  const DATA_GENDERS = [
    { value: GENDERS.MALE, text: GENDERS.MALE },
    { value: GENDERS.FEMALE, text: GENDERS.FEMALE },
    { value: GENDERS.ALL, text: GENDERS.ALL },
  ]

  const DATA_CATEGORIES = [
    { value: CATEGORIES.JACKETS, text: CATEGORIES.JACKETS },
    { value: CATEGORIES.SHIRTS, text: CATEGORIES.SHIRTS },
    { value: CATEGORIES.SHOES, text: CATEGORIES.SHOES },
    { value: CATEGORIES.ACCESORIES, text: CATEGORIES.ACCESORIES },
  ]

  /**
   * handleArray
   * @function
   * @param {string} value
   * @return {array}
   */
  const handleArray = (value) => value.split(",")

  /**
   * handleSubmit
   * @function
   * @description guarda un producto en la bd
   */
  const handleSubmit = async (e) => {
    e.preventDefault()
    if (
      titleValue &&
      descriptionValue &&
      pictureUrlValue &&
      priceValue &&
      stockValue &&
      brandValue &&
      modelValue &&
      categoryValue &&
      genderValue &&
      sizesValue &&
      colorsValue
    ) {
      const data = {
        title: titleValue,
        description: descriptionValue,
        pictureName: titleValue,
        pictureUrl: pictureUrlValue,
        price: priceValue,
        stock: stockValue,
        brand: brandValue,
        model: modelValue,
        category: categoryValue,
        calification: 100,
        gender: genderValue,
        sizes: handleArray(sizesValue),
        colors: handleArray(colorsValue),
      }
      console.log("data", data)
      await addProduct(data)
        .then((value) => {
          console.log("value", value)
          toast({
            title: t("NewProductForm.success"),
            description: "",
            status: "success",
            position: "bottom",
            duration: 5000,
            isClosable: true,
          })
        })
        .catch((error) => {
          console.log("error", error)
          toast({
            title: t("NewProductForm.error"),
            description: "",
            status: "error",
            position: "bottom",
            duration: 5000,
            isClosable: true,
          })
        })
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <Flex direction="column" align="flex-start" justify="flex-start">
        <InputTextNumber
          name="title"
          label={t("NewProductForm.title")}
          value={titleValue}
          onChange={(value) => setTitleValue(value)}
        />
        <InputTextNumber
          name="description"
          label={t("NewProductForm.description")}
          value={descriptionValue}
          onChange={(value) => setDescriptionValue(value)}
        />

        <InputTextNumber
          name="pictureUrl"
          label={t("NewProductForm.pictureUrl")}
          value={pictureUrlValue}
          onChange={(value) => setPictureUrlValue(value)}
        />
        <InputTextNumber
          name="price"
          label={t("NewProductForm.price")}
          type="number"
          value={priceValue}
          onChange={(value) => setPriceValue(value)}
        />
        <InputTextNumber
          name="stock"
          label={t("NewProductForm.stock")}
          type="number"
          value={stockValue}
          onChange={(value) => setStockValue(value)}
        />
        <InputTextNumber
          name="brand"
          label={t("NewProductForm.brand")}
          value={brandValue}
          onChange={(value) => setBrandValue(value)}
        />
        <InputTextNumber
          name="model"
          label={t("NewProductForm.model")}
          value={modelValue}
          onChange={(value) => setModelValue(value)}
        />
        <Select
          placeholder="category"
          name="category"
          label={t("NewProductForm.category")}
          value={categoryValue}
          onChange={(value) => setCategoryValue(value)}
          data={DATA_CATEGORIES}
        />
        <Select
          placeholder="gender"
          name="gender"
          label={t("NewProductForm.gender")}
          value={genderValue}
          onChange={(value) => setGenderValue(value)}
          data={DATA_GENDERS}
        />
        <InputTextNumber
          name="sizes"
          label={
            t("NewProductForm.sizes") +
            " (" +
            t("NewProductForm.infoExampleSizes") +
            ")"
          }
          value={sizesValue}
          onChange={(value) => setSizesValue(value)}
        />
        <InputTextNumber
          name="colors"
          label={
            t("NewProductForm.colors") +
            " (" +
            t("NewProductForm.infoExampleColors") +
            ")"
          }
          value={colorsValue}
          onChange={(value) => setColorsValue(value)}
        />
        <Button type="submit">{t("NewProductForm.confirm")}</Button>
      </Flex>
    </form>
  )
}

export default NewProductForm