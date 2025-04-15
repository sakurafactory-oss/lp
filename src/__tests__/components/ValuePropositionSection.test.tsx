import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import ValuePropositionSection from '@/components/ValuePropositionSection'

describe('ValuePropositionSection', () => {
    it('セクションタイトルが表示される', () => {
        render(<ValuePropositionSection />)

        // セクションタイトルが表示されることを確認
        const sectionTitle = screen.getByRole('heading', { name: /コアバリュー/i })
        expect(sectionTitle).toBeInTheDocument()
    })

    it('3つの主要な価値提案が表示される', () => {
        render(<ValuePropositionSection />)

        // 技術的革新性の価値提案が表示されることを確認
        const innovations = screen.getAllByText(/技術的革新性/i)
        expect(innovations.length).toBeGreaterThan(0)

        // ビジネス成長の価値提案が表示されることを確認
        const growths = screen.getAllByText(/ビジネス成長/i)
        expect(growths.length).toBeGreaterThan(0)

        // 運用効率化の価値提案が表示されることを確認
        const efficiencies = screen.getAllByText(/運用効率化/i)
        expect(efficiencies.length).toBeGreaterThan(0)
    })

    it('各価値提案に説明文が表示される', () => {
        render(<ValuePropositionSection />)

        // 技術的革新性の説明文が表示されることを確認
        const innovationDesc = screen.getByText(/最先端技術を活用した次世代モジュールとサービス/)
        expect(innovationDesc).toBeInTheDocument()

        // ビジネス成長の説明文が表示されることを確認
        const growthDesc = screen.getByText(/新たな収益機会の創出と既存サービスの価値向上/)
        expect(growthDesc).toBeInTheDocument()

        // 運用効率化の説明文が表示されることを確認
        const efficiencyDesc = screen.getByText(/高度な自動化と最適化により、運用コストの削減と品質向上/)
        expect(efficiencyDesc).toBeInTheDocument()
    })

    it('各価値提案にアイコンが表示される', () => {
        render(<ValuePropositionSection />)

        // アイコンが3つ表示されることを確認
        const icons = screen.getAllByTestId(/value-icon/i)
        expect(icons).toHaveLength(3)
    })
})