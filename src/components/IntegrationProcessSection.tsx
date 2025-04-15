import React from 'react';
import { FaCheckCircle, FaClock, FaTools, FaChartLine } from 'react-icons/fa';

/**
 * 導入プロセスセクションコンポーネント
 * さくらファクトリーの導入プロセスと買収条件の柔軟性を紹介します
 */
const IntegrationProcessSection: React.FC = () => {
  const phases = [
    {
      id: 'evaluation',
      title: '評価と計画',
      duration: '1-2ヶ月',
      icon: <FaCheckCircle className="w-10 h-10 text-sakura-primary" />,
      tasks: [
        '現状分析と課題特定',
        '優先順位付けとロードマップ策定',
        '技術評価とPoC（概念実証）',
        '導入計画の策定'
      ]
    },
    {
      id: 'initial',
      title: '初期導入',
      duration: '2-3ヶ月',
      icon: <FaClock className="w-10 h-10 text-sakura-primary" />,
      tasks: [
        '基盤モジュールの導入',
        '既存システムとの初期統合',
        'パイロットプロジェクトの実施',
        '初期成果の評価'
      ]
    },
    {
      id: 'expansion',
      title: '拡張導入',
      duration: '3-6ヶ月',
      icon: <FaTools className="w-10 h-10 text-sakura-primary" />,
      tasks: [
        '追加モジュールの段階的導入',
        '統合範囲の拡大',
        '運用プロセスの最適化',
        '成果測定と調整'
      ]
    },
    {
      id: 'full-integration',
      title: '完全統合',
      duration: '6-12ヶ月',
      icon: <FaChartLine className="w-10 h-10 text-sakura-primary" />,
      tasks: [
        '全モジュールの本格導入',
        '既存システムの完全統合',
        '運用の完全移行',
        '継続的改善プロセスの確立'
      ]
    }
  ];

  const acquisitionOptions = [
    {
      title: '完全買収',
      features: [
        '知的財産権の完全譲渡',
        'ソースコードと全ドキュメントの移管',
        '開発チームの移行オプション',
        '継続的サポート契約'
      ]
    },
    {
      title: 'ライセンスモデル',
      features: [
        '永続的使用ライセンス',
        'ソースコードアクセス',
        'カスタマイズ権利',
        '定期的アップデート'
      ]
    },
    {
      title: 'サブスクリプションモデル',
      features: [
        'サービスとしての提供',
        '継続的な機能強化',
        '専門的サポート',
        '使用量ベースの課金'
      ]
    }
  ];

  return (
    <section
      id="integration-process-section"
      className="py-20 bg-gray-50"
      data-testid="integration-process-section"
    >
      <div className="container mx-auto px-4">
        <h2 className="section-title">導入プロセス</h2>

        <div className="mb-16" data-testid="process-visualization">
          <div className="relative">
            {/* プロセスの視覚的表現 */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-gray-200 -translate-y-1/2 z-0"></div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
              {phases.map((phase) => (
                <div key={phase.id} className="bg-white rounded-lg shadow-lg p-6 relative">
                  <div className="flex justify-center mb-4">
                    <div className="bg-white rounded-full p-2 border-4 border-sakura-primary/20">
                      {phase.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-center mb-2">{phase.title}</h3>
                  <p className="text-sakura-primary text-center font-medium mb-4" data-testid="phase-duration">
                    {phase.duration}
                  </p>
                  <ul className="space-y-2" data-testid="phase-tasks">
                    {phase.tasks.map((task, idx) => (
                      <li key={idx} className="flex items-start">
                        <svg
                          className="w-5 h-5 text-sakura-primary mt-0.5 mr-2 flex-shrink-0"
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
                        <span className="text-sm text-gray-700">{task}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mb-16" data-testid="acquisition-options">
          <h3 className="text-2xl font-bold text-center mb-8">買収条件の柔軟性</h3>
          <p className="text-center text-gray-600 max-w-3xl mx-auto mb-8">
            さくらファクトリーの製品・サービスは、さくらインターネット社の評価に基づく買収条件に柔軟に対応します。
            以下の買収オプションから、ニーズに最適なモデルを選択いただけます。
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {acquisitionOptions.map((option, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg p-6"
                data-testid="acquisition-option"
              >
                <h4 className="text-xl font-bold text-center mb-4">{option.title}</h4>
                <ul className="space-y-3">
                  {option.features.map((feature, idx) => (
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
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8">
            さくらファクトリーは、段階的な導入アプローチと柔軟な買収条件により、
            投資リスクを最小化しながら、最大の効果を実現することが可能です。
          </p>
          <a
            href="/docs/integration-guide.pdf"
            className="btn btn-outline inline-flex items-center"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>詳細な導入ガイドを見る</span>
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

export default IntegrationProcessSection;