export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: { extend: {
    colors: {
      forest: { 50:"#f1f6f3",100:"#dde9e2",200:"#b9d3c5",500:"#2f6a4c",600:"#1f5238",700:"#17402c",800:"#112f21",900:"#0b2016" },
      ivory: { DEFAULT:"#faf7f0", dark:"#f1ece0" },
      gold: { 300:"#e2c77a", 500:"#b8964a", 600:"#9a7c38" },
      ink: "#1c2420",
    },
    fontFamily: { sans: ["Inter","ui-sans-serif","system-ui","sans-serif"] },
    keyframes: { fade: { from:{opacity:0,transform:"translateY(4px)"}, to:{opacity:1,transform:"none"} } },
    animation: { fade: "fade .18s ease-out" },
  } },
  plugins: [],
};
