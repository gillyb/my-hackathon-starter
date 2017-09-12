# ezresume
The easiest and quickest way to create a resume online
  
  
### What's included
This project is a simple starter that includes :  
* expressjs (for the server)
  * pug template engine
  * sample templates (`public/views/main.pug`)
  * A sample controller (`controllers/main-controller.js`)
* configured webpack
  * babel (so we can write es2015 on the client side)
  * bundles all our js into a single file
  * Supports reactjs (and jsx)
  
### Running the project  
* Running webpack once : `npm run webpack`  
* Running webpack watch mode (for development) : `npm run watch`
  
Bundled files will be placed in `/build/app.bundle.js`