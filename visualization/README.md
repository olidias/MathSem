# la-visual

> Visualization of the lorenz attractor equations

## Build Setup

``` bash
# install console tools
npm install -g vue yarn

# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## Build Folder
* /src Source files with all vue js components
  * main.js All global scripts -> please here
  * App.vue All view (HTML) to show the site
  * components/ Individual components (subpages) that should be shown on
  site
  * /assets All referenced assets that are referenced in HTML/JS
* /test Unit Tests
  * /e2e Unit Tests that check the HTML output
  * /unit Unit Tests for functions / components
* /static Just copied static material, _not needed_
* /config Configuration of the build process (webpack config)

## Links

### Vue
* Vue JS Example: [Markdown Editor](https://vuejs.org/v2/examples/)
* Template (Webpack) Docu: [vue-template](https://vuejs-templates.github.io/webpack/)
* Touch abillity: [vue-touch](https://github.com/vuejs/vue-touch)
* Fontawesome: [vue-awesome](https://github.com/Justineo/vue-awesome)


### Whitestorm
* [Vue template for whs](https://github.com/waif1989/vue-whs/tree/master/src/components)
* [Whitestorm Homepage](https://whs.io/index.html)
* [Whitestorm Webpack](https://whs.io/Usage%20with%20webpack.html)
