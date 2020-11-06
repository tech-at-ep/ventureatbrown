const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
        display: ['sofia-pro', ...defaultTheme.fontFamily.sans],
      }
    },
  },
  variants: {
    opacity: ['responsive', 'hover', 'focus', 'group-hover', 'group-focus'],
    textColor: ['responsive', 'hover', 'focus', 'group-hover', 'group-focus'],
    borderColor: ['responsive', 'hover', 'focus', 'active', 'group-hover', 'group-focus']
  },
  plugins: [],
  experimental: {
    applyComplexClasses: true,
    uniformColorPalette: true,
  }
}
