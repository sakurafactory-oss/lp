import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import IntegrationProcessSection from '@/components/IntegrationProcessSection'

describe('IntegrationProcessSection', () => {
    it('セクションタイトルが表示される', () => {
        render(<IntegrationProcessSection />)

        // セクションタイトルが表示されることを確認
        const sectionTitle = screen.getByRole('heading', { name: /導入プロセス/i })
        expect(sectionTitle).toBeInTheDocument()
    })

    it('導入フェーズが順番に表示される', () => {
        render(<IntegrationProcessSection />)

        // 評価と計画フェーズが表示されることを確認
        const evaluationPhase = screen.getByText(/評価と計画/i)
        expect(evaluationPhase).toBeInTheDocument()

        // 初期導入フェーズが表示されることを確認
        const initialPhase = screen.getByText(/初期導入/i)
        expect(initialPhase).toBeInTheDocument()

        // 拡張導入フェーズが表示されることを確認
        const expansionPhase = screen.getByText(/拡張導入/i)
        expect(expansionPhase).toBeInTheDocument()

        // 完全統合フェーズが表示されることを確認
        const fullIntegrationPhases = screen.getAllByText(/完全統合/i)
        expect(fullIntegrationPhases.length).toBeGreaterThan(0)
    })

    it('各フェーズに期間情報が表示される', () => {
        render(<IntegrationProcessSection />)

        // 期間情報が表示されることを確認
        const durationInfo = screen.getAllByTestId('phase-duration')
        expect(durationInfo.length).toBeGreaterThanOrEqual(4)

        // 少なくとも1つの期間情報に「ヶ月」という単語が含まれていることを確認
        const monthTexts = screen.getAllByText(/ヶ月/i)
        expect(monthTexts.length).toBeGreaterThan(0)
    })

    it('各フェーズに主要なタスクが表示される', () => {
        render(<IntegrationProcessSection />)

        // 各フェーズのタスクリストが表示されることを確認
        const taskLists = screen.getAllByTestId('phase-tasks')
        expect(taskLists.length).toBeGreaterThanOrEqual(4)

        // 少なくとも1つのタスクに「分析」という単語が含まれていることを確認
        const analysisTask = screen.getByText(/分析/i)
        expect(analysisTask).toBeInTheDocument()

        // 少なくとも1つのタスクに「導入」という単語が含まれていることを確認
        const implementationTask = screen.getAllByText(/導入/i)
        expect(implementationTask.length).toBeGreaterThan(0)
    })

    it('買収条件の柔軟性に関する情報が表示される', () => {
        render(<IntegrationProcessSection />)

        // 買収条件に関するセクションが表示されることを確認
        const acquisitionSection = screen.getByTestId('acquisition-options')
        expect(acquisitionSection).toBeInTheDocument()

        // 少なくとも1つの買収オプションが表示されることを確認
        const acquisitionOptions = screen.getAllByTestId('acquisition-option')
        expect(acquisitionOptions.length).toBeGreaterThan(0)
    })

    it('プロセスの視覚的な表現が表示される', () => {
        render(<IntegrationProcessSection />)

        // プロセスの視覚的な表現が表示されることを確認
        const processVisualization = screen.getByTestId('process-visualization')
        expect(processVisualization).toBeInTheDocument()
    })
})