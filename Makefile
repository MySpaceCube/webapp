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
	npm run build
	pm2 start npm -- start

lint:
	npm run lint

lint.fix:
	npm run lintfix
