import React, { useContext, useEffect, useState } from "react"
import { useTranslation } from "react-i18next"
// chakra-ui
import {
  Button,
  Center,
  Divider,
  Flex,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  useDisclosure,
  useToast,
} from "@chakra-ui/react"
import { InfoOutlineIcon, RepeatIcon } from "@chakra-ui/icons"
// styles
import { setValueResponsiveMin1280 } from "styles/utils"
import { COLORS } from "styles/theme"
// components
import Card from "components/_atoms/Card"
import CustomCollapse from "components/_atoms/CustomCollapse"
import CustomModal from "components/_atoms/CustomModal"
import BtnInfoAdmin from "components/_atoms/BtnInfoAdmin"
import ButtonLink from "components/_atoms/ButtonLink"
import CustomPopover from "components/_atoms/CustomPopover"
import ItemComplete from "components/_molecules/ItemComplete"
import ChangeLanguageBtn from "components/_molecules/ChangeLanguageBtn"
import ChangeThemeBtn from "components/_molecules/ChangeThemeBtn"
import SkItemComplete from "components/_molecules/ItemComplete/SkItemComplete"
import NewProductForm from "components/_organisms/NewProductForm"
import StatisticsBox from "components/_atoms/StatisticsBox"
// context
import { ProductsContext } from "context"
// firebase
import {
  fetchAllProducts,
  changeIsActiveProductByID,
  deleteProductsByID,
  fetchProductsByID,
  fetchAllPurchases,
} from "firebase/client"
// routes
import { ROUTES } from "routes"
import PurchaseComplete from "components/_molecules/PurchaseComplete"

/**
 * AdminTemplate Component
 * @component
 * @author Braian D. Vaylet
 * @description Templeate para el dashboar del admin
 */
const AdminTemplate = () => {
  const [t] = useTranslation("global")
  const {
    productsDb,
    setProductsDb,
    setLoadingProductsDb,
    loadingProductsDb,
  } = useContext(ProductsContext)
  const toast = useToast()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const slide = useDisclosure()
  const [edit, setEdit] = useState(false)
  const [productSelected, setProductSelected] = useState(null)
  const [purchases, setPurchases] = useState(null)

  useEffect(async () => !productsDb && getProductsFromDb(), [productsDb])
  useEffect(() => {
    slide.onOpen()
    fetchAllPurchases()
      .then((value) => setPurchases(value))
      .catch((error) => console.log("error", error))
  }, [])

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

  /**
   * handleStatisticsProducts
   * @function
   * @description retorna estadisticas
   */
  const handleStatisticsProducts = () => {
    const filterDataByCategory = (value) =>
      productsDb.filter((product) => product.category === value).length

    const filterDataByIsActive = (value) =>
      productsDb.filter((product) => product.isActive === value).length

    return (
      productsDb && {
        totalProducts: productsDb.length,
        totalProductsInactives: filterDataByIsActive(false),
        totalProductsActives: filterDataByIsActive(true),
        totalProductsOutStock: productsDb.filter(
          (product) => product.stock === 0
        ).length,
        totalJackets: filterDataByCategory("jackets"),
        totalShirts: filterDataByCategory("shirts"),
        totalShoes: filterDataByCategory("shoes"),
        totalAccesories: filterDataByCategory("accesories"),
      }
    )
  }

  return (
    <>
      <CustomCollapse isOpen={slide.isOpen} onClose={slide.onClose}>
        <Text fontSize="1.25rem">{t("AdminTemplate.slideAlert")}</Text>
      </CustomCollapse>
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
                <ButtonLink to={ROUTES.HOME} mr={4}>
                  👈
                </ButtonLink>
                <CustomPopover
                  btn={<InfoOutlineIcon />}
                  withHeader
                  header={"Info"}
                >
                  <Flex
                    direction="column"
                    mb="1rem"
                    align="flex-start"
                    justify="space-between"
                    w="100%"
                  >
                    <BtnInfoAdmin
                      mb={4}
                      btnText="✔"
                      infoText={t("AdminTemplate.activeTrue")}
                    />
                    <BtnInfoAdmin
                      mb={4}
                      btnText="❌"
                      infoText={t("AdminTemplate.activeFalse")}
                    />
                    <BtnInfoAdmin
                      mb={4}
                      btnText="✏"
                      infoText={t("AdminTemplate.edit")}
                    />
                    <BtnInfoAdmin
                      mb={4}
                      btnText="🗑"
                      infoText={t("AdminTemplate.delete")}
                    />
                  </Flex>
                </CustomPopover>
                <Button onClick={getProductsFromDb} ml={4}>
                  <RepeatIcon />
                </Button>
                <Button onClick={handleNewProduct} ml={4}>
                  {t("AdminTemplate.newProduct")}
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

          <Card w="100%" mb={10} minH="20vh">
            {productsDb && (
              <Flex
                p={6}
                align="center"
                justify="stretch"
                h="100%"
                w="100%"
                flexWrap="wrap"
              >
                <StatisticsBox
                  value={purchases && purchases.length}
                  text={t("AdminTemplate.purchasesMade")}
                  color="brand.secundary"
                />
                <StatisticsBox
                  value={handleStatisticsProducts().totalProducts}
                  text={t("AdminTemplate.products")}
                  color="green.400"
                />
                <StatisticsBox
                  value={handleStatisticsProducts().totalProductsActives}
                  text={t("AdminTemplate.actives")}
                  color="green.500"
                />
                <StatisticsBox
                  value={handleStatisticsProducts().totalProductsInactives}
                  text={t("AdminTemplate.inactives")}
                  color="red.500"
                />
                <StatisticsBox
                  value={handleStatisticsProducts().totalProductsOutStock}
                  text={t("AdminTemplate.noStock")}
                  color="tomato"
                />
                <StatisticsBox
                  value={handleStatisticsProducts().totalJackets}
                  text={t("AdminTemplate.jackets")}
                  color={COLORS.jacket}
                />
                <StatisticsBox
                  value={handleStatisticsProducts().totalShirts}
                  text={t("AdminTemplate.shirts")}
                  color={COLORS.shirt}
                />
                <StatisticsBox
                  value={handleStatisticsProducts().totalShoes}
                  text={t("AdminTemplate.shoes")}
                  color={COLORS.shoes}
                />
                <StatisticsBox
                  value={handleStatisticsProducts().totalAccesories}
                  text={t("AdminTemplate.accesories")}
                  color={COLORS.accesories}
                />
              </Flex>
            )}
          </Card>

          <Card w="100%" minH={setValueResponsiveMin1280("80vh", "100%")} p={4}>
            <Tabs variant="enclosed" w="100%">
              <TabList w="100%">
                <Tab>{t("AdminTemplate.products")}</Tab>
                <Tab>{t("AdminTemplate.purchases")}</Tab>
              </TabList>

              <TabPanels w="100%">
                <TabPanel w="100%">
                  <Flex
                    direction="column"
                    align="center"
                    justify="flex-start"
                    w="100%"
                    p={10}
                  >
                    {loadingProductsDb ? (
                      <SkItemComplete />
                    ) : productsDb && productsDb.length > 0 ? (
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
                </TabPanel>
                <TabPanel w="100%">
                  <Flex
                    direction="column"
                    align="center"
                    justify="flex-start"
                    w="100%"
                    p={10}
                  >
                    {loadingProductsDb ? (
                      <SkItemComplete />
                    ) : purchases && purchases.length > 0 ? (
                      <Flex
                        direction="column"
                        align="flex-start"
                        justify="flex-start"
                        w="100%"
                      >
                        {purchases
                          .map((prod, index) => {
                            return (
                              <>
                                <Flex
                                  key={index}
                                  w="100%"
                                  justify="space-between"
                                  align="center"
                                >
                                  <PurchaseComplete item={prod} />
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
                </TabPanel>
              </TabPanels>
            </Tabs>
          </Card>
        </Flex>
      </Center>
    </>
  )
}

export default AdminTemplate
