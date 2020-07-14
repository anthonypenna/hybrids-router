import { terser } from 'rollup-plugin-terser';
import typescript from '@rollup/plugin-typescript';
import pkg from './package.json';

export default {
  input: 'src/index.ts',
  output: [
    {
      file: pkg.main,
      format: 'esm',
    },
  ],
  external: [...Object.keys(pkg.dependencies || {})],
  plugins: [typescript({ typescript: require('typescript') }), terser()],
};
