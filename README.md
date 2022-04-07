# Getting Started with Wired Photo

[Demo](https://wired-photo.web.app)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Wired Photo a react application that get images from the server and display. And let you to like photos and group them in list.

## Config

#### .env file

You need to let react know where to get the images from. You can find server application [here](https://github.com/abrahamaschalew/wired-photo-backend).

There are two .env files.

.env file is for development puropose. And .env.production is for production mode. If you build the project using `npm run build` react automatically use .env.production

```text
REACT_APP_SERVER_URL=http://localhost:4000
```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!
