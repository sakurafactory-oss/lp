import React from 'react';
import { FaRocket, FaChartLine, FaCogs } from 'react-icons/fa';

/**
 * 価値提案セクションコンポーネント
 * さくらファクトリーの主要な価値提案を表示します
 */
const ValuePropositionSection: React.FC = () => {
    const valuePropositions = [
        {
            id: 'technical-innovation',
            icon: <FaRocket className="w-12 h-12 text-sakura-primary" data-testid="value-icon" />,
            title: '技術的革新性',
            description: '最先端技術を活用した次世代モジュールとサービスにより、さくらインターネットの技術的競争力を強化します。',
            benefits: [
                'デプロイメント時間の90%短縮',
                'インフラリソース利用効率の40%向上',
                '運用オーバーヘッドの60%削減',
                'スケーリングの自動化による可用性99.99%の実現'
            ]
        },
        {
            id: 'business-growth',
            icon: <FaChartLine className="w-12 h-12 text-sakura-primary" data-testid="value-icon" />,
            title: 'ビジネス成長',
            description: '新たな収益機会の創出と既存サービスの価値向上により、さくらインターネットのビジネス成長を加速します。',
            benefits: [
                '新規顧客セグメントの獲得',
                '顧客あたり平均収益の30%向上',
                '市場シェアの15%拡大',
                '競合との差別化ポイントの確立'
            ]
        },
        {
            id: 'operational-efficiency',
            icon: <FaCogs className="w-12 h-12 text-sakura-primary" data-testid="value-icon" />,
            title: '運用効率化',
            description: '高度な自動化と最適化により、運用コストの削減と品質向上を実現します。',
            benefits: [
                '運用コストの45%削減',
                '人的エラーの90%削減',
                '平均復旧時間（MTTR）の70%短縮',
                '運用チームの生産性30%向上'
            ]
        }
    ];

    return (
        <section
            id="value-proposition-section"
            className="py-20 bg-white"
            data-testid="value-proposition-section"
        >
            <div className="container mx-auto px-4">
                <h2 className="section-title">コアバリュー</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {valuePropositions.map((value) => (
                        <div
                            key={value.id}
                            className="bg-white rounded-lg shadow-lg p-8 transition-transform hover:transform hover:-translate-y-2"
                        >
                            <div className="flex justify-center mb-6">
                                {value.icon}
                            </div>
                            <h3 className="text-xl font-bold text-center mb-4">{value.title}</h3>
                            <p className="text-gray-600 mb-6 text-center">{value.description}</p>
                            <ul className="space-y-2">
                                {value.benefits.map((benefit, index) => (
                                    <li key={index} className="flex items-start">
                                        <span className="inline-block w-5 h-5 bg-sakura-primary/10 rounded-full flex-shrink-0 mr-2 mt-1">
                                            <span className="block w-3 h-3 bg-sakura-primary rounded-full m-1"></span>
                                        </span>
                                        <span className="text-sm text-gray-700">{benefit}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8">
                        さくらファクトリーは、さくらインターネットの未来を創造する革新的開発プラットフォームとして、
                        技術的革新性、ビジネス成長、運用効率化の3つのコアバリューを提供します。
                    </p>
                    <a
                        href="/docs/value-proposition.pdf"
                        className="btn btn-outline inline-flex items-center"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <span>詳細な価値提案を見る</span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 ml-2"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                            />
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default ValuePropositionSection;