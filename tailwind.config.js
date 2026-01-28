/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{html,ts}",
    ],
    darkMode: 'media', // Automatic based on system preferences
    theme: {
        extend: {
            colors: {
                'apple-gray': '#f5f5f7',
                'apple-text': '#1d1d1f',
                'apple-secondary': '#86868b',
            },
        },
    },
    plugins: [],
}
