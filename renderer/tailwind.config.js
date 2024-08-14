// tailwind.config.js
const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./renderer/layouts/**/*.{js,ts,jsx,tsx,mdx}",
        "./renderer/pages/**/*.{js,ts,jsx,tsx}",
        "./renderer/components/**/*.{js,ts,jsx,tsx}",
        "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
    ],
    theme: {
        extend: {
            colors: {
                "color-background-brand-hover": "var(--color-background-brand-hover)",
                "color-background-default-default": "var(--color-background-default-default)",
                "color-background-neutral-tertiary": "var(--color-background-neutral-tertiary)",
                "color-background-neutral-tertiary-hover": "var(--color-background-neutral-tertiary-hover)",
                "color-border-brand-default": "var(--color-border-brand-default)",
                "color-border-neutral-secondary": "var(--color-border-neutral-secondary)",
                "color-primitives-brand-800": "var(--color-primitives-brand-800)",
                "color-primitives-slate-200": "var(--color-primitives-slate-200)",
                "color-primitives-slate-300": "var(--color-primitives-slate-300)",
                "color-primitives-slate-600": "var(--color-primitives-slate-600)",
                "color-text-brand-on-brand": "var(--color-text-brand-on-brand)",
                "color-text-default-default": "var(--color-text-default-default)",
                "variable-collection-background": "var(--variable-collection-background)",
            },
            fontFamily: {
                "single-line-body-base": "var(--single-line-body-base-font-family)",
            },
            boxShadow: {
                "drop-shadow": "var(--drop-shadow)",
            },
        },
    },
    darkMode: "class",
    plugins: [nextui()]
};
