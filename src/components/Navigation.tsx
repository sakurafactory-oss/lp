"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

/**
 * ナビゲーションコンポーネント
 * サイト全体のナビゲーションを提供します
 */
const Navigation = () => {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="bg-white shadow-md py-4" role="navigation">
            <div className="container mx-auto px-4 flex justify-between items-center">
                <div className="flex items-center">
                    <Link href="/" className="flex items-center">
                        <Image
                            src="/images/logo.svg"
                            alt="さくらファクトリーロゴ"
                            width={180}
                            height={40}
                            className="h-10 w-auto"
                        />
                    </Link>
                </div>

                {/* モバイルメニューボタン */}
                <div className="md:hidden">
                    <button
                        type="button"
                        className="text-gray-600 hover:text-sakura-primary focus:outline-none"
                        onClick={toggleMenu}
                        aria-label={isMenuOpen ? 'メニューを閉じる' : 'メニューを開く'}
                    >
                        <svg
                            className="h-6 w-6"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            {isMenuOpen ? (
                                <path d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>

                {/* デスクトップメニュー */}
                <div className="hidden md:flex items-center space-x-8">
                    <Link href="#value-proposition-section" className="text-gray-700 hover:text-sakura-primary">
                        コアバリュー
                    </Link>
                    <Link href="#products-section" className="text-gray-700 hover:text-sakura-primary">
                        製品・サービス
                    </Link>
                    <Link href="#technical-advantage-section" className="text-gray-700 hover:text-sakura-primary">
                        技術的優位性
                    </Link>
                    <Link href="#integration-process-section" className="text-gray-700 hover:text-sakura-primary">
                        導入プロセス
                    </Link>
                    <Link
                        href="#contact-section"
                        className="px-6 py-3 bg-sakura-primary text-white font-medium rounded-md hover:bg-sakura-primary/90 transition-colors"
                    >
                        お問い合わせ
                    </Link>
                </div>
            </div>

            {/* モバイルメニュー */}
            <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
                    <Link
                        href="#value-proposition-section"
                        className="block px-3 py-2 text-gray-700 hover:text-sakura-primary"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        コアバリュー
                    </Link>
                    <Link
                        href="#products-section"
                        className="block px-3 py-2 text-gray-700 hover:text-sakura-primary"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        製品・サービス
                    </Link>
                    <Link
                        href="#technical-advantage-section"
                        className="block px-3 py-2 text-gray-700 hover:text-sakura-primary"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        技術的優位性
                    </Link>
                    <Link
                        href="#integration-process-section"
                        className="block px-3 py-2 text-gray-700 hover:text-sakura-primary"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        導入プロセス
                    </Link>
                    <Link
                        href="#contact-section"
                        className="block px-3 py-2 bg-sakura-primary text-white rounded-md"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        お問い合わせ
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navigation;