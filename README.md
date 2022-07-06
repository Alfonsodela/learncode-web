# InstaCode Web - MiniCodeLab

### Lista de tareas pendientes

- [x] Instalar `React Router`
- [x] Instalar `axios`
- [x] Instalar `React Hook Form`
- [x] Instalar `emotion` (alternativa a `styled-components`)
        - npm install @emocion/react
        - npm i @emotion/styled
        - Añadir conf en el plugin de react
---

- [x] Crear design system sobre Emottion
        - Crear variables globales de CSS
        - Importar las fonts del proyecto Roboto (regular & bold)
- [x] Crear sistema de routin con react-router-dom
- [x] Crear componente ruta protegida
- [] Autentiarnos con la API
        - [x] Registrarse
        - [] Logarse

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
      "lint-staged": {
        "*{js,jsx,ts,tsx}": [
          "prettier --write",
          "eslint --quiet --fix",
          "jest --passWithNoTests"
        ]
      }

- []Reafactor de l registro
 - [] Crear hook de autenticación
 - [] Crear servicio API
 - [] Guardar datos del user en Context

- [] Añadir forms y pantalla de Registro y login
 - [] Registro
 - [] Login