# tekuncorked-server-dashboard


- websocket server [here](https://github.com/parthkamal/tekuncorked-server/tree/main) 
- client dashboard [here](https://github.com/parthkamal/tekuncorked-client/tree/main)


- this project will be for an iot device to register in the dashboard
- the user can configure the temperature reading on entering the dashboard


## install instructions


1. make sure you have installed the nodejs and react-scripts globally

```bash
$ git clone $REPO_SSH
$ cd $REPO_SSH
$ npm install
$ npm run start
```


2. check the package.json and modify your build requirements. 


**package.json**

```json

{
  "name": "tekuncorked-server-dashboard",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    "axios": "^1.5.1",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.16.0",
    "react-scripts": "^5.0.1"
  },
  "scripts": {
    "start": "PORT=8080 react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test --env=jsdom",
    "eject": "react-scripts eject"
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  }
}

```


**directory structure** - 


```bash
.
├── package.json
├── package-lock.json
├── public
│   ├── favicon.ico
│   └── index.html
├── README.md
└── src
    ├── App.css
    ├── App.js
    ├── components
    ├── index.css
    ├── index.js
    └── pages
        ├── Home.jsx
        ├── Login.jsx
        └── Register.jsx

4 directories, 12 files
```

**default local url**

```
http://localhost:8000
```