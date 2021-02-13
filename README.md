# Express Server with Typescript & Jest

This boilerplate [Express](https://expressjs.com/) project is preconfigured with [Typescript](https://www.typescriptlang.org/), [Jest](https://jestjs.io/en/), and [Prettier](https://prettier.io/). The project structure resembles generated output from [express-generator](https://expressjs.com/en/starter/generator.html) with the `--no-view` option.

## Getting Started

### Recommendations

- [Visual Studio Code](https://code.visualstudio.com/)
- [Prettier VS Code extension](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) (for auto formatting)

### Run the Express server

```
npm start
```

### Run tests

```
npm test
```

### Build to `/dist`

```
npm run build
```

## Development

To debug the Express server with auto-restart,

```
npm run dev
```

To run unit tests (Jest) in watch mode,

```
npm run dev:test
```

With `VS Code`

- debug the server with `Attach to Server`
- debug the test with `Attach to Jest`

![Screen Shot 2019-10-11 at 4 06 48 AM](https://user-images.githubusercontent.com/4011348/66602490-d0cdee00-ebdc-11e9-8573-da157ea3cdfa.png)

## Refs

- https://restful-api-node-typescript.books.dalenguyen.me/en/latest/index.html
- https://codewithhugo.com/testing-an-express-app-with-supertest-moxios-and-jest/
- https://codewithhugo.com/express-request-response-mocking/
- https://www.robertcooper.me/using-eslint-and-prettier-in-a-typescript-project
