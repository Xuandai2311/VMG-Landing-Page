/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
module.exports = {
  theme: {
    fontFamily: {
      sans: ['Inter']
    },
    extend: {
      colors: {
        base: '#1E9B46'
      },
      fontSize: {
        xxs: '10px'
      }
    }
  },
  variants: {},
  plugins: [],
  purge: false
}
