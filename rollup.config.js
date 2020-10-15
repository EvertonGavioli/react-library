import typescript from 'rollup-plugin-typescript2';
import autoExternal from 'rollup-plugin-auto-external';
import del from 'rollup-plugin-delete';
import pkg from './package.json';
import svgr from '@svgr/rollup';

export default [
  {
    input: 'src/index.ts',
    output: [
      { file: pkg.main, format: 'cjs' },
      { file: pkg.module, format: 'esm' },
    ],
    plugins: [del({ targets: ['dist/*'] }), typescript(), autoExternal(), svgr()],
    external: ['@material-ui/core/styles'],
  },
];
