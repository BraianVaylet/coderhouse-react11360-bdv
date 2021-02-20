import React from "react"
import PropTypes from "prop-types"
import { useTranslation } from "react-i18next"
// chakra-ui
import { Badge, Box, Flex, Image, Text } from "@chakra-ui/react"
// utils
import { IMG } from "utils/images"
// hooks
import useTimeAgo from "hooks/useTimeAgo"
import useDateTimeFormat from "hooks/useDateTimeFormat"

/**
 * ItemNotification Component
 * @component
 * @author Braian D. Vaylet
 * @description Componente de item de las notificaciones
 */
const ItemNotificaton = ({ item }) => {
  const [t] = useTranslation("global")
  const timeago = useTimeAgo(item.date)
  const dateFormated = useDateTimeFormat(item.date)

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
    </Box>
  )
}

ItemNotificaton.propTypes = {
  item: PropTypes.shape({
    date: PropTypes.string.isRequired,
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

export default ItemNotificaton
