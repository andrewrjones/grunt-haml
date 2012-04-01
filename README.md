# grunt-haml

Grunt plugin for compiling haml files

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

## Release History
* 2012/04/01 - v0.1.0 - Initial release.

## License
Copyright (c) 2012 Andrew Jones  
Licensed under the MIT license.
