import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [
        laravel({
			__APP_ENV__: process.env.VITE_VERCEL_ENV,
            input: 'resources/js/app.jsx',
            refresh: true,
        }),
        react(),
    ],
});
