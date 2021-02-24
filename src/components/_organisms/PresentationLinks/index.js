import React from "react"
import { useTranslation } from "react-i18next"
// chakra-ui
import { Flex, Image, Text } from "@chakra-ui/react"
// hooks
import useUser from "hooks/useUser"
import useSetColorTheme from "hooks/useSetColorTheme"
// components
import ItemNavLink from "components/_atoms/ItemNavLink"
// routes
import { ROUTES } from "routes"

/**
 * PresentationLinks Components
 * @component
 * @author Braian D. Vaylet
 * @description Componente con info del user y links importantes
 */
const PresentationLinks = ({ ...props }) => {
  const user = useUser()
  const [t] = useTranslation("global")
  const backgroundColorItems = useSetColorTheme("gray.600", "gray.300")

  return (
    <Flex
      direction="column"
      align="flex-start"
      justify="flex-start"
      w="100%"
      p={4}
      bg={backgroundColorItems}
      borderRadius={10}
      {...props}
    >
      {user && (
        <Flex w="100%" align="center" justify="flex-start">
          <Image
            boxSize="3rem"
            borderRadius="full"
            src={user.avatar}
            alt={user.username}
            mr="12px"
          />
          <Text fontSize="1.5rem" fontWeight="bold">
            {user.username}
          </Text>
        </Flex>
      )}
      <Flex
        w="100%"
        direction="column"
        align="flex-start"
        justify="flex-start"
        p="1rem 0"
      >
        <ItemNavLink to={ROUTES.FAVOURITES} mb={2}>
          {`💕 ${t(`PresentationLinks.favourites`)}`}
        </ItemNavLink>

        <ItemNavLink to={ROUTES.NOTIFICATIONS} mb={2}>
          {`📫 ${t(`PresentationLinks.notifications`)}`}
        </ItemNavLink>

        <ItemNavLink to={ROUTES.CART} mb={2}>
          {`🛒 ${t(`PresentationLinks.cart`)}`}
        </ItemNavLink>

        <ItemNavLink to={ROUTES.PURCHASES} mb={2}>
          {`📦 ${t(`PresentationLinks.purchases`)}`}
        </ItemNavLink>
      </Flex>
    </Flex>
  )
}

export default PresentationLinks
