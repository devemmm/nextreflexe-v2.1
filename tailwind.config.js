/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/views/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'genuine-100': '#FAFAFA',
        'genuine-300': '#999999',
        'genuine-gray-200': '#E6E6E6', //new
        'genuine-gray-300': '#999999', //new
        'genuine-border-gray': '#0006291a', //new
        'genuine-blue-100': '#F7F8FA', //new
        'genuine-blue-200': '#EBEDF2',
        'genuine-blue-300': '#DFE1E6',
        'genuine-blue-400': '#CED2D9', //new
        'genuine-blue-500': '#8F9BB3', //new
        'genuine-blue-600': '#6B7A99', //new
        'genuine-blue-700': '#455473', //new
        'genuine-blue-800': '#303A50',
        'genuine-orange-100': '#FFF4E6', //new
        'genuine-yellow-100': '#F5E673', //new
        'genuine-green-300': '#9df26f', //new
        primary: '#018F55',
        secondary: '#F4F4F4',
        'highlight-blue': '#E7F3FF',
        'highlight-orange': '#FFEFD9',
        'highlight-red': '#FFE8E6', //new
        'highlight-green': '#EDFAEF', //new
        'highlight-border-blue': '#B3CCFF', //new
        'highlight-border-red': '#FFBFB3', //new
        'highlight-border-green': '#98D9A3', //new
        success: '#1DBF38',
        error: '#FF401A',
        'genuine-black': '#000629', //new
        'secondary-hover': '#1bbf38d9',
        'primary-hover': '#1a66ffde',
        'gradient-start': '#3D9EFF',
        'gradient-end': '#3353F4',
      },

      width: {
        '1/7': '15%',
        '23/100': '23%',
        '17/20': '85%',
      },
      height: {
        0.5: '0.1rem',
        50: '50%',
        '1/10': '10%',
        '17/20': '85%',
        'screen-10': '10vh',
        'screen-30': '30vh',
      },
      borderRadius: {
        'bag-xl': '20px',
      },
      fontFamily: {
        Inter: ['"Inter"', '"system-ui"', '"sans-serif"'],
      },
      fontWeight: {
        normal: 100,
        regular: 200,
        semibold: 300,
        bold: 600,
      },
      fontSize: {
        // sm: "12px",
        xsm: '0.7rem',
      },
      padding: {
        input: '0.7rem',
      },
      screens: {
        xsm: '420px',
        '3xl': '1700px',
      },
      scale: {
        40: '0.4',
      },
      transformOrigin: {
        'top-center': 'center 10vw',
      },
      boxShadow: {
        'morphism-white': '5px 5px 10px #ededed,-5px -5px 10px #ffffff',
        'morphism-inside':
          'inset 3px 3px 8px #ededed,inset -3px -2px 13px #ffffff',
        'morphism-gray-100': '3px 3px 7px #F7F8FA,-5px -5px 10px #e5e7eb',
        'carousel-blur': '10px 0 5px -2px #fff',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [import(`@tailwindcss/typography`)],
};

