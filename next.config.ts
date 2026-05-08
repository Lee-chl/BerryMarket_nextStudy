import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: false,
  // 외부에서 이미지 가져오기 
  images:{
    remotePatterns:[
      {
        protocol:'https',
        hostname:'styangpa.blob.core.windows.net',
      }
    ]
  }
};

export default nextConfig;
