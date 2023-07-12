/** @type {import('tailwindcss').Config} */
export default {
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'uxsm': '400px',
      'xsm': '586px',
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }
      'slg': '920px',
      // => @media (min-width: 1024px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1537px',
      // => @media (min-width: 1537px) { ... }
    },
    extend: {
      fontFamily:{
        'Inter' : ['Inter', 'sans-serif']
      },
      borderRadius:{
        'xl' : '16px',
        '4xl' : '30px',
      },
      fontSize: {
        '2xl' : '25px',
        '4xl' : ['44px',{
          lineHeight : '52px'
        }],
        '5xl' : ['54px',{
          lineHeight : '1.2',
        }]
      },
      padding: {
        '6.5' : '27px',
        '7' : '30px',
        '10.5' : '42px',
        '13' : '50px',
        '15' : '60px',
        '23' : '87px',
        '25' : '105px',
        '33' : '115px',
      },
      colors:{
        blue: "#0d6efd",
        indigo: "#6610f2",
        purple:" #6f42c1",
        pink: "#d63384",
        red: "#dc3545",
        orange: "#fd7e14",
        yellow:"#ffc107",
        green:"#198754",
        teal:" #20c997",
        cyan: "#0dcaf0",
        white: "#fff",
        gray:" #6c757d",
        'gray-dark': "#343a40",
        primary: "#5b78f6",
        secondary: "#6c757d",
        success:"#198754",
        info: "#0dcaf0",
        warning: "#ffc107",
        danger:" #dc3545",
        light: "#f8f9fa",
        dark: "#212529",
        workcolor2:"#9f9f9f"
        'card-bg': '#0f0f0f',
        'card-para': '#bcbcbc',
        'btn-bg': '#323232'
      },
      backgroundImage: {
        'home-gradient': 'linear-gradient(90deg,#5b78f6 -15%, #C2EBFF 58%, #5b78f6 97%)',
        'card-background': 'linear-gradient(120deg, rgba(255,255,255,0.3), rgba(255,255,255,0.05))'
      }
    },
  },
  plugins: [],
}

