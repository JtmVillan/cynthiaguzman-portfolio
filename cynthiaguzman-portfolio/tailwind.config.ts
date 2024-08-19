import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [
    require("daisyui"),  
    require('@tailwindcss/typography'),
  ],
  daisyui: {
    themes: [ "light",
              "dark",
              "cupcake",
              "bumblebee",
              "emerald",
              "corporate",
              "synthwave",
              "retro",
              "cyberpunk",
              "valentine",
              "halloween",
              "garden",
              "forest",
              "aqua",
              "lofi",
              "pastel",
              "fantasy",
              "wireframe",
              "black",
              "luxury",
              "dracula",
              "cmyk",
              "autumn",
              "business",
              "acid",
              "lemonade",
              "night",
              "coffee",
              "winter",
              "dim",
              "nord",
              "sunset",

    {
      mytheme: {
      
        "primary": "#51292C",
              
        "secondary": "#101719",
              
        "accent": "#60E1E0",
              
        "neutral": "#EAF4F4",
              
        "base-100": "#2F7561",
              
        "info": "#0099ff",
              
        "success": "#00fb8a",
              
        "warning": "#ffad00",
              
        "error": "#ff6d8d",
              },
            },
  ],

  },  
}
export default config
