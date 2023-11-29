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

down:
	docker-compose down
down-all:
	docker-compose down --rmi all --volumes --remove-orphans