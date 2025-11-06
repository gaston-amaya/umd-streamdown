import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from 'rollup-plugin-terser';
import postcss from 'rollup-plugin-postcss';
import replace from '@rollup/plugin-replace'; 

export default {
  input: 'src/index.js',

  onwarn(warning, warn) {
    if (warning.code === 'MODULE_LEVEL_DIRECTIVE' || warning.code === 'CIRCULAR_DEPENDENCY') {
      return;
    }
    warn(warning);
  },

  output: {
    file: 'dist/umd-streamdown.js',
    format: 'umd',
    name: 'Streamdown',
    globals: {
      'react': 'React',
      'react-dom': 'ReactDOM'
    },
    inlineDynamicImports: true
  },
  external: ['react', 'react-dom'],
  plugins: [
    replace({
      'process.env.NODE_ENV': JSON.stringify('production'),
      preventAssignment: true
    }),
    postcss({
      inject: true,
      minimize: true,
    }),
    resolve(),
    commonjs(),
    terser()
  ]
};