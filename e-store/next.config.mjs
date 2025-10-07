/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "storage.googleapis.com",
        // port: "",
        // pathname: "/fir-auth-1c3bc.appspot.com/**",
      },
      {
        protocol: "https",
        hostname: "fakestoreapi.com",
        domains: ["fakestoreapi.com"], // allow external images from fakestoreapi.com
        // port: "",
        // pathname: "/img/**",
      },
    ],
  },
};

export default nextConfig;
