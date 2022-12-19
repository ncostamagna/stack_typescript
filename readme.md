Convierte TS a JS: https://www.typescriptlang.org/

# TypeScript

Es javascript con documentacion extra, no proporciona ninguna oprimizacion en el codigo, solo es una ayuda a los desarrolladores. Podemos ver el error antes de ejecutar el codigo

# Install

```sh
npm install -g typescript ts-node
# ts-node ejecutamos ts en node

# Nos va a ayudar a compilar
tsc --help

tsc index.ts # compilamos el codigo, nos genero el index.js
node index.js

# Sino podemos usar
ts-node index.ts
```

# Extensions

- prettier: code formatter

Habilitar 'Format on save' en visual studio code

# Variables

```ts
let hasName: boolean = true;

// si colocamos esto, al hacer ts-node va a explotar
let hasName: boolean = "true";
```

Es muy mala practica definir las variables como **any**, if we do that, TS won't catch the errors

# Packages

- **concurrently**: Run multiple commands concurrently. Like npm run watch-js & npm run watch-less but better.
