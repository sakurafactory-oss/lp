#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

echo "🔍 コミット前のビルドを実行中..."
yarn build || (echo "❌ ビルドが失敗しました。コミットを中止します。" && exit 1)

echo "🧪 テストを実行中..."
yarn test || (echo "❌ テストが失敗しました。コミットを中止します。" && exit 1)

echo "🔍 リントを実行中..."
yarn lint || (echo "❌ リントが失敗しました。コミットを中止します。" && exit 1)

echo "✅ 全てのチェックが通過しました！コミットを続行します。"
