const plugin = require("tailwindcss/plugin");
const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: colors.black,
        },
        background: colors.white, // '#f7fff7',
        foreground: colors.zinc[900], // "#FFE5A6", // "#313638",
        secondary: {
          background: colors.blue[400],
          foreground: colors.blue[700],
        }, // '#ffe66d',
      },
      spacing: {
        "5vw": "5vw",
      },
      typography: (theme) => {
        const fontSize = (size: string) => {
          const result = theme(`fontSize.${size}`);
          return Array.isArray(result) ? result[0] : result;
        };

        const breakout = {
          marginLeft: 0,
          marginRight: 0,
          gridColumn: "2 / span 10",
        };

        return {
          DEFAULT: {
            // DEFAULT only holds shared stuff and not the things that change
            // between light/dark
            css: [
              {
                "> *": {
                  gridColumn: "1 / -1",

                  [`@media (min-width: ${theme("screens.lg")})`]: {
                    gridColumn: "3 / span 8",
                  },
                },
                p: {
                  marginTop: 0,
                  marginBottom: theme("spacing.8"),
                  fontSize: fontSize("lg"),
                },
                "> div": {
                  marginTop: 0,
                  marginBottom: theme("spacing.8"),
                  fontSize: fontSize("lg"),
                },
                a: {
                  textDecoration: "none",
                },
                "a:hover,a:focus": {
                  textDecoration: "underline",
                  outline: "none",
                },
                strong: {
                  fontWeight: theme("fontWeight.medium"),
                  fontSize: fontSize("lg"),
                },
                hr: {
                  marginTop: theme("spacing.8"),
                  marginBottom: theme("spacing.16"),
                },
                pre: {
                  color: "var(--base05)",
                  backgroundColor: "var(--base00)",
                  marginTop: 0,
                  marginBottom: theme("spacing.8"),
                  marginLeft: `-${theme("spacing.10vw")}`,
                  marginRight: `-${theme("spacing.10vw")}`,
                  padding: theme("spacing.8"),
                  borderRadius: 0,

                  [`@media (min-width: ${theme("screens.lg")})`]: {
                    borderRadius: theme("borderRadius.lg"),
                    ...breakout,
                  },
                },
                ".embed": {
                  position: "relative",
                  marginLeft: "-10vw",
                  marginRight: "-10vw",
                  [`@media (min-width: ${theme("screens.lg")})`]: {
                    ...breakout,
                  },
                },
                ".embed > div": {
                  height: "0px",
                },
                ".embed > div > iframe": {
                  height: "100% !important",
                  width: "100% !important",
                  top: "0",
                  left: "0",
                  position: "absolute",
                  border: "none",
                  borderRadius: "0 !important",
                  [`@media (min-width: ${theme("screens.lg")})`]: {
                    borderRadius: "0.5rem !important",
                  },
                },
                ul: {
                  marginTop: 0,
                  marginBottom: theme("spacing.8"),
                },
                ol: {
                  marginTop: 0,
                  marginBottom: theme("spacing.8"),
                },
                "h1, h2, h3, h4, h5, h6": {
                  marginTop: 0,
                  marginBottom: 0,
                  fontWeight: theme("fontWeight.normal"),

                  [`@media (min-width: ${theme("screens.lg")})`]: {
                    fontWeight: theme("fontWeight.medium"),
                  },
                },
                // tailwind doesn't stick to this property order, so we can't make 'h3' overrule 'h2, h3, h4'
                "h1, h2": {
                  fontSize: fontSize("2xl"),
                  marginTop: theme("spacing.16"),
                  marginBottom: theme("spacing.10"),
                  [`@media (min-width: ${theme("screens.lg")})`]: {
                    fontSize: fontSize("3xl"),
                  },
                },
                h3: {
                  fontSize: fontSize("xl"),
                  marginTop: theme("spacing.16"),
                  marginBottom: theme("spacing.10"),
                  [`@media (min-width: ${theme("screens.lg")})`]: {
                    fontSize: fontSize("2xl"),
                  },
                },
                "h4, h5, h6": {
                  fontSize: fontSize("lg"),
                  [`@media (min-width: ${theme("screens.lg")})`]: {
                    fontSize: fontSize("xl"),
                  },
                },
                img: {
                  // images are wrapped in <p>, which already has margin
                  marginTop: 0,
                  marginBottom: 0,
                  borderRadius: theme("borderRadius.lg"),
                },
                blockquote: {
                  fontWeight: theme("fontWeight.normal"),
                  border: "none",
                  borderRadius: theme("borderRadius.lg"),
                  padding: theme("spacing.8"),
                  marginTop: 0,
                  marginBottom: theme("spacing.10"),
                },
                "blockquote > :last-child": {
                  marginBottom: 0,
                },
              },
            ],
          },
          primary: {
            css: {
              "--tw-prose-body": theme("colors.orange[200]"),
              "--tw-prose-headings": theme("colors.orange[900]"),
              "--tw-prose-lead": theme("colors.orange[700]"),
              "--tw-prose-links": theme("colors.orange[900]"),
              "--tw-prose-bold": theme("colors.orange[900]"),
              "--tw-prose-counters": theme("colors.orange[600]"),
              "--tw-prose-bullets": theme("colors.orange[400]"),
              "--tw-prose-hr": theme("colors.orange[300]"),
              "--tw-prose-quotes": theme("colors.orange[900]"),
              "--tw-prose-quote-borders": theme("colors.orange[300]"),
              "--tw-prose-captions": theme("colors.orange[700]"),
              "--tw-prose-code": theme("colors.orange[900]"),
              "--tw-prose-pre-code": theme("colors.orange[100]"),
              "--tw-prose-pre-bg": theme("colors.orange[900]"),
              "--tw-prose-th-borders": theme("colors.orange[300]"),
              "--tw-prose-td-borders": theme("colors.orange[200]"),
              "--tw-prose-invert-body": theme("colors.orange[200]"),
              "--tw-prose-invert-headings": theme("colors.white"),
              "--tw-prose-invert-lead": theme("colors.orange[300]"),
              "--tw-prose-invert-links": theme("colors.white"),
              "--tw-prose-invert-bold": theme("colors.white"),
              "--tw-prose-invert-counters": theme("colors.orange[400]"),
              "--tw-prose-invert-bullets": theme("colors.orange[600]"),
              "--tw-prose-invert-hr": theme("colors.orange[700]"),
              "--tw-prose-invert-quotes": theme("colors.orange[100]"),
              "--tw-prose-invert-quote-borders": theme("colors.orange[700]"),
              "--tw-prose-invert-captions": theme("colors.orange[400]"),
              "--tw-prose-invert-code": theme("colors.white"),
              "--tw-prose-invert-pre-code": theme("colors.orange[300]"),
              "--tw-prose-invert-pre-bg": "rgb(0 0 0 / 50%)",
              "--tw-prose-invert-th-borders": theme("colors.orange[600]"),
              "--tw-prose-invert-td-borders": theme("colors.orange[700]"),
            },
          },
        };
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    plugin(function ({ addBase, addComponents, addUtilities, theme }) {
      addComponents({
        ".underlined": {
          position: "relative",
          whiteSpace: "nowrap",
        },
        ".underlined:after": {
          bottom: "-4px",
          content: '""',
          display: "block",
          height: "2px",
          left: 0,
          position: "absolute",
          transform: "scaleX(0)",
          transformOrigin: "left center",
          transition: "transform .2s ease",
          width: "100%",
        },
        ".underlined:hover:after, .underlined:focus:after": {
          backgroundColor: "currentColor",
          transform: "scaleX(1)",
        },
        ".sticky-border": {
          borderColor: theme("colors.foreground"),
          borderRadius: theme("borderRadius.xl"),
          boxShadow: `4px 4px ${theme("colors.black")}`,
          position: "relative",
        },
        ".sticky-border .page-scroll-progress": {
          backgroundColor: theme("colors.blue.400"),
          bottom: "-5px",
          height: "4px",
          maxWidth: "calc(100% - 50px)",
          position: "absolute",
        },
        ".shadow-fill": {
          boxShadow: `4px 4px 0 ${theme("colors.black")}`,
        },
        ".shadow-fill:hover": {
          "--tw-translate-x": "2px",
          "--tw-translate-y": "2px",
          "--tw-shadow": "0 0 #0000",
          "--tw-shadow-colored": "0 0 #0000",
          boxShadow:
            "var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)",
          transform:
            "translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))",
        },
        ".stack-sm": {
          boxShadow: `10px 10px 0 -1px ${theme(
            "colors.black"
          )}, 10px 10px 0 ${theme("colors.black")}`,
        },
      });
    }),
  ],
};
