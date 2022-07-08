// vite.config.js
const path = require('path')
const { defineConfig } = require('vite')
const vue = require('@vitejs/plugin-vue');

module.exports = defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.js'),
      name: 'chargebee-js-vue-wrapper',
      fileName: (format) => `chargebee-js-vue-wrapper.${format}.js`,
      formats: ['cjs', 'es' ]
    },
    rollupOptions: {
      external: ['vue'],
      plugins: [
      ],
      output: {
        exports: "named",
        globals: {
          vue: 'Vue'
        }
      }
    }
  },
  plugins: [ vue() ],
})
