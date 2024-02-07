import type { Config } from 'tailwindcss'
import colors from 'tailwindcss/colors'
export default <Partial<Config>>{
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#E95D0F',
                    50: '#D05510',
                    100: '#B74607',
                    500: '#F59E0B',
                },
                secondary: {
                    DEFAULT: '#385273',
                    50: '#1C3049',
                    100: '#112033',
                },
                neutral: {
                    50: '#F4F7FA',
                    100: '#F1F2F7',
                    200: '#E2E8F0',
                    300: '#CBD5E1',
                    400: '#A0AAC3',
                    500: '#64748B',
                    600: '#475569',
                    700: '#334155',
                    800: '#1E293B',
                    900: '#0F172A',
                },
                info: {
                    50: '#E8EDFB',
                    100: '#BBCAF3',
                    200: '#8EA7EC',
                    300: '#6183E4',
                    400: '#3460DC',
                    500: '#1D4ED8',
                    600: '#173EAD',
                    700: '#112F82',
                    800: '#0C1F56',
                    900: '#06102B',
                },
                success: {
                    50: '#ECFDF5',
                    100: '#D1FAE5',
                    200: '#A7F3D0',
                    300: '#6EE7B7',
                    400: '#34D399',
                    500: '#10B981',
                    600: '#059669',
                    700: '#047857',
                    800: '#065F46',
                    900: '#064E3B',
                },
                warning: {
                    50: '#FFFBEB',
                    100: '#FEF3C7',
                    200: '#FDE68A',
                    300: '#FCD34D',
                    400: '#FBBF24',
                    500: '#F59E0B',
                    600: '#D97706',
                    700: '#B45309',
                    800: '#92400E',
                    900: '#78350F',
                },
                error: {
                    50: '#FEF2F2',
                    100: '#FEE2E2',
                    200: '#FECACA',
                    300: '#FCA5A5',
                    400: '#F87171',
                    500: '#EF4444',
                    600: '#DC2626',
                    700: '#B91C1C',
                    800: '#991B1B',
                    900: '#7F1D1D',
                },
            },
            white: colors.white,
            black: colors.black,
            gray: colors.gray,
            transparent: colors.transparent,
            inherit: colors.inherit,
            gridTemplateColumns: {
                16: 'repeat(16, minmax(0, 1fr))',
            },
            borderWidth: {
                10: '10px',
            },
            borderRadius: {
                DEFAULT: '4px',
                'md': '5px',
                'xl': '10px',
            },
            screens: {
                xs: '0',
                // => @media (min-width: 0) { ... }

                sm: '480px',
                // => @media (min-width: 640px) { ... }

                md: '768px',
                // => @media (min-width: 480px) { ... }

                lg: '1024px',
                // => @media (min-width: 1024px) { ... }

                xl: '1200px',
                // => @media (min-width: 1200px) { ... }

                '2xl': '1366px',
                // => @media (min-width: 1366px) { ... }

                '3xl': '3000px',
                // => @media (min-width: 1920px) { ... }
            },
            boxShadow: {
                'full-sm': '0 0 0 0.2rem rgba(56, 82, 115, .25)',
                full: '2px 2px 4px 0px rgba(0, 0, 0, 0.10), -2px -2px 4px 0px rgba(0, 0, 0, 0.10)',
            },
            fontFamily: {
                sans: ['"Open Sans"', 'sans-serif'],
            },
            fontSize: {
                '2xl': '1.063rem',
                '3xl': '1.313rem',
                '4xl': '1.5rem',
                '5xl': '1.75rem',
                '6xl': '1.25rem',
                '7xl': '2rem',
                '8xl': '2.125rem',
                '9xl': '2.5rem',
                '10xl': '3rem',
                '11xl': '3.75rem',
                '12xl': '4.5rem',
            },
            lineHeight: {
                2: '1rem',
                3: '1.5rem',
                4: '1.375rem',
                5: '1.563rem',
                6: '1.75rem',
                7: '2.125rem',
                8: '2.5rem',
                9: '3rem',
                10: '3.5rem',
                11: '4.5rem',
                12: '5rem',
            },
            zIndex: {
                toast: '2000',
            },
        }
    }
}
