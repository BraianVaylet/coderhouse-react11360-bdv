import React from "react"
import PropTypes from "prop-types"
import { useTranslation } from "react-i18next"
import { Link as RouterLink } from "react-router-dom"
// chakra-ui
import {
  Badge,
  Button,
  Flex,
  Link,
  Text,
  Tooltip,
  Image,
  Box,
} from "@chakra-ui/react"
// routes
import { ROUTES } from "routes"
// styles
import { TOOLTIP_TIME } from "styles/theme"
import { setValueResponsiveMax600 } from "styles/utils"
// hooks
import useSetColorTheme from "hooks/useSetColorTheme"
// components
import ItemCount from "components/ItemCount"

/**
 * MenuItemProducts
 * @component
 * @author Braian D. Vaylet
 * @description Componente para los menu de favoritos y del carrito
 */
const MenuItemProduct = ({ item, onDelete, onSave, design = 1 }) => {
  const backgroundColorTooltip = useSetColorTheme("black", "white")
  const [t] = useTranslation("global")

  return design === 1 ? (
    <Box minH="10vh">
      <Flex
        direction="row"
        justify="space-between"
        align="center"
        wrap="nowrap"
      >
        <Image
          boxSize="3rem"
          borderRadius="full"
          src={item.pictureUrl}
          alt={item.title}
          mr="12px"
        />
        <Link as={RouterLink} to={ROUTES.ITEM_DETAIL + "/" + item.id}>
          <Text>
            <b>${item.price}</b> | {item.title}
          </Text>
          {item.count && (
            <Badge ml="1" colorScheme="green">
              x{item.count}
            </Badge>
          )}
        </Link>
        {onDelete && (
          <Tooltip
            hasArrow
            label={t("MenuItemProduct.deleteItem")}
            bg={backgroundColorTooltip}
            fontSize="md"
            openDelay={TOOLTIP_TIME}
            color
          >
            <Button ml={6} onClick={onDelete}>
              ❌
            </Button>
          </Tooltip>
        )}
      </Flex>
    </Box>
  ) : design === 2 ? (
    <Box minH="10vh">
      <Flex
        direction={setValueResponsiveMax600("column", "row")}
        justify="space-between"
        align={setValueResponsiveMax600("flex-start ", "center")}
        wrap="nowrap"
      >
        <Flex direction="row" justify="flex-start" align="center" w="50%">
          <Image
            boxSize={setValueResponsiveMax600("2.5rem", "5rem")}
            borderRadius="full"
            src={item.pictureUrl}
            alt={item.title}
            mr="20px"
          />
          <Flex direction="column" justify="center" align="flex-start">
            <Link as={RouterLink} to={ROUTES.ITEM_DETAIL + "/" + item.id}>
              <Text fontWeight="bold">{item.title}</Text>
              {item.count && (
                <Badge ml="1" colorScheme="green">
                  x{item.count}
                </Badge>
              )}
            </Link>
            <Flex mt={4}>
              <Tooltip
                hasArrow
                label={t("MenuItemProduct.deleteItem")}
                bg={backgroundColorTooltip}
                fontSize="md"
                openDelay={TOOLTIP_TIME}
                color
              >
                <Button mr={4} size="xs" onClick={onDelete}>
                  {t("MenuItemProduct.delete")}
                </Button>
              </Tooltip>

              <Tooltip
                hasArrow
                label={t("MenuItemProduct.saveText")}
                bg={backgroundColorTooltip}
                fontSize="md"
                openDelay={TOOLTIP_TIME}
                color
              >
                <Button mr={4} size="xs" onClick={onSave}>
                  {t("MenuItemProduct.save")}
                </Button>
              </Tooltip>

              <Tooltip
                hasArrow
                label={t("MenuItemProduct.similarProducts")}
                bg={backgroundColorTooltip}
                fontSize="md"
                openDelay={TOOLTIP_TIME}
                color
              >
                <Button
                  as={RouterLink}
                  to={ROUTES.PRODUCTS + "/" + item.category}
                  mr={4}
                  size="xs"
                >
                  {t("MenuItemProduct.seeMore")}
                </Button>
              </Tooltip>
            </Flex>
          </Flex>
        </Flex>
        <Flex
          direction={"row"}
          align={"center"}
          justify="space-between"
          w="50%"
          mt={setValueResponsiveMax600("2rem", "0")}
        >
          <Box mr={8}>
            <ItemCount
              stock={item.stock}
              item={item}
              design={2}
              initial={item.count}
            />
          </Box>
          <Flex
            direction="column"
            align="flex-start"
            justify="flex-start"
            minW="50%"
            w="50%"
          >
            <Text fontSize="2rem">
              <b>${item.price * item.count}</b>
            </Text>
            <Text
              color="gray.500"
              fontSize={setValueResponsiveMax600(".75rem", "1rem")}
            >
              {item.count}u. (${item.price})
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  ) : (
    <Box />
  )
}

MenuItemProduct.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    pictureUrl: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    count: PropTypes.number,
    stock: PropTypes.number,
    category: PropTypes.string.isRequired,
  }),
  onDelete: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
  /**
   * design = 1: Preparado para ser usado en el menu desplegable de la NavBar
   * design = 2: Preparado para ser usado en la pagina del carrito
   */
  design: PropTypes.number,
}

export default MenuItemProduct
