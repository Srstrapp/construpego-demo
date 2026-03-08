/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{html,ts}",
    ],
    darkMode: 'media', // Automatic based on system preferences (Recommended for Apple Style)
    theme: {
        extend: {
            colors: {
                'construpego-red': '#E30613',
                'construpego-green': '#009640',
                'apple-light': '#F5F5F7',
                'apple-dark': '#000000',
                'apple-gray': '#86868B',
                'apple-textPrimary': '#1D1D1F',
                'apple-textDarkPrimary': '#F5F5F7',
            },
            borderRadius: {
                'apple': '2.5rem', // iOS/macOS style large radius
            },
            backdropBlur: {
                'apple': '20px',
            }
        },
    },
    plugins: [],
}
