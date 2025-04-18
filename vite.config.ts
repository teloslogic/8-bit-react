import react from '@vitejs/plugin-react-swc'
import { defineConfig, loadEnv } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')

  return {
    server: {
      port: Number(env.VITE_BIT_PORT)
    },
    define: {
      __APP_ENV__: JSON.stringify(env.APP_ENV)
    },
    plugins: [
      react(),
      VitePWA({
        registerType: 'prompt',
        injectRegister: 'auto',

        pwaAssets: {
          disabled: false,
          config: true
        },

        manifest: {
          name: 'Chip-8 Emulator',
          short_name: 'Chip-8',
          description: 'IBM Chip-8 Emulator as a Progressive Web Application',
          theme_color: '#ffffff'
        },

        workbox: {
          globPatterns: ['**/*.{js,css,html,svg,png,ico}'],
          cleanupOutdatedCaches: true,
          clientsClaim: true
        },

        devOptions: {
          enabled: false,
          navigateFallback: 'index.html',
          suppressWarnings: true,
          type: 'module'
        }
      })
    ]
  }
})
