import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import ProductsSection from '@/components/ProductsSection'

describe('ProductsSection', () => {
    it('セクションタイトルが表示される', () => {
        render(<ProductsSection />)

        // セクションタイトルが表示されることを確認
        const sectionTitle = screen.getByRole('heading', { name: /製品・サービス紹介/i })
        expect(sectionTitle).toBeInTheDocument()
    })

    it('4つの主要な製品カテゴリが表示される', () => {
        render(<ProductsSection />)

        // クラウドネイティブモジュールが表示されることを確認
        const cloudNative = screen.getByText(/クラウドネイティブモジュール/i)
        expect(cloudNative).toBeInTheDocument()

        // セキュリティモジュールが表示されることを確認
        const security = screen.getByText(/セキュリティモジュール/i)
        expect(security).toBeInTheDocument()

        // AIモジュールが表示されることを確認
        const ai = screen.getByText(/AIモジュール/i)
        expect(ai).toBeInTheDocument()

        // データ分析モジュールが表示されることを確認
        const dataAnalytics = screen.getByText(/データ分析モジュール/i)
        expect(dataAnalytics).toBeInTheDocument()
    })

    it('各製品カテゴリに説明文が表示される', () => {
        render(<ProductsSection />)

        // 各製品カテゴリの説明文が表示されることを確認
        const descriptions = screen.getAllByTestId('product-description')
        expect(descriptions.length).toBeGreaterThanOrEqual(4)

        // 少なくとも1つの説明文に「クラウド」という単語が含まれていることを確認
        const cloudDescription = screen.getByText(/クラウド環境/i)
        expect(cloudDescription).toBeInTheDocument()

        // 少なくとも1つの説明文に「セキュリティ」という単語が含まれていることを確認
        const securityDescription = screen.getByText(/サイバー脅威/i)
        expect(securityDescription).toBeInTheDocument()
    })

    it('各製品カテゴリに画像またはアイコンが表示される', () => {
        render(<ProductsSection />)

        // 製品カテゴリのアイコンまたは画像が表示されることを確認
        const productImages = screen.getAllByTestId('product-image')
        expect(productImages).toHaveLength(4)
    })

    it('詳細情報へのリンクが表示される', () => {
        render(<ProductsSection />)

        // 詳細情報へのリンクが表示されることを確認
        const detailLinks = screen.getAllByRole('link', { name: /詳細を見る/i })
        expect(detailLinks.length).toBeGreaterThanOrEqual(1)
    })
})