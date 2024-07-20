/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"], // Mengaktifkan mode gelap dengan kelas
  content: [
    './pages/**/*.{js,jsx}', // Menargetkan semua file JS dan JSX dalam folder pages
    './components/**/*.{js,jsx}', // Menargetkan semua file JS dan JSX dalam folder components
    './app/**/*.{js,jsx}', // Menargetkan semua file JS dan JSX dalam folder app
    './src/**/*.{js,jsx}', // Menargetkan semua file JS dan JSX dalam folder src
  ],
  prefix: "", // Tidak ada prefix yang ditambahkan ke kelas Tailwind
  theme: {
    container: {
      center: true, // Mengatur container agar berada di tengah
      padding: "15px", // Padding default untuk container
    },
    screens: {
      sm: '640px', // Breakpoint untuk layar kecil
      md: '760px', // Breakpoint untuk layar menengah
      lg: '960px', // Breakpoint untuk layar besar
      xl: '1200px', // Breakpoint untuk layar ekstra besar
    },
    fontFamily: {
      primary: "var(--font-jetbrainsMono)", // Font primary menggunakan CSS variable
    },
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out", // Animasi untuk accordion down
        "accordion-up": "accordion-up 0.2s ease-out", // Animasi untuk accordion up
      },
    },
  },
  plugins: [
    require("tailwindcss-animate") // Plugin untuk animasi tambahan di TailwindCSS
  ],
};
