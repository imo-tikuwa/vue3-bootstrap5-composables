up:
	docker-compose up -d
init:
	docker-compose up -d --build
	docker-compose exec node npm install

node:
	docker-compose exec node bash
npm-dev:
	docker-compose exec node npm run dev
npm-build:
	docker-compose exec node npm run build
npm-publish:
	docker-compose exec node npm publish --access=public

# GitHub Pages用の静的ページを作成します。
# ※デプロイはGitHub Actionsによって行うのでこれはあくまで確認用のコマンドです
npm-demo-build:
	docker-compose exec node npx vite --config vite.config.demo.mts build

down:
	docker-compose down
down-all:
	docker-compose down --rmi all --volumes --remove-orphans