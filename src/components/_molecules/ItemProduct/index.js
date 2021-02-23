import React from "react"
import PropTypes from "prop-types"
import { useTranslation } from "react-i18next"
import { Link as RouterLink } from "react-router-dom"
// chakra-ui
import { Badge, Flex, Link, Text, Image, Box } from "@chakra-ui/react"
// routes
import { ROUTES } from "routes"
// styles
import { setValueResponsiveMax600 } from "styles/utils"
// components
import ItemCount from "components/_molecules/ItemCount" // ! AtomicDesignError
import ButtonTooltip from "components/_molecules/ButtonTooltip" // ! AtomicDesignError
import ButtonLink from "components/_atoms/ButtonLink" // ! AtomicDesignError

/**
 * ItemProducts
 * @component
 * @author Braian D. Vaylet
 * @description Componente para los menu de favoritos y del carrito
 */
const ItemProduct = ({ item, onDelete, onSave, design }) => {
  const [t] = useTranslation("global")

  return design === 1 ? (
    <Box minH="10vh">
      <Flex
        direction="row"
        justify="space-between"
        align="center"
        wrap="nowrap"
      >
        <Flex align="center">
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
        </Flex>
        {onDelete && (
          <ButtonTooltip
            ml={6}
            onClick={onDelete}
            tooltipLabel={t("ItemProduct.deleteItem")}
          >
            ❌
          </ButtonTooltip>
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
              <ButtonTooltip
                mr={4}
                size="xs"
                onClick={onDelete}
                tooltipLabel={t("ItemProduct.deleteItem")}
              >
                {t("ItemProduct.delete")}
              </ButtonTooltip>

              <ButtonTooltip
                mr={4}
                size="xs"
                onClick={onSave}
                tooltipLabel={t("ItemProduct.saveText")}
              >
                {t("ItemProduct.save")}
              </ButtonTooltip>

              <ButtonLink
                to={ROUTES.PRODUCTS + "/" + item.category}
                mr={4}
                size="xs"
              >
                {t("ItemProduct.seeMore")}
              </ButtonLink>
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
            align="flex-end"
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

ItemProduct.defaultProps = {
  design: 1,
}

ItemProduct.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    pictureUrl: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    count: PropTypes.number,
    stock: PropTypes.number,
    category: PropTypes.string,
  }),
  onDelete: PropTypes.func,
  onSave: PropTypes.func,
  /**
   * design = 1: Preparado para ser usado en el menu desplegable de la NavBar
   * design = 2: Preparado para ser usado en la pagina del carrito
   */
  design: PropTypes.number,
}

export default ItemProduct
