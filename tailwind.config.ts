import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: { 
       xl: "1484px",
       xxl: "1920px"
      },      
      boxShadow: {
        'custom': '0px 0px 80px 0px #CDCDCD40',
      },
      color: {

      },
      fontFamily:{
        inter: ["inter","sans", "serif"],
        greatvibes:["Great Vibes","sans", "cursive"],
        miniver: ["miniver","sans"],
        helvetica: ['Helvetica', "Sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
