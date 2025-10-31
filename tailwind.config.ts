import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			'primary-color': 'var(--primary-color)',
  			'second-color': 'var(--second-color)',
  			'bg-primary': 'var(--primary-color)',
  			overlay: 'var(--overlay)',
  			lightOverlay: 'var(--light-overlay)',
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		boxShadow: {
  			primary: '0 0 1rem var(--primary-color)',
  			subprimary: '0 0 3rem var(--primary-color)'
  		},
  		backgroundSize: {
  			size: '200% 200%'
  		},
  		backgroundImage: {
  			'linear-gradient-custom-pattern': 'linear-gradient(180deg, rgba(179, 255, 253, 0) 0, rgba(255, 255, 253, .3) 45%, rgba(255, 255, 253, .3) 55%, rgba(179, 255, 253, 0));',
  			'linear-gradient-run-color': 'linear-gradient(90deg, #0ebeff, #ffdd40, #ae63e4, #47cf73, #0ebeff, #ffdd40, #ae63e4, #47cf73);'
  		},
  		keyframes: {
  			wave: {
  				'0%': {
  					transform: 'rotate(0.0deg)'
  				},
  				'10%': {
  					transform: 'rotate(14deg)'
  				},
  				'20%': {
  					transform: 'rotate(-8deg)'
  				},
  				'30%': {
  					transform: 'rotate(14deg)'
  				},
  				'40%': {
  					transform: 'rotate(-4deg)'
  				},
  				'50%': {
  					transform: 'rotate(10.0deg)'
  				},
  				'60%': {
  					transform: 'rotate(0.0deg)'
  				},
  				'100%': {
  					transform: 'rotate(0.0deg)'
  				}
  			},
  			rainbowBorder: {
  				'0%': {
  					backgroundPosition: '0 50%'
  				},
  				'100%': {
  					backgroundPosition: '200% 50%'
  				}
  			},
  			skeleton: {
  				'0%': {
  					transform: 'rotate(-36deg) translate(-35%, -430px)'
  				},
  				'60%': {
  					transform: 'rotate(-36deg) translate(-35%, 300%)'
  				},
  				'100%': {
  					transform: 'rotate(-36deg) translate(-35%, 300%)'
  				}
  			}
  		},
  		animation: {
  			'waving-hand': 'wave 2s linear',
  			'rainbow-border': 'rainbowBorder 1.5s linear infinite',
  			skeleton: 'skeleton 3s linear infinite'
  		},
  		borderRadius: {
  			inherit: 'inherit',
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	},
  	screens: {
  		sm: '640px',
  		md: '768px',
  		lg: '1024px',
  		xl: '1280px'
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
