import React from "react"
import { Link as RouterLink } from "react-router-dom"
import PropTypes from "prop-types"
import { useTranslation } from "react-i18next"
// chokra-ui
import {
  Button,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverFooter,
  PopoverHeader,
  PopoverTrigger,
  Portal,
  Link,
  Text,
} from "@chakra-ui/react"
import { InfoOutlineIcon } from "@chakra-ui/icons"
// router
import { ROUTES } from "routes"

/**
 * HelpBtn Component
 * @component
 * @author Braian D. Vaylet
 * @description Componente con btn y popover que muestra una ayuda
 */
const HelpBtn = ({ children }) => {
  const [t] = useTranslation("global")

  return (
    <Popover>
      <PopoverTrigger>
        <Button>
          <InfoOutlineIcon />
        </Button>
      </PopoverTrigger>
      <Portal>
        <PopoverContent>
          <PopoverArrow />
          <PopoverHeader>{t("HelpBtn.help")}</PopoverHeader>
          <PopoverCloseButton />
          <PopoverBody>{children}</PopoverBody>
          <PopoverFooter>
            <Text>
              {t("HelpBtn.forMoreHelp")}{" "}
              <Link color="brand.primary" as={RouterLink} to={ROUTES.HELP}>
                {t("HelpBtn.here")}
              </Link>
            </Text>
          </PopoverFooter>
        </PopoverContent>
      </Portal>
    </Popover>
  )
}

HelpBtn.propTypes = {
  children: PropTypes.element.isRequired,
}

export default HelpBtn
