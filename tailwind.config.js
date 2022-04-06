module.exports = {
    purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}"],
    darkMode: true, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                "pastel-blue": "#daeaf6",
                "pastel-dark-blue": "#669db2",
                "pastel-turquoise": "#90c1c2",
                "pastel-mint-green": "#5e897e",
                "pastel-green": "#addfac",
                "pastel-dark-green": "#4c8d4c",
                "pastel-pink": "#fce1e4",
                "pastel-dark-pink": "#df9ea3",
            },
            fontFamily: {
                kgcs: ["kgcs"],
                wildwords: ["wildwords"],
            },
            screens: {
                "smd": "700px",
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
