/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    screens:{
      sm: '570px',
      md: '768px',
      lg: '992px',
      xl: '1200px'
    },
    container:{
      center: true
    },
    extend:{
      fontFamily:{
        roboto:'Roboto, sans-serif',
      },
      colors:{
        'gray-violet-10':'#faf8fc',
        'gray-violet-20':'#fbf8fd',
        'gray-violet-50':'#bbb9bb',
        'gray-violet-200':'#9f9ca0',
        'gray-violet-500':'#616061',
        'gray-violet-600':'#39333c',
        'gray-violet-700':'#3c3840',
        'violet-500':'#7c19a1',
        'gray-red-30':'#958b8b',
        'gray-red-50':'#998080',
        'gray-red-70':'#bcb2b2',
        'gray-red-100':'#5f5757',
        'purple-red':'#990e35'
      },
      spacing:{
        6.25:'25px',
        7.5:'30px',
        15:'60px',
        42:'170px',
        125:'500px',
        640:'40rem'
      },
      lineHeight:{
        7.5:'30px'
      },
      fontSize:{
        xss:'10px',
        'xs-medium':'13px'
      },
      flex:{
        2:'2 2 0'
      },
      gridTemplateColumns:{
        "new-arrival":'repeat(auto-fit,minmax(260px,1fr))',
        "featured-products":'repeat(auto-fit,minmax(270px,1fr))',
        "blog":'repeat(auto-fit,minmax(360px,1fr))',
        "brand":'repeat(auto-fit,minmax(220px,1fr))',
        "footer":'repeat(auto-fit,minmax(300px,1fr))',

      },
      backgroundImage:{
        commode:"url('/public/images/commode.png')"
      }
    },
  },
  plugins: [],
}

