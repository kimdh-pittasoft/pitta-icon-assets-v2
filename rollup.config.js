const resolve = require('@rollup/plugin-node-resolve');
const commonjs = require('@rollup/plugin-commonjs');
const typescript = require('@rollup/plugin-typescript');
const babel = require('@rollup/plugin-babel');

module.exports = {
  input: 'icons/index.ts',
  output: [
    {
      file: 'dist/index.js',
      format: 'cjs',
      sourcemap: true
    },
    {
      file: 'dist/index.esm.js',
      format: 'esm',
      sourcemap: true
    }
  ],
  plugins: [
    typescript({ 
      tsconfig: './tsconfig.json',
      declaration: true,
      declarationDir: './dist',
      jsx: 'preserve',
      include: ['icons/**/*.ts', 'icons/**/*.tsx'],
      exclude: ['**/*.test.*', '**/node_modules/**'],
      sourceMap: true,
      inlineSources: false,
      incremental: false
    }),
    babel({
      babelHelpers: 'bundled',
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
      include: ['icons/**/*'],
      exclude: ['node_modules/**']
    }),
    resolve({ 
      preferBuiltins: false,
      extensions: ['.js', '.jsx', '.ts', '.tsx']
    }),
    commonjs()
  ],
  external: ['react'],
  preserveModules: false
};
