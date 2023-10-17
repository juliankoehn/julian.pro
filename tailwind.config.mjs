const plugin = require('tailwindcss/plugin')
const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
            colors: {
                background: '#f7fff7',
                foreground: "#313638",
                secondary: colors.orange[500], // '#ffe66d',
            }
        },
	},
	plugins: [
        plugin(function ({ addBase, addComponents, addUtilities, theme }) {
            addComponents({
                '.sticky-border': {
                    borderColor: theme('colors.foreground'),
                    borderRadius: theme('borderRadius.xl'),
                    boxShadow: `4px 4px ${theme('colors.foreground')}`,
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
                    boxShadow: `4px 4px 0 ${theme('colors.foreground')}`
                },
                '.shadow-fill:hover': {
                    '--tw-translate-x': '2px',
                    '--tw-translate-y': '2px',
                    '--tw-shadow': '0 0 #0000',
                    '--tw-shadow-colored': '0 0 #0000',
                    boxShadow: 'var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)',
                    transform: 'translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))'
                },
            })
        }),
    ],
}
