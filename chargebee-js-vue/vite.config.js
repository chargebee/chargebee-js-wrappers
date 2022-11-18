// vite.config.js
const path = require('path')
const { defineConfig } = require('vite')
const vue = require('@vitejs/plugin-vue');
const typescript2 = require('rollup-plugin-typescript2');

module.exports = defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.jts'),
      name: 'chargebee-js-vue-wrapper',
      fileName: (format) => `chargebee-js-vue-wrapper.${format}.js`,
      formats: ['cjs', 'es' ]
    },
    rollupOptions: {
      external: ['vue'],
      plugins: [
        {
          ...typescript2(),
          apply: 'build',
        }
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
