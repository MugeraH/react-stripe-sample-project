// /** @type {import('next').NextConfig} */

// const withPWA = require("next-pwa");

// module.exports = withPWA({
//   pwa: {

//   },
// });
// const runtimeCaching = require("next-pwa/cache");
const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  skipWaiting: true,
});

const nextConfig = withPWA({
  // next config
});
module.exports = nextConfig;
