# ####################### #
# ##### Application ##### #
# ####################### #
PROJECT_NAME=spacecube_webapp

app.init: install-dev

install-dev:
	npm install
	npm run dev -- -o

install:
	npm install
	npm run generate
	npm run build
	pm2 start npm --name "webapp-beta" -- start

lint:
	npm run lint

lint.fix:
	npm run lintfix
