import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from "vite-plugin-pwa";




// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA(
      {
        registerType: 'autoUpdate',
        workbox: {
          globPatterns: ['**/*.{js,css,html,png,webp}'],
        },
        manifest: {
          name: 'ROD-QuickCalc',
          short_name: 'QuickCalc',
          description: 'Calculos electricos rapidos',
          background_color: '#ffffff',
          theme_color: '#54893e',
          icons: [
            {
              src: '/Isotipo-192x192.png',
              sizes: '192x192',
              type: 'image/png'
            },
            {
              src: '/Isotipo-512x512.png',
              sizes: '512x512',
              type: 'image/png'
            },
            {
              src: '/Isotipo-512x512.png',
              sizes: '512x512',
              type: 'image/png',
              purpose: 'maskable'
            },

          ],
          handler: "CacheFirst",
          devOptions: {
            enabled: true
          }
        }
      }
    )
  ],
})
