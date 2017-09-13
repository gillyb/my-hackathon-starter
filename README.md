# My hackathon starter kit
The easiest way to start a project
  
  
### What's included
This project is a simple starter that includes :  
* expressjs (for the server)
  * pug template engine
  * sample templates (`public/views/main.pug`) with inheritance
  * A sample controller (`controllers/main-controller.js`)
* configured webpack
  * babel (so we can write es2015 on the client side)
  * bundles all our js into a single file (`build/app.bundle.js`)
  * bundles all our css into a single file (`build/styles.bundle.css`)
  * Supports reactjs (and jsx)
* Bootstrap 4
  * This project builds bootstrap on it's own, so it gives us the freedom to edit the initial variables and customize it however we want.
  
### Running the project  
* Running webpack once : `npm run webpack`  
* Running webpack watch mode (for development) : `npm run watch`
  
Bundled files will be placed in `/build`  
  
### References  
* [ExpressJS](expressjs.com)
* [Pug template engine](https://pugjs.org/)
* [ReactJS](https://facebook.github.io/react/docs/installation.html#adding-react-to-an-existing-application)
* [Webpack configuration](https://webpack.js.org/guides/)
* [Bootstrap](http://getbootstrap.com/docs/4.0/getting-started/webpack/)
