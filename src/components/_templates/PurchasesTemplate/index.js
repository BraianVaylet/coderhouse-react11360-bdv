import React, { useEffect, useState } from "react"
import { useTranslation } from "react-i18next"
// chakra-ui
import { Flex } from "@chakra-ui/react"
// components
import Card from "components/_atoms/Card"
import SubHeader from "components/_molecules/SubHeader"
import PurchasesList from "components/_organisms/PurchasesList"
// styles
import { setValueResponsiveMin1280 } from "styles/utils"
// routes
import { ROUTES } from "routes"
// hooks
import useUser from "hooks/useUser"
// firebase
import { fetchAllPurchasesByUser } from "firebase/client"

/**
 * PurchasesTemplate Component
 * @component
 * @author Braian D. Vaylet
 * @description Componente template del historial de compras
 */
const PurchasesTemplate = () => {
  const [t] = useTranslation("global")
  const user = useUser()
  const [data, setData] = useState([])

  useEffect(() => {
    user &&
      fetchAllPurchasesByUser(user.email)
        .then((value) => {
          setData(value)
        })
        .catch((error) => console.log("error", error))
  }, [user])

  console.log("data", data)

  return (
    <Flex
      p={4}
      mt={8}
      direction="column"
      align="center"
      justify="flex-start"
      w={setValueResponsiveMin1280("72.5%", "100%")}
    >
      <SubHeader
        withTitle
        title={t("PurchasesTemplate.title")}
        backTo={ROUTES.HOME}
      />
      <Card w="100%" minH={setValueResponsiveMin1280("80vh", "100%")} p={4}>
        <PurchasesList data={data} />
      </Card>
    </Flex>
  )
}

export default PurchasesTemplate
