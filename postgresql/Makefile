.PHONY: up

up:
	@echo "Up postgres db ... "
	docker-compose up

.PHONY: build
build:
	@echo "Building postgres db ..."
	docker-compose up --build

.PHONY: upd
upd:
	@echo "Building postgres db and detach ..."
	docker-compose up --build -d

.PHONY: down
down:
	@echo "Downing postgres db ..."
	docker-compose down

.PHONY: downvl
downvl:
	@echo "Downing and remove volume postgres db ..."
	docker-compose down -v
