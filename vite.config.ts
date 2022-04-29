import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    proxy: {
      '/data': {
        target: 'https://bluecolored.de/bluemap',
        changeOrigin: true,
      },
      '/assets/playerheads': {
          target: 'https://bluecolored.de/bluemap',
          changeOrigin: true,
      },
      '/live': {
          target: 'https://bluecolored.de/bluemap',
          changeOrigin: true,
      }
    }
  }
});
