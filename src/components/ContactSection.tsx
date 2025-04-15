"use client";

import React, { useState } from 'react';

/**
 * お問い合わせセクションコンポーネント
 * 問い合わせフォームと連絡先情報を提供します
 */
const ContactSection = () => {
    // フォームの状態管理
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        department: '',
        message: ''
    });

    // バリデーションエラーの状態管理
    const [errors, setErrors] = useState({
        name: '',
        email: '',
        message: ''
    });

    // 送信状態の管理
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);

    // 入力値の変更ハンドラ
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));

        // 入力時にエラーをクリア
        if (errors[name as keyof typeof errors]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };

    // フォーム送信ハンドラ
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // バリデーション
        const newErrors = {
            name: formData.name ? '' : '必須項目です',
            email: formData.email ? (isValidEmail(formData.email) ? '' : 'メールアドレスの形式が正しくありません') : '必須項目です',
            message: formData.message ? '' : '必須項目です'
        };

        setErrors(newErrors);

        // エラーがある場合は送信しない
        if (newErrors.name || newErrors.email || newErrors.message) {
            return;
        }

        // 送信処理
        setIsSubmitting(true);

        // 実際のAPIエンドポイントに送信する処理をここに実装
        // ここではモックの成功レスポンスを返す
        setTimeout(() => {
            setIsSubmitting(false);
            setSubmitSuccess(true);

            // フォームをリセット
            setFormData({
                name: '',
                email: '',
                department: '',
                message: ''
            });

            // 成功メッセージを一定時間後に消す
            setTimeout(() => {
                setSubmitSuccess(false);
            }, 5000);
        }, 1000);
    };

    // メールアドレスのバリデーション
    const isValidEmail = (email: string): boolean => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    return (
        <section
            id="contact-section"
            className="py-20"
            data-testid="contact-section"
        >
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12">お問い合わせ</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* お問い合わせフォーム */}
                    <div>
                        <h3 className="text-2xl font-bold mb-6">お問い合わせフォーム</h3>

                        {submitSuccess && (
                            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6">
                                お問い合わせを受け付けました。担当者より折り返しご連絡いたします。
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                                    お名前 <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-sakura-primary ${errors.name ? 'border-red-500' : 'border-gray-300'
                                        }`}
                                />
                                {errors.name && (
                                    <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                                )}
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                                    メールアドレス <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-sakura-primary ${errors.email ? 'border-red-500' : 'border-gray-300'
                                        }`}
                                />
                                {errors.email && (
                                    <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                                )}
                            </div>

                            <div>
                                <label htmlFor="department" className="block text-gray-700 font-medium mb-2">
                                    部署/役職
                                </label>
                                <input
                                    type="text"
                                    id="department"
                                    name="department"
                                    value={formData.department}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sakura-primary"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                                    お問い合わせ内容 <span className="text-red-500">*</span>
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={5}
                                    value={formData.message}
                                    onChange={handleChange}
                                    className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-sakura-primary ${errors.message ? 'border-red-500' : 'border-gray-300'
                                        }`}
                                />
                                {errors.message && (
                                    <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                                )}
                            </div>

                            <div className="flex items-center">
                                <input
                                    type="checkbox"
                                    id="privacy-policy"
                                    className="mr-2"
                                    required
                                />
                                <label htmlFor="privacy-policy" className="text-sm text-gray-700">
                                    <a href="/privacy-policy" className="text-sakura-primary hover:underline" target="_blank" rel="noopener noreferrer">
                                        プライバシーポリシー
                                    </a>
                                    に同意します
                                </label>
                            </div>

                            <div>
                                <button
                                    type="submit"
                                    className="w-full px-6 py-3 bg-sakura-primary text-white font-medium rounded-md hover:bg-sakura-primary/90 transition-colors"
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? '送信中...' : '送信'}
                                </button>
                            </div>
                        </form>
                    </div>

                    {/* 連絡先情報 */}
                    <div data-testid="contact-info">
                        <h3 className="text-2xl font-bold mb-6">連絡先情報</h3>

                        <div className="bg-gray-50 rounded-lg p-6 mb-8">
                            <p className="text-gray-700 mb-4">
                                製品・サービスに関するお問い合わせは、フォームまたは下記の連絡先までご連絡ください。
                            </p>

                            <div className="space-y-4">
                                <div className="flex items-start">
                                    <svg
                                        className="w-5 h-5 text-sakura-primary mt-1 mr-3"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                        />
                                    </svg>
                                    <div>
                                        <p className="font-medium">メールアドレス</p>
                                        <a
                                            href="mailto:info@sakurafactory.jp"
                                            className="text-sakura-primary hover:underline"
                                        >
                                            info@sakurafactory.jp
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <svg
                                        className="w-5 h-5 text-sakura-primary mt-1 mr-3"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                        />
                                    </svg>
                                    <div>
                                        <p className="font-medium">対応時間</p>
                                        <p>平日 9:00 - 18:00（土日祝日・年末年始を除く）</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gray-50 rounded-lg p-6">
                            <h4 className="font-bold mb-4">よくあるご質問</h4>

                            <div className="space-y-4">
                                <div>
                                    <h5 className="font-medium mb-2">Q. 導入にはどのくらいの期間がかかりますか？</h5>
                                    <p className="text-gray-700">
                                        A. 導入規模や要件によって異なりますが、基本的には評価・計画から完全統合まで6〜12ヶ月程度を想定しています。
                                        段階的な導入も可能ですので、詳細はお問い合わせください。
                                    </p>
                                </div>

                                <div>
                                    <h5 className="font-medium mb-2">Q. 既存システムとの互換性はありますか？</h5>
                                    <p className="text-gray-700">
                                        A. さくらインターネットのインフラとの互換性を最優先に設計されています。
                                        統合アダプターフレームワークやレガシーシステムコネクターにより、シームレスな統合を実現します。
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;