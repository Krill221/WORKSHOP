#!sh
pnpm i cypress
pnpm i dotenv --save
pnpm i @badeball/cypress-cucumber-preprocessor
pnpm i -D @cypress/webpack-preprocessor
pnpm add -D typescript @types/node
pnpm i ts-loader
pnpm i serve
tsc --init
npx cypress open
# copy cypress config from
# change config different integrations: https://github.com/badeball/cypress-cucumber-preprocessor/tree/master/examples