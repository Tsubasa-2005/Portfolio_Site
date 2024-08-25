.PHONY: docker
docker:
	docker compose up -d

.PHONY: sqlc
sqlc:
	sqlc generate
