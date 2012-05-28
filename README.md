# grunt-haml

Grunt plugin for compiling haml files

## Important Note

We use [haml-js](https://github.com/creationix/haml-js) to produce your HTML and therefore have the same limitations.

[haml-js](https://github.com/creationix/haml-js) does not conform to the same spec as [haml](http://haml.info/), so you may find you need to make a [whole lot of changes](https://github.com/andrewrjones/jquery-email-address-munging-plugin/commit/458787933e9da11d8a004238ab4a36c95532ed15) to your Haml.

If a more Haml-compliant node module comes available we will gladly switch to it.

## Getting Started
Install this grunt plugin next to your project's [grunt.js gruntfile][getting_started] with: `npm install grunt-haml`

Then add this line to your project's `grunt.js` gruntfile:

```javascript
task.loadNpmTasks('grunt-haml');
```

[grunt]: https://github.com/cowboy/grunt
[getting_started]: https://github.com/cowboy/grunt/blob/master/docs/getting_started.md

## Documentation
Add something like the following to your `grunt.js` gruntfile:

```javascript
haml: {
  index: {
    src: "src/index.haml",
    dest: "dist/index.htm"
  }
},
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [grunt][grunt].

## License
Copyright (c) 2012 Andrew Jones  
Licensed under the MIT license.
