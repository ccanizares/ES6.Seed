var gulp = require("gulp");
var gutil = require("gulp-util");
var webpack = require("webpack");
var WebpackDevServer = require("webpack-dev-server");

gulp.task("build", function(callback) {
    // Start a webpack-dev-server
    var compiler = webpack({
        // configuration
        entry: './index.js',
        output: { path: __dirname + '/app', filename: 'bundle.js' },
        module: {
            loaders: [
                {
                    test: /.jsx?$/,
                    loader: 'babel-loader',
                    exclude: /node_modules/,
                    query: {
                    presets: ['es2015']
                    }
                }
            ]
        }
    });

    new WebpackDevServer(compiler, {
        // server and middleware options
    }).listen(8080, "localhost", function(err) {
        if(err) throw new gutil.PluginError("webpack-dev-server", err);
        // Server listening
        gutil.log("[webpack-dev-server]", "http://localhost:8080/webpack-dev-server/index.html");

        // keep the server alive or continue?
        // callback();
    });
});