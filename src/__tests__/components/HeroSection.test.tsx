import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import HeroSection from '@/components/HeroSection'

describe('HeroSection', () => {
    it('正しいタイトルとサブタイトルが表示される', () => {
        render(<HeroSection />)

        // タイトルが表示されることを確認
        const title = screen.getByRole('heading', { level: 1 })
        expect(title).toBeInTheDocument()
        expect(title).toHaveTextContent('さくらファクトリー')

        // サブタイトルが表示されることを確認
        const subtitle = screen.getByText(/さくらインターネットの未来を創造する革新的開発プラットフォーム/)
        expect(subtitle).toBeInTheDocument()
    })

    it('CTAボタンが表示される', () => {
        render(<HeroSection />)

        // CTAボタンが表示されることを確認
        const ctaButton = screen.getByRole('button', { name: /詳細を見る/i })
        expect(ctaButton).toBeInTheDocument()
    })

    it('背景画像またはデザイン要素が存在する', () => {
        render(<HeroSection />)

        // ヒーローセクションのコンテナが存在することを確認
        const heroContainer = screen.getByTestId('hero-container')
        expect(heroContainer).toBeInTheDocument()

        // 背景スタイルが適用されていることを確認（クラス名で確認）
        expect(heroContainer).toHaveClass('bg-gradient-to-r')
    })
})