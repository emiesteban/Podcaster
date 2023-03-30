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

#### Schemas

Not implemented yet, but must be located into `src/schema` folder

#### Endpoint

This app depends on third-party endpoints of iTunes, if the endpoint is updated, maybe the app should not work and must be updated.

### Support contact

- [Emiliano M. Esteban](mailto:emiesteban@gmail.com)
