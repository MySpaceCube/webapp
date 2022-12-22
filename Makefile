# ####################### #
# ##### Application ##### #
# ####################### #
PROJECT_NAME=spacecube_webapp

app.init: install

install:
	npm install
	npm run dev

lint:
	npm run lintfix
