import React, { useContext } from "react"
import PropTypes from "prop-types"
import { useTranslation } from "react-i18next"
import { BellIcon, ChevronDownIcon } from "@chakra-ui/icons"
// chakra-ui
import {
  Flex,
  IconButton,
  Menu,
  MenuButton,
  MenuList,
  Text,
  Button,
  MenuDivider,
  Tooltip,
  MenuItem,
} from "@chakra-ui/react"
// context
import { NotificationContext } from "context"
// hooks
import useSetColorTheme from "hooks/useSetColorTheme"
// styles
import { TOOLTIP_TIME } from "styles/theme"
// components
import ItemNotificaton from "components/ItemNotification"

/**
 * Notifications Component
 * @component
 * @author Braian D. Vaylet
 * @description Componente botón Favoritos con contador
 */
const Notifications = ({ withText = false }) => {
  const { notification } = useContext(NotificationContext)
  const [t] = useTranslation("global")
  const backgroundColorTooltip = useSetColorTheme("black", "white")

  const count = notification.length

  /**
   * renderFavourites
   * @function
   * @returns {undefined} MenuItem components
   * @description Retorna una lista de favoritos seleccionados en como un item del menú
   */
  const renderFavourites = () => {
    return notification
      .map((_notification, index) => {
        return (
          <MenuItem key={index}>
            <ItemNotificaton item={_notification} />
          </MenuItem>
        )
      })
      .reverse()
  }

  return (
    <Menu closeOnSelect={false} arrowPadding={0}>
      <MenuButton
        as={IconButton}
        variant="ghost"
        rightIcon={count > 0 && <ChevronDownIcon />}
        size="lg"
        p="0 5px"
        leftIcon={
          <Flex direction="row" align="center">
            <BellIcon w="1.5rem" h="1.5rem" />
            <Text as={Flex} align="center">
              {withText && <Text m="0 .5rem">{t("Notifications.title")}</Text>}(
              {count})
            </Text>
          </Flex>
        }
      />
      {count > 0 && (
        <MenuList>
          {renderFavourites()}
          <MenuDivider />
          <Flex direction="row" align="center" justify="flex-end">
            <Tooltip
              hasArrow
              label={t("Notifications.seeMoreTooltip")}
              bg={backgroundColorTooltip}
              fontSize="md"
              openDelay={TOOLTIP_TIME}
              color
            >
              <Button mr={2} size="lg">
                {t("Notifications.all")}
              </Button>
            </Tooltip>
          </Flex>
        </MenuList>
      )}
    </Menu>
  )
}

Notifications.propTypes = {
  withText: PropTypes.bool,
}

export default Notifications
