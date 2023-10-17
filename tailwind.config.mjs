const plugin = require('tailwindcss/plugin')
const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
            colors: {
                background: "#162847", // '#f7fff7',
                foreground: colors.orange[100], // "#FFE5A6", // "#313638",
                secondary: {
                    background: colors.orange[500],
                    foreground: colors.orange[100],
                }, // '#ffe66d',
            },
            typography: (theme) => ({
                primary: {
                    css: {
                        '--tw-prose-body': theme('colors.orange[200]'),
                        '--tw-prose-headings': theme('colors.orange[900]'),
                        '--tw-prose-lead': theme('colors.orange[700]'),
                        '--tw-prose-links': theme('colors.orange[900]'),
                        '--tw-prose-bold': theme('colors.orange[900]'),
                        '--tw-prose-counters': theme('colors.orange[600]'),
                        '--tw-prose-bullets': theme('colors.orange[400]'),
                        '--tw-prose-hr': theme('colors.orange[300]'),
                        '--tw-prose-quotes': theme('colors.orange[900]'),
                        '--tw-prose-quote-borders': theme('colors.orange[300]'),
                        '--tw-prose-captions': theme('colors.orange[700]'),
                        '--tw-prose-code': theme('colors.orange[900]'),
                        '--tw-prose-pre-code': theme('colors.orange[100]'),
                        '--tw-prose-pre-bg': theme('colors.orange[900]'),
                        '--tw-prose-th-borders': theme('colors.orange[300]'),
                        '--tw-prose-td-borders': theme('colors.orange[200]'),
                        '--tw-prose-invert-body': theme('colors.orange[200]'),
                        '--tw-prose-invert-headings': theme('colors.white'),
                        '--tw-prose-invert-lead': theme('colors.orange[300]'),
                        '--tw-prose-invert-links': theme('colors.white'),
                        '--tw-prose-invert-bold': theme('colors.white'),
                        '--tw-prose-invert-counters': theme('colors.orange[400]'),
                        '--tw-prose-invert-bullets': theme('colors.orange[600]'),
                        '--tw-prose-invert-hr': theme('colors.orange[700]'),
                        '--tw-prose-invert-quotes': theme('colors.orange[100]'),
                        '--tw-prose-invert-quote-borders': theme('colors.orange[700]'),
                        '--tw-prose-invert-captions': theme('colors.orange[400]'),
                        '--tw-prose-invert-code': theme('colors.white'),
                        '--tw-prose-invert-pre-code': theme('colors.orange[300]'),
                        '--tw-prose-invert-pre-bg': 'rgb(0 0 0 / 50%)',
                        '--tw-prose-invert-th-borders': theme('colors.orange[600]'),
                        '--tw-prose-invert-td-borders': theme('colors.orange[700]'),
                    },
                }
            }),
        },
	},
	plugins: [
        require('@tailwindcss/typography'),
        plugin(function ({ addBase, addComponents, addUtilities, theme }) {
            addComponents({
                '.sticky-border': {
                    borderColor: theme('colors.foreground'),
                    borderRadius: theme('borderRadius.xl'),
                    boxShadow: `4px 4px ${theme('colors.white')}`,
                    position: 'relative',
                },
                '.sticky-border .page-scroll-progress': {
                    backgroundColor: theme('colors.orange.500'),
                    bottom: '-5px',
                    height: '4px',
                    maxWidth: 'calc(100% - 50px)',
                    position: 'absolute'
                },
                '.shadow-fill': {
                    boxShadow: `4px 4px 0 ${theme('colors.white')}`
                },
                '.shadow-fill:hover': {
                    '--tw-translate-x': '2px',
                    '--tw-translate-y': '2px',
                    '--tw-shadow': '0 0 #0000',
                    '--tw-shadow-colored': '0 0 #0000',
                    boxShadow: 'var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)',
                    transform: 'translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))'
                },
                '.fancy': {
                    position: 'relative',
                },
                '.fancy:after': {
                    "--deco-height": "0.3125em",
                    content: '" "',
                    position: "absolute",
                    left: "0",
                    right: "0",
                    bottom: "calc(var(--deco-height) * -0.625)",
                    height: "var(--deco-height)",
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='64' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg clip-path='url(%23a)'%3E%3Cpath d='M-17 30.5C-1 22 72-4 54 13 37.9 28.2-2.5 57.5 16 55.5s72-29 104-40' stroke='currentColor' stroke-width='10'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='a'%3E%3Cpath fill='%23fff' d='M0 0h100v64H0z'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E%0A")`,
                    backgroundSize: "auto 100%",
                    backgroundRepeat: "round",
                    backgroundPosition: "0em",
                }
            })
        }),
    ],
}
