# Welcome to the backend nüli test app

For full instructions on what we'd like you to do please visit our [official developer test page](https://www.notion.so/nuliapp/Nuli-Mid-Level-Mobile-Developer-Test-83f53a4746824e4a8f924b8b9fc13d69#27bb0550be78474f830cfa65d552822d)

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```


After completing changes to a *.entity.ts file, run:
`npm run typeorm migration:generate -- -d ./src/ormconfig.ts MigrationName`

After a migration is completed, drag to the `src/db/migrations` folder and run:
`npm run typeorm migration:run -- -d ./src/ormconfig.ts`