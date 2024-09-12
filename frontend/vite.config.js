import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})

// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
// import { NodeGlobalsPolyfillPlugin } from '@esbuild-plugins/node-globals-polyfill'
// import { NodeModulesPolyfillPlugin } from '@esbuild-plugins/node-modules-polyfill'

// export default defineConfig({
//   plugins: [react()],
//   optimizeDeps: {
//     esbuildOptions: {
//       // Node.js global to browser globalThis
//       define: {
//         global: 'globalThis'
//       },
//       // Enable esbuild polyfill plugins
//       plugins: [
//         NodeGlobalsPolyfillPlugin({
//           buffer: true
//         }),
//         NodeModulesPolyfillPlugin()
//       ]
//     }
//   },
//   resolve: {
//     alias: {
//       buffer: 'rollup-plugin-node-polyfills/polyfills/buffer-es6',
//       util: 'rollup-plugin-node-polyfills/polyfills/util',
//       crypto: 'rollup-plugin-node-polyfills/polyfills/crypto-browserify',
//       stream: 'rollup-plugin-node-polyfills/polyfills/stream',
//     }
//   }
// })
