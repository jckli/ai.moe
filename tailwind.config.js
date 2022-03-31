module.exports = {
    purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}"],
    darkMode: true, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                "pastel-blue": "#daeaf6",
                "pastel-dark-blue": "#669db2",
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
