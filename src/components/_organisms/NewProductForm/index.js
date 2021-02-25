import React, { useState } from "react"
// chakra-ui
import { Button, Flex, useToast } from "@chakra-ui/react"
// components
import { InputTextNumber } from "components/_molecules/Inputs"
import { addProduct } from "firebase/client"

/**
 * NewProductForm Component
 * @component
 * @author Braian D. Vaylet
 * @description Componente con formulario para la carga de productos
 */
const NewProductForm = () => {
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
            title: "Se agrego el producto con éxito",
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
            title: "Error",
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
        <Flex align="center" justify="center">
          <InputTextNumber
            name="title"
            label="title"
            value={titleValue}
            onChange={(value) => setTitleValue(value)}
          />
          <InputTextNumber
            name="description"
            label="description"
            value={descriptionValue}
            onChange={(value) => setDescriptionValue(value)}
          />
        </Flex>

        <Flex align="center" justify="center">
          <InputTextNumber
            name="pictureUrl"
            label="pictureUrl"
            value={pictureUrlValue}
            onChange={(value) => setPictureUrlValue(value)}
          />
          <InputTextNumber
            name="price"
            label="price"
            type="number"
            value={priceValue}
            onChange={(value) => setPriceValue(value)}
          />
        </Flex>
        <Flex align="center" justify="center">
          <InputTextNumber
            name="stock"
            label="stock"
            type="number"
            value={stockValue}
            onChange={(value) => setStockValue(value)}
          />
          <InputTextNumber
            name="brand"
            label="brand"
            value={brandValue}
            onChange={(value) => setBrandValue(value)}
          />
        </Flex>
        <Flex align="center" justify="center">
          <InputTextNumber
            name="model"
            label="model"
            value={modelValue}
            onChange={(value) => setModelValue(value)}
          />
          <InputTextNumber
            name="category"
            label="category"
            value={categoryValue}
            onChange={(value) => setCategoryValue(value)}
          />
        </Flex>
        <Flex align="center" justify="center">
          <InputTextNumber
            name="gender"
            label="gender"
            value={genderValue}
            onChange={(value) => setGenderValue(value)}
          />
          <InputTextNumber
            name="sizes"
            label="sizes"
            value={sizesValue}
            onChange={(value) => setSizesValue(value)}
          />
        </Flex>
        <Flex align="center" justify="center">
          <InputTextNumber
            name="colors"
            label="colors"
            value={colorsValue}
            onChange={(value) => setColorsValue(value)}
          />
        </Flex>
        <Button type="submit">Confirmar</Button>
      </Flex>
    </form>
  )
}

export default NewProductForm
