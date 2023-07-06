1. Iniciamos con la selección de la versión del Node con el comando en consola "nvm use versiondelnode".
2. Descargamos el archivo package.json con el comando en consola "npm init -y".
3. Descargamos el node_modules y el package-lock.json con el comando en consola "npm i -E -D nodemon".
4. Agregamos en el package.json debajo de "main" el ""type":"module"", modificamos "test" por "dev" y agregamos en su contenido "nodemon --quiet app.js".
5. Descargamos el "dotenv" con el comando en consola "npm i -E -D dotenv".
6. Descargamos "express" con el comando en consola "npm i -E -D express".
7. Inicializamos el Node con el comando en consola "npm run dev".