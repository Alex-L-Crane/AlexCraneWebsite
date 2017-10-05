var elixir = require('laravel-elixir');
var theme = 'alexcrane';
elixir.config.assetsPath = './';

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Statamic theme. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir(function(mix) {
    mix.sass(
        theme + '.scss',
        'css/' + theme + '.css');

    mix.browserify([
        'vendor/noframework.waypoints.min.js',
        'jabbascripts.js'
    ], 'js/' + theme + '.js');
});