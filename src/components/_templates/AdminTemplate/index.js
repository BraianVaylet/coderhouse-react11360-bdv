import React, { useContext, useEffect, useState } from "react"
import { useTranslation } from "react-i18next"
// chakra-ui
import {
  Button,
  Center,
  Divider,
  Flex,
  Slide,
  Text,
  useDisclosure,
  useToast,
} from "@chakra-ui/react"
import { CloseIcon, RepeatIcon } from "@chakra-ui/icons"
// styles
import { setValueResponsiveMin1280 } from "styles/utils"
// components
import Card from "components/_atoms/Card"
import ItemComplete from "components/_molecules/ItemComplete"
import NewProductForm from "components/_organisms/NewProductForm"
import CustomModal from "components/_atoms/CustomModal"
import ChangeLanguageBtn from "components/_molecules/ChangeLanguageBtn"
import ChangeThemeBtn from "components/_molecules/ChangeThemeBtn"
// context
import { ProductsContext } from "context"
// firebase
import {
  fetchAllProducts,
  changeIsActiveProductByID,
  deleteProductsByID,
  fetchProductsByID,
} from "firebase/client"

/**
 * AdminTemplate Component
 * @component
 * @author Braian D. Vaylet
 * @description Templeate para el dashboar del admin
 */
const AdminTemplate = () => {
  const [t] = useTranslation("global")
  const { productsDb, setProductsDb, setLoadingProductsDb } = useContext(
    ProductsContext
  )
  const toast = useToast()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const slide = useDisclosure()
  const [edit, setEdit] = useState(false)
  const [productSelected, setProductSelected] = useState(null)

  useEffect(async () => !productsDb && getProductsFromDb(), [productsDb])
  useEffect(() => slide.onOpen(), [])

  /**
   * getProductsFromDb
   * @function
   * @description Trae TODOS los productos de la BD
   */
  const getProductsFromDb = async () => {
    setLoadingProductsDb(true)
    try {
      const value = await fetchAllProducts()
      setProductsDb(value)
      setLoadingProductsDb(false)
    } catch (error) {
      console.log("error", error)
    }
  }

  /**
   * handleIsActiveClick
   * @function
   * @param {string} id
   * @param {boolean} active
   * @description Cambia el estado del producto de activo a inactivo
   */
  const handleIsActiveClick = async (id, active) => {
    await changeIsActiveProductByID(id, active)
      .then(() => {
        toast({
          title: t("AdminTemplate.isActiveSuccess") + ": " + active,
          description: "",
          status: "success",
          position: "bottom",
          duration: 5000,
          isClosable: true,
        })
        getProductsFromDb()
      })
      .catch(() => {
        toast({
          title: t("AdminTemplate.isActiveError") + ": " + active,
          description: "",
          status: "error",
          position: "bottom",
          duration: 5000,
          isClosable: true,
        })
      })
  }

  /**
   * handleDelete
   * @function
   * @param {string} id
   * @description Elimina el registro de la Base de datos ⚠
   */
  const handleDelete = async (id) => {
    await deleteProductsByID(id)
      .then(() => {
        toast({
          title: t("AdminTemplate.deleteSuccess"),
          description: "",
          status: "success",
          position: "bottom",
          duration: 5000,
          isClosable: true,
        })
        getProductsFromDb()
      })
      .catch(() => {
        toast({
          title: t("AdminTemplate.deleteError"),
          description: "",
          status: "error",
          position: "bottom",
          duration: 5000,
          isClosable: true,
        })
      })
  }

  /**
   * handleEdit
   * @function
   * @description Permite editar un producto
   */
  const handleEdit = async (id) => {
    setEdit(true)
    const product = await fetchProductsByID(id)
    setProductSelected(product)
    onOpen()
  }

  /**
   * handleNewProduct
   * @function
   * @description Permite crear un producto
   */
  const handleNewProduct = () => {
    setEdit(false)
    onOpen()
  }

  return (
    <>
      <Slide direction="top" in={slide.isOpen} style={{ zIndex: 10 }}>
        <Flex
          p="20px"
          color="white"
          bg="brand.primary"
          shadow="md"
          align="center"
          justify="space-between"
        >
          <Text fontSize="1.25rem">{t("AdminTemplate.slideAlert")}</Text>
          <Button variant="ghost" onClick={slide.onClose}>
            <CloseIcon />
          </Button>
        </Flex>
      </Slide>
      <Center w="100%">
        <Flex
          p={4}
          mt={8}
          direction="column"
          align="center"
          justify="center"
          w={setValueResponsiveMin1280("72.5%", "100%")}
        >
          <Text fontSize="1.5rem" fontWeight="bold">
            🏗 {t("AdminTemplate.dashboard")}
          </Text>
          <Flex w="100%" justify="flex-start" mb={10}>
            <Flex justify="space-between" align="center" w="100%">
              <Flex align="center">
                <Button onClick={handleNewProduct}>
                  {t("AdminTemplate.newProduct")}
                </Button>
                <Button onClick={getProductsFromDb} ml={4}>
                  <RepeatIcon />
                </Button>
              </Flex>
              <Flex align="center">
                <ChangeThemeBtn />
                <ChangeLanguageBtn />
              </Flex>
            </Flex>
            <CustomModal isOpen={isOpen} onClose={onClose} size="xl">
              <NewProductForm
                onClose={onClose}
                itsEditable={edit}
                data={productSelected}
              />
            </CustomModal>
          </Flex>

          <Flex mb="1rem" align="flex-start" justify="flex-start">
            <Flex align="center">
              <Button>✔</Button>
              <Text ml={2}>{t("AdminTemplate.activeTrue")}</Text>
            </Flex>
            <Flex align="center" ml="1rem" mr=".5rem">
              <Button>❌</Button>
              <Text ml={2}>{t("AdminTemplate.activeFalse")}</Text>
            </Flex>
            <Flex align="center" ml=".5rem" mr="1rem">
              <Button>✏</Button>
              <Text ml={2}>{t("AdminTemplate.edit")}</Text>
            </Flex>
            <Flex align="center">
              <Button>🗑</Button>
              <Text ml={2}>{t("AdminTemplate.delete")}</Text>
            </Flex>
          </Flex>

          <Card w="100%" minH={setValueResponsiveMin1280("80vh", "100%")} p={4}>
            <Flex
              direction="column"
              align="center"
              justify="flex-start"
              w="100%"
              p={10}
            >
              {productsDb && productsDb.length > 0 ? (
                <Flex
                  direction="column"
                  align="flex-start"
                  justify="flex-start"
                  w="100%"
                >
                  {productsDb
                    .map((prod, index) => {
                      return (
                        <>
                          <Flex
                            key={index}
                            w="100%"
                            justify="space-between"
                            align="center"
                          >
                            <ItemComplete item={prod} />
                            <Flex>
                              {!prod.isActive ? (
                                <Button
                                  onClick={() =>
                                    handleIsActiveClick(prod.id, true)
                                  }
                                >
                                  ✔
                                </Button>
                              ) : (
                                <Button
                                  onClick={() =>
                                    handleIsActiveClick(prod.id, false)
                                  }
                                >
                                  ❌
                                </Button>
                              )}
                              <Button
                                onClick={() => handleEdit(prod.id)}
                                ml={2}
                              >
                                ✏
                              </Button>
                              <Button
                                onClick={() => handleDelete(prod.id)}
                                ml={2}
                              >
                                🗑
                              </Button>
                            </Flex>
                          </Flex>
                          <Divider m="1.5rem 0" />
                        </>
                      )
                    })
                    .reverse()}
                </Flex>
              ) : (
                <Flex>{t("AdminTemplate.noItems")}</Flex>
              )}
            </Flex>
          </Card>
        </Flex>
      </Center>
    </>
  )
}

export default AdminTemplate
