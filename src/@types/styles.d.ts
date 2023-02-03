import 'styled-components'
import { defaltTheme } from '../styles/themes/default'

type themeType = typeof defaultTheme

declare module 'styled-components' {
  export interface DefaltTheme extends ThemeType {}
}
