export default function manifest() {
    return {
        name: 'ASIF BUFFING WORKS',
        short_name: 'ASIF BUFFING',
        description: 'Professional Utensil Buffing & Polishing Services in Vasai',
        start_url: '/',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#000000',
        icons: [
            {
                src: '/favicon.ico',
                sizes: 'any',
                type: 'image/x-icon',
            },
            {
                src: '/logo.webp',
                sizes: '192x192',
                type: 'image/webp',
            },
            {
                src: '/logo.webp',
                sizes: '512x512',
                type: 'image/webp',
            },
        ],
    }
}
