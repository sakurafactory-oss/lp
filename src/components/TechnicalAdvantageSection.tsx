import React from 'react';
import Image from 'next/image';

/**
 * 技術的優位性セクションコンポーネント
 * さくらファクトリーの技術的優位性を紹介します
 */
const TechnicalAdvantageSection: React.FC = () => {
    const techStack = [
        {
            category: 'フロントエンド',
            technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'React Hooks']
        },
        {
            category: 'バックエンド',
            technologies: ['Node.js', 'TypeScript', 'Express / NestJS', 'PostgreSQL / MongoDB']
        },
        {
            category: 'インフラストラクチャ',
            technologies: ['Docker', 'Kubernetes', 'さくらのクラウド', 'Terraform']
        },
        {
            category: 'セキュリティ',
            technologies: ['OAuth 2.0 / OpenID Connect', 'mTLS', 'RBAC', 'HashiCorp Vault']
        }
    ];

    const metrics = [
        { name: 'システム可用性', value: '99.99%', improvement: '90%のダウンタイム削減' },
        { name: '平均応答時間', value: '50ms', improvement: '83%の高速化' },
        { name: 'デプロイ頻度', value: '1日複数回', improvement: '10倍以上の向上' },
        { name: '障害検知時間', value: '30秒', improvement: '97%の短縮' },
        { name: 'セキュリティインシデント', value: '月0.5件', improvement: '90%の削減' }
    ];

    const features = [
        {
            title: 'モジュール性',
            description: '独立したモジュールによる構成、明確に定義されたインターフェース、疎結合・高凝集の設計により、拡張性と保守性を実現します。',
            icon: (
                <svg className="w-12 h-12 text-sakura-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg>
            )
        },
        {
            title: 'スケーラビリティ',
            description: '水平スケーリングを前提とした設計、マイクロサービスアーキテクチャの採用、非同期処理の積極的活用により、高いスケーラビリティを実現します。',
            icon: (
                <svg className="w-12 h-12 text-sakura-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
            )
        },
        {
            title: 'セキュリティ',
            description: 'セキュリティバイデザインの原則、多層防御アプローチ、最小権限の原則により、高いセキュリティレベルを実現します。',
            icon: (
                <svg className="w-12 h-12 text-sakura-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
            )
        },
        {
            title: '可観測性',
            description: '包括的なロギング、詳細なメトリクス収集、分散トレーシングにより、システムの状態を可視化し、問題の早期発見と解決を実現します。',
            icon: (
                <svg className="w-12 h-12 text-sakura-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
            )
        }
    ];

    return (
        <section
            id="technical-advantage-section"
            className="py-20 bg-white"
            data-testid="technical-advantage-section"
        >
            <div className="container mx-auto px-4">
                <h2 className="section-title">技術的優位性</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
                    <div>
                        <h3 className="text-2xl font-bold mb-6">技術スタック</h3>
                        <div className="space-y-6">
                            {techStack.map((stack, index) => (
                                <div key={index} className="bg-gray-50 rounded-lg p-6">
                                    <h4 className="font-bold mb-3">{stack.category}</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {stack.technologies.map((tech, idx) => (
                                            <span
                                                key={idx}
                                                className="bg-white px-3 py-1 rounded-full text-sm border border-gray-200 shadow-sm"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h3 className="text-2xl font-bold mb-6">性能指標</h3>
                        <div
                            className="bg-gray-50 rounded-lg p-6"
                            data-testid="performance-metrics"
                        >
                            <table className="w-full">
                                <thead>
                                    <tr className="border-b border-gray-200">
                                        <th className="text-left py-2">指標</th>
                                        <th className="text-left py-2">現状</th>
                                        <th className="text-left py-2">改善率</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {metrics.map((metric, index) => (
                                        <tr
                                            key={index}
                                            className="border-b border-gray-200 last:border-0"
                                            data-testid="metric-item"
                                        >
                                            <td className="py-3 font-medium">{metric.name}</td>
                                            <td className="py-3 text-sakura-primary font-bold">{metric.value}</td>
                                            <td className="py-3 text-green-600">{metric.improvement}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                <div className="mb-16" data-testid="technical-features">
                    <h3 className="text-2xl font-bold mb-6 text-center">技術的特徴</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {features.map((feature, index) => (
                            <div key={index} className="bg-gray-50 rounded-lg p-6 flex gap-4">
                                <div className="flex-shrink-0">
                                    {feature.icon}
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg mb-2">{feature.title}</h4>
                                    <p className="text-gray-600">{feature.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="text-center" data-testid="architecture-diagram">
                    <h3 className="text-2xl font-bold mb-6">アーキテクチャ概要</h3>
                    <div className="relative w-full h-[400px] md:h-[500px] bg-gray-50 rounded-lg p-4">
                        <Image
                            src="/images/architecture-diagram.svg"
                            alt="さくらファクトリーのアーキテクチャ図"
                            fill
                            className="object-contain p-4"
                        />
                    </div>
                    <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
                        さくらファクトリーのアーキテクチャは、モジュール性、スケーラビリティ、セキュリティ、可観測性、互換性の原則に基づいて設計されています。
                        このアーキテクチャにより、さくらインターネットの未来を創造する革新的な次世代モジュールとサービスを効率的に開発・提供し、
                        さくらインターネットのインフラに統合することが可能になります。
                    </p>
                </div>
            </div>
        </section>
    );
};

export default TechnicalAdvantageSection;