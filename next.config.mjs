/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.pinimg.com",
        port: "",
        pathname: "/**", // Allows any path on this domain
      },
      {
        protocol: "https",
        hostname: "img.freepik.com", // Another single hostname
        port: "",
        pathname: "/**", // Allows any path on this domain
      },
    ],
  },
};

export default nextConfig;
