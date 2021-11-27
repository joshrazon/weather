# Objective

This is a single page weather web application that I built in order to showcase my some of my skills as a developer.

The project is deployed [here](https://mysimpleweatherapp.herokuapp.com/)

## Requirements

- [Node JS](https://nodejs.org/en/)
- [npm](https://docs.npmjs.com/about-npm)
- [Open Weather Map API Key](https://openweathermap.org/)

## Installation

To run the project locally, follow these steps:

clone and cd into the root folder

```
git clone https://github.com/joshrazon/weather.git

cd weather
```

create a .env file

```
touch .env
```

sign up for an open weather map account and generate an API key

then declare your API key inside of .env like so

```
// .env

API_KEY=yourapikey
```

install dependencies then run the project

```
npm install

npm run start
```

if all goes well, the project should be running at http://localhost:8080/

## Libraries and Frameworks

- [React](https://reactjs.org/)
- [Material UI](https://mui.com/)
- [Webpack](https://webpack.js.org/)
- [Babel](https://babeljs.io/)
