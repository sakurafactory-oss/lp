import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import TechnicalAdvantageSection from '@/components/TechnicalAdvantageSection'

describe('TechnicalAdvantageSection', () => {
    it('セクションタイトルが表示される', () => {
        render(<TechnicalAdvantageSection />)

        // セクションタイトルが表示されることを確認
        const sectionTitle = screen.getByRole('heading', { name: /技術的優位性/i })
        expect(sectionTitle).toBeInTheDocument()
    })

    it('技術スタックの情報が表示される', () => {
        render(<TechnicalAdvantageSection />)

        // フロントエンド技術スタックの情報が表示されることを確認
        const frontendStack = screen.getByText(/Next\.js/i)
        expect(frontendStack).toBeInTheDocument()

        // TypeScriptの情報が表示されることを確認
        const typescripts = screen.getAllByText(/TypeScript/i)
        expect(typescripts.length).toBeGreaterThan(0)

        // Tailwind CSSの情報が表示されることを確認
        const tailwind = screen.getByText(/Tailwind CSS/i)
        expect(tailwind).toBeInTheDocument()
    })

    it('性能指標が表示される', () => {
        render(<TechnicalAdvantageSection />)

        // 性能指標のセクションが表示されることを確認
        const performanceMetrics = screen.getByTestId('performance-metrics')
        expect(performanceMetrics).toBeInTheDocument()

        // 少なくとも1つの性能指標が表示されることを確認
        const metrics = screen.getAllByTestId('metric-item')
        expect(metrics.length).toBeGreaterThan(0)
    })

    it('技術的特徴の詳細が表示される', () => {
        render(<TechnicalAdvantageSection />)

        // 技術的特徴のセクションが表示されることを確認
        const technicalFeatures = screen.getByTestId('technical-features')
        expect(technicalFeatures).toBeInTheDocument()

        // モジュール性に関する情報が表示されることを確認
        // タイトルまたは説明文に「モジュール性」という単語が含まれていることを確認
        const features = screen.getByTestId('technical-features')
        expect(features.textContent).toMatch(/モジュール性/i)

        // スケーラビリティに関する情報が表示されることを確認
        const scalabilities = screen.getAllByText(/スケーラビリティ/i)
        expect(scalabilities.length).toBeGreaterThan(0)

        // セキュリティに関する情報が表示されることを確認
        const securities = screen.getAllByText(/セキュリティ/i)
        expect(securities.length).toBeGreaterThan(0)
    })

    it('視覚的な図表または図解が表示される', () => {
        render(<TechnicalAdvantageSection />)

        // 技術アーキテクチャの図表が表示されることを確認
        const architectureDiagram = screen.getByTestId('architecture-diagram')
        expect(architectureDiagram).toBeInTheDocument()
    })
})