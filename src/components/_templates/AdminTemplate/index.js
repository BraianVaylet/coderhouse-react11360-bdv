import React, { useContext, useEffect } from "react"
// chakra-ui
import {
  Box,
  Button,
  Center,
  Divider,
  Flex,
  useDisclosure,
} from "@chakra-ui/react"
// styles
import { setValueResponsiveMin1280 } from "styles/utils"
// components
import Card from "components/_atoms/Card"
import ItemComplete from "components/_molecules/ItemComplete"
import NewProductForm from "components/_organisms/NewProductForm"
import CustomModal from "components/_atoms/CustomModal"
// context
import { ProductsContext } from "context"
// firebase
import { fetchProducts } from "firebase/client"

/**
 * AdminTemplate Component
 * @component
 * @author Braian D. Vaylet
 * @description Templeate para el dashboar del admin
 */
const AdminTemplate = () => {
  const { productsDb, setProductsDb, setLoadingProductsDb } = useContext(
    ProductsContext
  )
  const { isOpen, onOpen, onClose } = useDisclosure()

  useEffect(async () => {
    if (!productsDb) {
      setLoadingProductsDb(true)
      try {
        const value = await fetchProducts()
        setProductsDb(value)
        setLoadingProductsDb(false)
      } catch (error) {
        console.log("error", error)
      }
    }
  }, [])

  return (
    <Center w="100%">
      <Flex
        p={4}
        mt={8}
        direction="column"
        align="center"
        justify="center"
        w={setValueResponsiveMin1280("72.5%", "100%")}
      >
        <Flex w="100%" justify="flex-start" mb={10}>
          <Button onClick={onOpen}>Nuevo Producto</Button>
          <CustomModal isOpen={isOpen} onClose={onClose}>
            <NewProductForm onClose={onClose} />
          </CustomModal>
        </Flex>
        <Card w="100%" minH={setValueResponsiveMin1280("80vh", "100%")} p={4}>
          <Flex
            direction="column"
            align="center"
            justify="flex-start"
            w="100%"
            p={10}
          >
            {productsDb.length > 0 ? (
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
                        <Box key={index} w="100%">
                          <ItemComplete item={prod} withDelete />
                        </Box>
                        <Divider m="1.5rem 0" />
                      </>
                    )
                  })
                  .reverse()}
              </Flex>
            ) : (
              <Flex>No hay items que mostrar</Flex>
            )}
          </Flex>
        </Card>
      </Flex>
    </Center>
  )
}

export default AdminTemplate
