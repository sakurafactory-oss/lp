import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

/**
 * フッターコンポーネント
 * サイト全体のフッター情報を提供します
 */
const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-sakura-secondary text-white py-12" role="contentinfo">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="col-span-1 md:col-span-1">
                        <Link href="/" className="inline-block mb-4">
                            <Image
                                src="/images/logo-white.svg"
                                alt="さくらファクトリーロゴ"
                                width={150}
                                height={35}
                                className="h-8 w-auto"
                            />
                        </Link>
                        <p className="text-sm text-gray-300 mb-4">
                            さくらインターネットの未来を創造する革新的開発プラットフォーム
                        </p>
                    </div>

                    <div className="col-span-1">
                        <h4 className="text-lg font-bold mb-4">製品・サービス</h4>
                        <ul className="space-y-2">
                            <li>
                                <Link href="#products-section" className="text-gray-300 hover:text-white text-sm">
                                    クラウドネイティブモジュール
                                </Link>
                            </li>
                            <li>
                                <Link href="#products-section" className="text-gray-300 hover:text-white text-sm">
                                    セキュリティモジュール
                                </Link>
                            </li>
                            <li>
                                <Link href="#products-section" className="text-gray-300 hover:text-white text-sm">
                                    AIモジュール
                                </Link>
                            </li>
                            <li>
                                <Link href="#products-section" className="text-gray-300 hover:text-white text-sm">
                                    データ分析モジュール
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className="col-span-1">
                        <h4 className="text-lg font-bold mb-4">リソース</h4>
                        <ul className="space-y-2">
                            <li>
                                <Link href="#technical-advantage-section" className="text-gray-300 hover:text-white text-sm">
                                    技術的優位性
                                </Link>
                            </li>
                            <li>
                                <Link href="#integration-process-section" className="text-gray-300 hover:text-white text-sm">
                                    導入プロセス
                                </Link>
                            </li>
                            <li>
                                <a href="/privacy-policy" className="text-gray-300 hover:text-white text-sm">
                                    プライバシーポリシー
                                </a>
                            </li>
                            <li>
                                <a href="/terms" className="text-gray-300 hover:text-white text-sm">
                                    利用規約
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="col-span-1">
                        <h4 className="text-lg font-bold mb-4">お問い合わせ</h4>
                        <p className="text-sm text-gray-300 mb-2">
                            製品・サービスに関するお問い合わせは下記までご連絡ください。
                        </p>
                        <p className="text-sm text-gray-300">
                            <a href="mailto:info@sakurafactory.jp" className="hover:text-white">
                                info@sakurafactory.jp
                            </a>
                        </p>
                        <div className="mt-4 flex space-x-4">
                            <a
                                href="https://x.com/sakurafactory"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-300 hover:text-white"
                                aria-label="X (旧Twitter)"
                            >
                                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                </svg>
                            </a>
                            <a
                                href="https://github.com/sakurafactory-oss"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-300 hover:text-white"
                                aria-label="GitHub"
                            >
                                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-700 mt-8 pt-8 text-center">
                    <p className="text-sm text-gray-400">
                        © {currentYear} さくらファクトリー. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;