import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

/**
 * ヒーローセクションコンポーネント
 * ランディングページのメインビジュアルと主要なメッセージを表示します
 */
const HeroSection: React.FC = () => {
    return (
        <section
            className="relative py-20 md:py-32"
            data-testid="hero-section"
        >
            <div
                className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between bg-gradient-to-r from-sakura-primary/10 to-sakura-accent/10"
                data-testid="hero-container"
            >
                <div className="md:w-1/2 mb-10 md:mb-0">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-sakura-secondary mb-4">
                        さくらファクトリー
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-700 mb-8">
                        さくらインターネットの未来を創造する革新的開発プラットフォーム
                    </p>
                    <p className="text-gray-600 mb-8 max-w-lg">
                        次世代モジュールとサービスを独自開発し、高品質かつ即導入可能なソリューションを提供します。
                        技術的優位性と事業拡大の可能性を明確に示し、シームレスな統合を実現します。
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <Link href="#value-proposition-section" className="btn btn-primary" role="button">
                            詳細を見る
                        </Link>
                        <Link href="#contact-section" className="btn btn-outline">
                            お問い合わせ
                        </Link>
                    </div>
                </div>
                <div className="md:w-1/2 relative">
                    <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px]">
                        <Image
                            src="/images/hero-image.svg"
                            alt="さくらファクトリーのイメージ図"
                            fill
                            className="object-contain"
                            priority
                        />
                    </div>
                    <div className="absolute -bottom-4 -right-4 bg-white rounded-lg shadow-lg p-4 hidden md:block">
                        <div className="flex items-center gap-2">
                            <div className="w-3 h-3 rounded-full bg-green-500"></div>
                            <span className="text-sm font-medium">高可用性</span>
                        </div>
                        <div className="flex items-center gap-2 mt-2">
                            <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                            <span className="text-sm font-medium">スケーラビリティ</span>
                        </div>
                        <div className="flex items-center gap-2 mt-2">
                            <div className="w-3 h-3 rounded-full bg-purple-500"></div>
                            <span className="text-sm font-medium">セキュリティ</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* 波形の装飾 */}
            <div className="absolute bottom-0 left-0 w-full overflow-hidden">
                <svg
                    className="relative block w-full h-[60px]"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1200 120"
                    preserveAspectRatio="none"
                >
                    <path
                        d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
                        className="fill-white"
                        opacity="0.25"
                    ></path>
                    <path
                        d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
                        className="fill-white"
                        opacity="0.5"
                    ></path>
                    <path
                        d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
                        className="fill-white"
                    ></path>
                </svg>
            </div>
        </section>
    );
};

export default HeroSection;