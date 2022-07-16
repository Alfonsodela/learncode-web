# InstaCode Web - MiniCodeLab

### Lista de tareas pendientes

- [x] Instalar `React Router`
- [x] Instalar `axios`
- [x] Instalar `React Hook Form`
- [x] Instalar `emotion` (alternativa a `styled-components`)
        - npm install @emocion/react
        - npm i @emotion/styled
        - Añadir conf en el plugin de react

- [x] Crear design system sobre Emotion
        - Crear variables globales de CSS
        - Importar las fonts del proyecto Roboto (regular & bold)
- [x] Crear sistema de routing con react-router-dom
- [x] Crear componente ruta protegida
- [x] Crear Context
- [x] Autenticarnos con la API
        - [x] Registro

----


- [x] Config de Prettier
- [-] Config de Eslint
  - npx eslint --init
  - npm install --save-dev prettier eslint-config-prettier eslint-plugin-prettier
- [-] Config de Jest
  - npm i --dev jest @testing-library/react
  - npm i --save-dev @types/jest
  - npm i -D ts-jest 
- [-] Config de Husky
  - npm i -D husky lint-staged

- [] Refactor del registro
 - [x] Crear servicio API (1.32)
 - [x] Crear types
 - [x] Guardar datos del user en Context (1.47)
 - [x] Guardar token en localstorage (1.58)
 - [-] Crear hook de autenticación

 -----

 
- [] Crear componente (StyleGuide) para el formulario
  - [x] Button
  - [x] Input
  - [x] Error
  - [x] Image
  - [x] AuthenticateLayout

- [] Añadir forms y pantalla de Registro y login (0.57)
 - [x] Toggle (1.43)
 - [x] Registro
 - [x] Login (1.54)
 - [x] Añadir redirección a la ruta / styleguide
 - Perfil Junior use TypeScript y test con componentes y funciones (2.20)

 -------

- [] Refactor Formularios
  - [] Componentizar los inputs de forma más genérica
  - [] HOC para que los users logeados no entren en Authenticate
  - [] Controlar los errores generales del form (diccionario de errores)

- [x] Propagar el email de registro a login
- [x] Cargar datos de usuario al cargar la aplicación (0.21)
- [] Crear las vistas de las rutas protegidas 
- [] Crear componente lista de codes
  - [] Crear componente Code Snippet (0.48)
  - [] Añadir paginación

