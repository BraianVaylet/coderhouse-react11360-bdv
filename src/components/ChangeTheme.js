// react
import React from 'react'
import { WiHorizon, WiMoonrise } from 'react-icons/wi'
// chakra-ui
import { Button, useColorMode, Icon } from '@chakra-ui/react'

/**
 * ChangeTheme Component
 * @component
 */
const ChangeTheme = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <Button size="lg" variant="ghost" onClick={toggleColorMode}>
      {colorMode === 'light' ? <Icon boxSize="32px" as={WiMoonrise} /> : <Icon boxSize="32px" as={WiHorizon} />}
    </Button>
  )
}

export default ChangeTheme
