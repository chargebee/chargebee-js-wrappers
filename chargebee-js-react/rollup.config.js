import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
export default {
  input: 'src/index.js',
  output: [
    {
      file: 'dist/chargebee-js-react-wrapper.esm.js',
      format: 'es'
    },
    {
      file: 'dist/chargebee-js-react-wrapper.common.js',
      format: 'cjs'
    }
  ],
  plugins: [
    babel({
      exclude: 'node_modules/**' // only transpile our source code
    }),
    commonjs()
  ]
};