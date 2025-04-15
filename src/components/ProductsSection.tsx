import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

/**
 * 製品・サービス紹介セクションコンポーネント
 * さくらファクトリーの提供する製品・サービスを紹介します
 */
const ProductsSection: React.FC = () => {
    const products = [
        {
            id: 'cloud-native',
            title: 'クラウドネイティブモジュール',
            description: 'クラウド環境に最適化されたインフラストラクチャコンポーネントを提供し、デプロイメント時間の短縮、リソース利用効率の向上、運用オーバーヘッドの削減を実現します。',
            features: [
                'コンテナオーケストレーション拡張',
                'サーバーレスコンピューティング',
                'サービスメッシュ実装',
                'クラウドネイティブストレージ'
            ],
            image: '/images/cloud-native.svg'
        },
        {
            id: 'security',
            title: 'セキュリティモジュール',
            description: 'サイバー脅威の高度化と多様化に対応する次世代セキュリティソリューションを提供し、脅威検知時間の短縮、誤検知率の削減、コンプライアンス監査時間の削減を実現します。',
            features: [
                'AIベース脅威検知システム',
                'ゼロトラストアーキテクチャ実装',
                'コンテナセキュリティスキャナー',
                'セキュリティポリシーオーケストレーター'
            ],
            image: '/images/security.svg'
        },
        {
            id: 'ai',
            title: 'AIモジュール',
            description: 'データ活用とAI導入における技術的ハードルを低減し、データ分析サイクルの短縮、運用異常の早期発見、カスタマーサポート効率の向上、ユーザーエクスペリエンスのパーソナライゼーションを実現します。',
            features: [
                '予測分析プラットフォーム',
                '異常検知システム',
                '自然言語処理API',
                'レコメンデーションエンジン'
            ],
            image: '/images/ai.svg'
        },
        {
            id: 'data-analytics',
            title: 'データ分析モジュール',
            description: '増大するデータ量と複雑化する分析要件に対応する高性能データ処理ソリューションを提供し、データ処理時間の短縮、ストレージコストの削減、リアルタイム分析による意思決定時間の短縮を実現します。',
            features: [
                'リアルタイムデータパイプライン',
                '分散データ処理フレームワーク',
                '高速クエリエンジン',
                'データレイク/データウェアハウス統合'
            ],
            image: '/images/data-analytics.svg'
        }
    ];

    return (
        <section
            id="products-section"
            className="py-20 bg-gray-50"
            data-testid="products-section"
        >
            <div className="container mx-auto px-4">
                <h2 className="section-title">製品・サービス紹介</h2>

                <div className="space-y-16">
                    {products.map((product, index) => (
                        <div
                            key={product.id}
                            className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-center`}
                        >
                            <div className="md:w-1/2">
                                <div className="relative w-full h-64 md:h-80">
                                    <Image
                                        src={product.image}
                                        alt={`${product.title}のイメージ`}
                                        fill
                                        className="object-contain"
                                        data-testid="product-image"
                                    />
                                </div>
                            </div>
                            <div className="md:w-1/2">
                                <h3 className="text-2xl font-bold mb-4">{product.title}</h3>
                                <p className="text-gray-600 mb-6" data-testid="product-description">{product.description}</p>
                                <ul className="space-y-2 mb-6">
                                    {product.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-start">
                                            <svg
                                                className="w-5 h-5 text-sakura-primary mt-0.5 mr-2"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M5 13l4 4L19 7"
                                                />
                                            </svg>
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                                <Link
                                    href={`/products/${product.id}`}
                                    className="text-sakura-primary font-medium inline-flex items-center"
                                >
                                    <span>詳細を見る</span>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 ml-1"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M9 5l7 7-7 7"
                                        />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <Link href="/products" className="btn btn-primary">
                        全ての製品・サービスを見る
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default ProductsSection;