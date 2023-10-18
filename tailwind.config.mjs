const plugin = require('tailwindcss/plugin')
const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
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
                '5vw': '5vw',
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
                '.underlined': {
                    position: 'relative',
                    whiteSpace: 'nowrap'
                },
                '.underlined:after': {
                    bottom: '-4px',
                    content: '""',
                    display: 'block',
                    height: '2px',
                    left: 0,
                    position: 'absolute',
                    transform: 'scaleX(0)',
                    transformOrigin: 'left center',
                    transition: 'transform .2s ease',
                    width: '100%',
                },
                '.underlined:hover:after, .underlined:focus:after': {
                    backgroundColor: 'currentColor',
                    transform: 'scaleX(1)',
                },
                '.sticky-border': {
                    borderColor: theme('colors.foreground'),
                    borderRadius: theme('borderRadius.xl'),
                    boxShadow: `4px 4px ${theme('colors.black')}`,
                    position: 'relative',
                },
                '.sticky-border .page-scroll-progress': {
                    backgroundColor: theme('colors.blue.400'),
                    bottom: '-5px',
                    height: '4px',
                    maxWidth: 'calc(100% - 50px)',
                    position: 'absolute'
                },
                '.shadow-fill': {
                    boxShadow: `4px 4px 0 ${theme('colors.black')}`
                },
                '.shadow-fill:hover': {
                    '--tw-translate-x': '2px',
                    '--tw-translate-y': '2px',
                    '--tw-shadow': '0 0 #0000',
                    '--tw-shadow-colored': '0 0 #0000',
                    boxShadow: 'var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)',
                    transform: 'translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))'
                },
                '.stack-sm': {
                    boxShadow: `10px 10px 0 -1px ${theme('colors.black')}, 10px 10px 0 ${theme('colors.black')}`,
                }
            })
        }),
    ],
}
