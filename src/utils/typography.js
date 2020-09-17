import Typography from 'typography'
import parnassusTheme from 'typography-theme-parnassus'

parnassusTheme.overrideStyles = ({ adjustFontSizeTo, rhythm }, options, styles) => ({
  a: {
    textDecoration: 'none',
    color: 'purple'
  }
})

const typography = new Typography(parnassusTheme)

export default typography
