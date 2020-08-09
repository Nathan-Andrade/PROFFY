<div align="center">
    <img src="https://res.cloudinary.com/stefanosaffran/image/upload/v1596482182/Omnistack/ykcfotyon6sacurdvht3.svg" width="300px"/>
</div>

<br />

<h2 align="center">
    NextLevelWeek #02 
</h2>

  ![](https://img.shields.io/github/languages/count/Nathan-Andrade/Proffy?color=%238257e5) ![](https://img.shields.io/github/languages/top/Nathan-andrade/Proffy?color=%238257e5) ![](https://img.shields.io/github/repo-size/Nathan-Andrade/Proffy?color=%238257e5) ![](https://img.shields.io/npm/l/packge?color=%238257e5) ![](https://img.shields.io/github/last-commit/Nathan-Andrade/Proffy?color=%238257e5) 

<p align="center">
  
</p>


## :computer: Projeto

 Proffy é uma aplicação que permite conectar alunos e professores de uma forma remota e segura, onde os alunos poderam marcar aulas e aprender da melhor forma.

 <p align="center">
  <img src="https://github.com/Nathan-Andrade/Proffy/blob/master/github/gifDaAplica%C3%A7%C3%A3oWithResponsive.gif?raw=true" >
  <img src="https://github.com/Nathan-Andrade/Proffy/blob/master/github/gifDaAplica%C3%A7%C3%A3oWithResponsiveMobile.gif?raw=true" >
</p>

 ## :airplane: Tecnologias e Bibliotecas

Este projeto foi desenvolvido com as seguintes tecnologias:

<details>
  <summary>Server</summary>

-   [Node.js](https://nodejs.org/)
-   [Express](https://expressjs.com/)
-   [Typescript](https://www.typescriptlang.org/)
-   [TS-Node-Dev](https://www.npmjs.com/package/ts-node-dev)
-   [Cors](https://www.npmjs.com/package/cors)
-   [ESLint](https://eslint.org/)
-   [Prettier](https://prettier.io/)
-   [VS Code](https://code.visualstudio.com/)

</details>

<details>
  <summary>Web</summary>

-   [React](https://pt-br.reactjs.org/)
-   [Typescript](https://www.typescriptlang.org/)
-   [@unform](https://unform.dev/)
-   [Styled Components](https://styled-components.com/)
-   [Context API](https://reactjs.org/docs/context.html)
-   [React-toggle](https://github.com/aaronshaf/react-toggle)
-   [Axios](https://www.npmjs.com/package/axios)
-   [React Icons](https://react-icons.netlify.com/#/)
-   [Prettier](https://prettier.io/)
-   [VS Code](https://code.visualstudio.com/)

</details>

<details>
  <summary>Mobile</summary>

-   [React](https://pt-br.reactjs.org/)
-   [React Native](https://reactnative.dev/)
-   [Expo](https://expo.io/learn)
-   [Styled Components](https://styled-components.com/)
-   [Typescript](https://www.typescriptlang.org/)
-   [React Navigation](https://reactnavigation.org/)
-   [Axios](https://www.npmjs.com/package/axios)
-   [Expo Google Fonts](https://github.com/expo/google-fonts)
-   [React Native Appearance](https://github.com/expo/react-native-appearance)
-   [Prettier](https://prettier.io/)
-   [VS Code](https://code.visualstudio.com/)

</details>

## :information_source: Como rodar a aplicação

### Requerimentos

Para rodar esta aplicação você vai precisar ter instalado:
* [Git](https://git-scm.com)
* [Node](https://nodejs.org/)
* [Yarn](https://yarnpkg.com/) 

Eu utilizei o banco de dados relacional [SQLite](https://www.npmjs.com/package/sqlite) para rodar os dados.
<br>
Se você quiser utilizar o SQLite3 faça a seguinte instalação na pasta server.

```bash
# Se você estiver utilizando Npm
$ npm install sqlite3

#  Se você estiver utilizando Yarn
$ yarn add sqlite3

```
### Backend

Agora clone este repositório e instale todas as dependências.
```bash
#Para clonar este repositório
$ git clone https://github.com/Nathan-Andrade/Proffy.git

# Vá para a pasta do servidor
$ cd Proffy/server

#Instale todas as dependências
$ npm 
ou
$ yarn 

#Para rodar o server
$ yarn start

```


### Frontend

```bash
# Para rodar a aplicação web realize os seguintes comandos
$ cd web
$ yarn
$ yarn start
```

### Mobile

Esta aplicação foi desenvolvida com Expo. É um software open-source que permite rodar React Native e facilita o processo de rodar a aplicação. [Clique aqui](https://expo.io/learn) para iniciar com o Expo.

```bash
# Instale todas as dependências
cd mobile
yarn
```

Para você conseguir rodar a aplicação, você vai precisar mudar o endereço em :
[api.ts](https://github.com/Nathan-Andrade/Proffy/blob/master/mobile/src/services/api.ts)
```javascript
  baseURL: 'http://192.168.0.103:3333',
```
Coloque o ip da sua máquina local para poder ter acesso como no exemplo: 192.168.0.103.

Agora a aplicação irá rodar em qualquer lugar.

```bash
# Para rodar o aplicativo
yarn start
```

O Expo irá abrir em uma página do seu navegador e com o seu celular poderá escanear o QR Code que irá gerar

> Esta aplicação foi testada em um Samsung Galaxy Grand Duos Prime  e um Moto G2.

## :memo: Licensa

Este projeto tem uma licensa do MIT. Olhe a [Licensa](https://github.com/Nathan-Andrade/Proffy/blob/master/LICENSE) para mais informações

---

Desenvolvido com ❤️ por <a href="https://www.linkedin.com/in/nathan-a-1b9436124/">Nathan de Andrade</a>.
