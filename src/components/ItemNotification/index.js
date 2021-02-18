import React from "react"
import PropTypes from "prop-types"
import { useTranslation } from "react-i18next"
import { Link as RouterLink } from "react-router-dom"
// chakra-ui
import { Badge, Box, Flex, Image, Link, Text } from "@chakra-ui/react"
// routes
import { ROUTES } from "routes"
// utils
import { IMG } from "utils/images"
// hooks
// import useTimeAgo from "hooks/useTimeAgo"
// import useDateTimeFormat from "hooks/useDateTimeFormat"

/**
 * ItemNotification Component
 * @component
 * @author Braian D. Vaylet
 * @description Componente de item de las notificaciones
 */
const ItemNotificaton = ({ item }) => {
  const [t] = useTranslation("global")
  // const timeago = useTimeAgo(item.date)
  // const createdAtFormated = useDateTimeFormat(item.date)
  console.log("t", t)

  const handleItemImg = () =>
    item.count === 1 ? item.items.pictureUrl : IMG.SHOPPING_BAG

  const renderItemTitle = () =>
    item.count === 1
      ? `Compraste ${item.items.title}`
      : `Compraste ${item.count} productos`

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
        <Link as={RouterLink} to={ROUTES.ITEM_DETAIL + "/" + item.items[0].id}>
          <Text>
            {/* <time title={createdAtFormated}>{timeago}</time> |{" "} */}
            {renderItemTitle()}
          </Text>
          {item.count && (
            <Badge ml="1" colorScheme="blue">
              ${item.total}
            </Badge>
          )}
        </Link>
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
