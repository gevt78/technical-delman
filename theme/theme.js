import { extendTheme } from '@chakra-ui/react'
import { globalStyles } from './styles'
import { fontSizes } from './foundations/typography'
import { buttonStyles } from './components/button'
import { font } from './foundations/font'
import { textStyles } from './foundations/textStyles'
import { colors } from './foundations/color'
import { IconButtonStyle } from './components/icon-button'

export default extendTheme(
  textStyles,
  colors,
  font,
  fontSizes,
  buttonStyles,
  globalStyles,
  IconButtonStyle,
)
