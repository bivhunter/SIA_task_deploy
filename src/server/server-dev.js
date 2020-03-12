
import path from 'path'
import express from 'express'
import webpack from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'
import config from '../../webpack.dev.config.js'
const app = express(),
    DIST_DIR = __dirname,
    compiler = webpack(config),
    
    HTML_FILE = path.join(compiler.outputPath, 'index.html');
    console.log(DIST_DIR, 'dist_dir');
    console.log(compiler.outputPath, 'compiler');


app.use(webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath
}));
app.use(webpackHotMiddleware(compiler));

app.get('*', (req, res, next) => {
    compiler.outputFileSystem.readFile(HTML_FILE, (err, result) => {
        if (err) {
            return next(err)
        }
        res.set('content-type', 'text/html');
        res.send(result);
        res.end();
    });
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`App listening to ${PORT}....    devServer`);
    console.log('Press Ctrl+C to quit.');
});
