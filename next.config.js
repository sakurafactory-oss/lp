/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ['sakura.io', 'sakura.ne.jp'],
    },
    // Vercelへのデプロイに必要な設定
    output: 'standalone',
}

module.exports = nextConfig