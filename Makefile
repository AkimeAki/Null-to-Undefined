.PHONY: コンテナ一覧
ps:
	docker compose ps -a

.PHONY: コンテナ起動
init:
	@make down
	docker compose build --no-cache
	docker compose up -d

.PHONY: コンテナ削除
down:
	docker compose down --rmi all --volumes --remove-orphans

.PHONY: パッケージインストール
package-install:
	docker compose exec -it app npm ci

.PHONY: コンテナにアタッチ
attach:
	docker compose exec -it app bash

.PHONY: ビルド
build:
	rm -rf ./modules/*
	npx tsc
