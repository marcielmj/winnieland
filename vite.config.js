import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
    base: '/winnieland/',
    resolve: {
        alias: {
            '@': resolve(__dirname, './src'),
        }
    }
})
