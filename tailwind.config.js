module.exports = {
    purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}"],
    darkMode: true, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                "pastel-blue": "#daeaf6",
            },
            fontFamily: {
                kgcs: ["kgcs"],
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
