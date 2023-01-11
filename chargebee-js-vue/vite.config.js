// vite.config.js
const path = require('path')
const { defineConfig } = require('vite')
const vue = require('@vitejs/plugin-vue');
const typescript = require('@rollup/plugin-typescript');

module.exports = defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'chargebee-js-vue-wrapper',
      fileName: (format) => `chargebee-js-vue-wrapper.${format}.js`,
      formats: ['cjs', 'es' ]
    },
    rollupOptions: {
      external: ['vue'],
      plugins: [{
        ...typescript(),
        apply: 'build'
      }],
      output: {
        exports: "named",
        globals: {
          vue: 'Vue'
        },
        sourcemap: true
      }
    }
  },
  plugins: [ vue() ],
})
