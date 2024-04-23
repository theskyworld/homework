/** @type {import('postcss-load-config').Config} */
import px2rem from "postcss-px2rem";
const postcss = px2rem({
  remUnit: 16,
});
const config = {
  plugins: {
    tailwindcss: {},
    postcss,
  },
};

export default config;
