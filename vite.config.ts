import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'
import path from "path";

// https://vite.dev/config/
export default defineConfig({
    plugins: [vue(),tailwindcss()],
    resolve: {
        alias: {
            "@interfaces": path.resolve(__dirname, "./src/interfaces"),
            "@components": path.resolve(__dirname, "./src/components"),
            "@enums": path.resolve(__dirname, "./src/enums"),
            "@composable": path.resolve(__dirname, "./src/composable"),
            "@store": path.resolve(__dirname, "./src/store"),
        },
    },

    server: {
        host: "0.0.0.0",
    },
})