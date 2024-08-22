import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    target: "esnext", // or 'es2022' to support top-level await
  },
  plugins: [react()],
});
