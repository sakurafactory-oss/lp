import React from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import ValuePropositionSection from '@/components/ValuePropositionSection';
import ProductsSection from '@/components/ProductsSection';
import TechnicalAdvantageSection from '@/components/TechnicalAdvantageSection';
import IntegrationProcessSection from '@/components/IntegrationProcessSection';
import { default as ContactSection } from '@/components/ContactSection';
import Footer from '@/components/Footer';

/**
 * ホームページコンポーネント
 * ランディングページの全セクションを統合します
 */
export default function Home() {
    return (
        <>
            <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:p-4 focus:bg-white focus:z-50">
                コンテンツにスキップ
            </a>
            <Navigation />

            <main id="main-content" className="overflow-hidden">
                <HeroSection />
                <ValuePropositionSection />
                <ProductsSection />
                <TechnicalAdvantageSection />
                <IntegrationProcessSection />
                <ContactSection />
            </main>

            <Footer />
        </>
    );
}