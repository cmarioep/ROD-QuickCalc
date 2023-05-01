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
        manifest: {
          name: 'My Awesome App',
          short_name: 'MyApp',
          description: 'My Awesome App description',
          theme_color: '#54893e',
          icons: [
            {
              src: 'src/assets/pwa/Isotipo-192x192.png',
              sizes: '192x192',
              type: 'image/png'
            },
            {
              src: 'src/assets/pwa/Isotipo-512x512.png',
              sizes: '512x512',
              type: 'image/png'
            },
            {
              src: 'src/assets/pwa/Isotipo-512x512.png',
              sizes: '512x512',
              type: 'image/png',
              purpose: 'any maskable'
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
