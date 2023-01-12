install:
	npm ci

publish:
	npm publish --dry-run

lint :
	npx eslint .

fixLint:
	npx eslint --fix .

pret:
	npx prettier --write .