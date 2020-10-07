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
    opacity: ({ before }) => before(['group-hover'])
  },
  plugins: [],
  experimental: {
    applyComplexClasses: true,
    uniformColorPalette: true,
  }
}
