import React from "react"
import { useTranslation } from "react-i18next"
import { IoLogoLinkedin, IoLogoReact } from "react-icons/io5"
// chakra-ui
import { Flex, Text, Link, Icon, useMediaQuery } from "@chakra-ui/react"
// hooks
import useSetColorTheme from "hooks/useSetColorTheme"
// styles
import { setValueResponsiveMax400 } from "styles/utils"
import { MY_BREAKPOINTS } from "styles/theme"
// assets
import { LogoIconOutline } from "assets/icons"

/**
 * Footer Component
 * @component
 * @author Braian D. Vaylet
 * @description Componente footer de la aplicacion
 */
const Footer = () => {
  const [t] = useTranslation("global")
  const backgroundColor = useSetColorTheme("gray.900", "white")
  const [mediaQueryMax400] = useMediaQuery(MY_BREAKPOINTS.BREAK_MAX_400)

  return (
    <Flex
      direction="column"
      align="flex-start"
      justify="center"
      w="100%"
      mt={4}
      boxShadow="lg"
    >
      <Flex
        direction={setValueResponsiveMax400("column", "row")}
        justify="space-between"
        align="center"
        w="100%"
        p={6}
        bgColor={backgroundColor}
      >
        {!mediaQueryMax400 && (
          <Flex direction="row" align="center" justify="flex-start">
            <LogoIconOutline boxSize="2rem" color={!backgroundColor} mr={2} />
            <Text
              fontWeight="bold"
              color={!backgroundColor}
              fontStyle="italic"
              letterSpacing="1px"
            >
              AQUILA STORE
            </Text>
          </Flex>
        )}
        <Flex
          direction={setValueResponsiveMax400("column", "row")}
          justify="flex-end"
          align={setValueResponsiveMax400("flex-start", "center")}
        >
          <Text fontSize={setValueResponsiveMax400(".5rem", "1rem")} ml={4}>
            {t("Footer.workWithUs")}
          </Text>
          <Text fontSize={setValueResponsiveMax400(".5rem", "1rem")} ml={4}>
            {t("Footer.termsAndConditions")}
          </Text>
          <Text fontSize={setValueResponsiveMax400(".5rem", "1rem")} ml={4}>
            {t("Footer.help")}
          </Text>
          <Text fontSize={setValueResponsiveMax400(".5rem", "1rem")} ml={4}>
            {t("Footer.covidPrecautions")}
          </Text>
        </Flex>
      </Flex>

      <Flex
        p={2}
        bgColor="black"
        w="100%"
        direction="row"
        justify="space-between"
        align="center"
      >
        <Text
          color="white"
          fontSize={setValueResponsiveMax400(".5rem", ".8rem")}
        >
          Copyright ©2021
        </Text>
        <Flex direction="row" align="center" justify="flex-end">
          <Link
            as={Flex}
            align="center"
            color="white"
            fontSize={setValueResponsiveMax400(".5rem", ".8rem")}
            href="https://es.reactjs.org/"
          >
            <Icon
              color="brand.primary"
              boxSize="1.25rem"
              as={IoLogoReact}
              mr=".5rem"
            />
            ReactJs
          </Link>
          <Text m="0 1rem">|</Text>
          <Link
            as={Flex}
            align="center"
            color="white"
            fontSize={setValueResponsiveMax400(".5rem", ".8rem")}
            href="https://www.linkedin.com/in/braianvaylet/"
          >
            <Icon
              as={IoLogoLinkedin}
              boxSize="1.25rem"
              color="brand.secundary"
              mr=".5rem"
            />
            Braian D. Vaylet
          </Link>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default Footer
