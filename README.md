# PODCASTER

## Intro

PODCASTER is a client frontend application to view the top 100 podcast of the iTunes.

## Technical Stack
- [Node](https://nodejs.org/)
- [React](https://reactjs.org/)
- [React Router](https://reactrouter.com/)
- [Webpack](https://webpack.js.org/)
- [Node Package Manager](https://www.npmjs.com/)

## Translation

Not implemented yet, but must be located into `public/locales` folder

## Environment Variables

Env variables are handled differently according to the environment. For local
development, they should be added to a file `.env`, an `.env.example` is
provided with empty fields.

| Environment Variable        | Description                                                  | Example Value                                                                           |
| --------------------------- | ------------------------------------------------------------ | --------------------------------------------------------------------------------------- |
| NODE_ENV                    | Development or Production                                    | development                                                                             |

### System requirements

- Node.js version: `^v18.15`
- React version: `^18.2.0`
- Package manager: `npm`
- Webpack Version: `^5.76.3`
- React Router: `^6.9.0`

## Commands

Start dev server

```sh
npm run start
```

Generate production build:

```sh
npm run production
```

Run the tests:

```sh
npm run test
```
Run the test-coverage:

```sh
npm run test:coverage
```

Run the e2e tests:

```sh
npm run test:e2e
```

#### ToDo

Schemas: Not implemented yet, but must be located into `src/schema` folder
CSS: update css components or refactor views to a friendly view
e2e: set the set of data, add some tests
ally: update the components to be wcag 2.1 compliance
CORS: add allorigins.win to avoid CORS errors, currently its working without incidents

#### Endpoint

This app depends on third-party endpoints of iTunes, if the endpoint is updated, maybe the app should not work and must be updated.

### Support contact

- [Emiliano M. Esteban](mailto:emiesteban@gmail.com)
