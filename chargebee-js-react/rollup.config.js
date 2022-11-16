import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import typescript from '@rollup/plugin-typescript';

export default {
  input: 'src/index.ts',
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
    commonjs(),
    typescript()
  ],
  external: [ 'react', 'react-dom' ]
};