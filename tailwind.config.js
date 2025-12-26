/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: "class",
    content: [
        "./app/**/*.{js,jsx}",
        "./components/**/*.{js,jsx}",
    ],
    theme: {
        extend: {
            colors: {
                bg: "#0f172a",       // deep night
                accent: "#38bdf8",   // neon blue
                soft: "#a78bfa",     // lofi purple
            },
        },
    },
    plugins: [],
};
