import type { Metadata } from 'next'
import { Noto_Sans_JP } from 'next/font/google'
import './globals.css'

const notoSansJP = Noto_Sans_JP({
    subsets: ['latin'],
    weight: ['400', '500', '700'],
    variable: '--font-noto-sans-jp',
})

export const metadata: Metadata = {
    title: 'さくらファクトリー | さくらインターネットの未来を創造する革新的開発プラットフォーム',
    description: 'さくらファクトリーは、さくらインターネットの未来を創造する革新的開発プラットフォームとして、次世代モジュールとサービスを開発・提供します。',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="ja" className={notoSansJP.variable}>
            <body className="min-h-screen bg-white text-gray-900">
                <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:p-3 focus:bg-white focus:text-sakura-primary focus:z-50 focus:top-0 focus:left-0">
                    コンテンツにスキップ
                </a>
                <main id="main-content" role="main">
                    {children}
                </main>
            </body>
        </html>
    )
}