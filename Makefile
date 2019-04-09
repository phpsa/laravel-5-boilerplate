dir=${CURDIR}
htdocs=php
project= $(shell basename $(CURDIR))
phpUID=${shell docker container ls --filter name=${project}_php -q}
databaseUID=${shell docker container ls --filter name=${project}_database -q}

start:
	@docker-compose up -d

stop:
	@docker-compose down

restart: stop start

ssh:
	@docker exec -it ${phpUID} sh

exec:
	@docker exec -it ${phpUID} $$cmd

phpartisanoldphp:
	@make exec cmd="php artisan $$cmd"

info:
	@make exec cmd="php artisan --version"
	@make exec cmd="php --version"

seed:
	@make exec cmd="php artisan db:seed"

migrate:
	@make exec cmd="php artisan migrate"

composer-require:
	@docker-compose run --rm composer require $(filter-out $@,$(MAKECMDGOALS))

composer-install-prod:
	@docker-compose run --rm composer install --no-dev

composer-install:
	@docker-compose run --rm composer install

composer-update:
	@docker-compose run --rm composer update

prepare:
	mkdir -p $(dir)/reports/coverage

phpunit:
	@make exec cmd="vendor/bin/phpunit -c phpunit.xml --log-junit reports/phpunit.xml --coverage-html reports/coverage --coverage-clover reports/coverage.xml"

npm-install:
	@docker-compose run --rm node npm install

yarn:
	@docker-compose run --rm node yarn $(filter-out $@,$(MAKECMDGOALS))

phpartisan:
	@make exec cmd="php artisan $(filter-out $@,$(MAKECMDGOALS))"

deploy:
	@make start
	@make composer-install
	@make yarn


%:
    @: