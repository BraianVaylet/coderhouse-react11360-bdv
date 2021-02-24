import React from "react"
import PropTypes from "prop-types"
import { useTranslation } from "react-i18next"
// chakra-ui
import {
  Badge,
  Box,
  Button,
  Collapse,
  Flex,
  Image,
  Text,
  useDisclosure,
} from "@chakra-ui/react"
// utils
import { IMG } from "utils/images"
// hooks
import useTimeAgo from "hooks/useTimeAgo"
import useDateTimeFormat from "hooks/useDateTimeFormat"
import ItemProductList from "components/_organisms/ItemProductList"
import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons"

/**
 * ItemNotification Component
 * @component
 * @author Braian D. Vaylet
 * @description Componente de item de las notificaciones
 */
const ItemPurchases = ({ item }) => {
  const [t] = useTranslation("global")
  const timeago = useTimeAgo(item.date)
  const dateFormated = useDateTimeFormat(item.date)
  const { isOpen, onToggle } = useDisclosure()

  /**
   * handleItemImg
   * @function
   * @description retorna imagen de la notificación
   * @returns {string}
   */
  const handleItemImg = () =>
    item.count === 1 ? item.items[0].pictureUrl : IMG.SHOPPING_BAG

  /**
   * handleItemTitle
   * @function
   * @description retorna título de la notificación
   * @returns {string}
   */
  const handleItemTitle = () =>
    item.count === 1
      ? `${t("ItemNotification.bought")} ${item.items[0].title}`
      : `${t("ItemNotification.bought")} ${item.count} ${t(
          "ItemNotification.products"
        )}`

  return (
    <Box minH="10vh" w="100%">
      <Flex
        direction="row"
        justify="space-between"
        align="center"
        wrap="nowrap"
        w="100%"
        mb={5}
      >
        <Flex
          direction="row"
          justify="flex-start"
          align="center"
          wrap="nowrap"
          w="100%"
          mb={5}
        >
          <Image
            boxSize="3rem"
            borderRadius="full"
            src={handleItemImg()}
            mr="12px"
          />
          <Flex direction="column" align="flex-start" justify="center">
            <Text>
              <time title={dateFormated}>
                <b>{dateFormated}</b>
              </time>{" "}
              | {handleItemTitle()}
            </Text>
            {item.count && (
              <Badge ml="1" colorScheme="blue">
                ${item.total}
              </Badge>
            )}
            <Text fontSize=".75rem">
              <time title={dateFormated}>{timeago}</time>
            </Text>
          </Flex>
        </Flex>
        <Button onClick={onToggle}>
          {!isOpen ? <ChevronDownIcon /> : <ChevronUpIcon />}
        </Button>
      </Flex>
      <Collapse in={isOpen} animateOpacity>
        <Flex direction="column" align="flex-start" justify="center">
          <ItemProductList
            data={item.items}
            asComponent={Box}
            type="item"
            design={1}
            withSlice={false}
            withDelete={false}
          />
        </Flex>
      </Collapse>
    </Box>
  )
}

ItemPurchases.propTypes = {
  item: PropTypes.shape({
    date: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    count: PropTypes.number.isRequired,
    items: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        pictureUrl: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        count: PropTypes.number,
        stock: PropTypes.number,
        category: PropTypes.string.isRequired,
      })
    ),
  }),
}

export default ItemPurchases
