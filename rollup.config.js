import typescript from '@rollup/plugin-typescript';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';

const createConfig = (input, outputName) => ({
  input,
  output: [
    {
      file: `dist/${outputName}.esm.js`,
      format: 'es',
      sourcemap: true,
    },
    {
      file: `dist/${outputName}.cjs.js`,
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: `dist/${outputName}.esm.min.js`,
      format: 'es',
      sourcemap: true,
      plugins: [terser()],
    },
  ],
  plugins: [
    nodeResolve(),
    typescript({
      tsconfig: './tsconfig.json',
      declaration: true,
      declarationDir: './dist',
    }),
  ],
  treeshake: {
    moduleSideEffects: false,
    propertyReadSideEffects: false,
  },
});

export default [
  createConfig('src/index.ts', 'forge'),
  createConfig('src/utils/index.ts', 'utils'),
  createConfig('src/state/index.ts', 'state'),
  createConfig('src/dom/index.ts', 'dom'),
];
