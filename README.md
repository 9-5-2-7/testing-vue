packages
- vue-test-utils
- webpack
- vue
- vue-template-compiler
- mocha
- mocha-webpack
- 
- expect
- 
- jsdom
- jsdom-global ("create /test/setup.js")

# script command
package.json
```
    "scripts": {
      "test": "mocha-webpack --webpack-config webpack.config.js test/*.spec.js"
    }
```

#src
/src/components/Counter.js

#test
/test/counter.spec.js


