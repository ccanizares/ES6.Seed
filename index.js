import HelloWorld from './src/Greeter.js'

var context = window || global;
var app = {};

var app = context.app;
if (!app) {
    app = context.app = {};
}

app.HelloWorld = HelloWorld;

export default app;