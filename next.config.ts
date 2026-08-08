import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      // voucher.isabelaragao.com.br → editor de voucher (arquivo estático)
      {
        source: "/",
        has: [{ type: "host", value: "voucher.isabelaragao.com.br" }],
        destination: "/voucher.html",
      },
    ];
  },
};

export default nextConfig;
