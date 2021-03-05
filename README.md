# Proyecto ECOMMERCE en ReactJs

Este proyecto fue desarrollado para el curso de ReactJs de la plataforma [CODERHOUSE](https://www.coderhouse.com/)

- Author:

  - Braian D. Vaylet
  - Contacto: braianvaylet@gmail.com
  - [linkedin](https://www.linkedin.com/in/braianvaylet/)

- Demo: [AquilaStore](https://braianvaylet.github.io/coderhouse-react11360-bdv/)

- Info:

  - Camada: 11360
  - Profesor: Cristian Hourcade (Toto)
  - Tutor: Ramiro D' Accorso

- Librerias principales utilizadas en el proyecto:

  - [ReactJs](https://es.reactjs.org/)
  - [Create React App](https://github.com/facebook/create-react-app).
  - [PropTypes](https://www.npmjs.com/package/prop-types)
  - [Chakra-UI](https://chakra-ui.com/)
  - [React Helmet](https://www.npmjs.com/package/react-helmet)
  - [Firebase](https://firebase.google.com/?hl=es)
  - [i18next](https://react.i18next.com/)
  - [React Router](https://reactrouter.com/)
  - [jsDocs](https://jsdoc.app/)

- Se utiliza [Atomic Design](https://atomicdesign.bradfrost.com/) como patron de diseño para la arquitectura del proyecto

- Arquitectura de carpetas del proyecto:

  - build
  - docs
  - public
  - src
    - assets
      - images
      - logos
      - sliders
    - components
      - \_atoms
      - \_molecules
      - \_organisms
      - \_templates
    - containers
    - context
    - firebase
    - hooks
    - pages
    - routes
    - styles
    - translations
    - utils

- Pendientes principales:
  - Agregar pasarela de pagos
  - Responsive
  - Control de estado de pedidos (init, enProgreso, enViaje, recibido)
  - mover notificaciones y favoritos a firebase
  - registro de usuarios en firebase
  - Restringir acceso al panel de administración (solo usuario admin)

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run doc`

generate the documentation using jsdoc in the docs folder
Open [./docs/index.html]

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
