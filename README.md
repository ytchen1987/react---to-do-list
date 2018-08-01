<h5>这是一个从头搭建一个react简单应用的教程，最开始学redux时候从别人那copy后用到的，现在回过头看还是可以算作最好的一个demo了，重新更新了代码和一些配置，在github找到了初始版本，在此感谢作者</h5>

从头开始建立一个React App - 项目基本配置 <br />
npm init 生成 package.json 文件.<br />
安装各种需要的依赖:<br />
npm install --save react - 安装React.<br />
npm install --save react-dom 安装React Dom,这个包是用来处理virtual DOM。这里提一下用React Native的话，这里就是安装react-native。<br />
npm install --save-dev webpack - 安装Webpack, 现在最流行的模块打包工具.<br />
npm install --save-dev webpack-dev-server - webpack官网出的一个小型express服务器，主要特性是支持热加载.<br />
npm install --save-dev babel-core - 安装Babel, 可以把ES6转换为ES5，注意Babel最新的V6版本分为babel-cli和babel-core两个模块，这里只需要用babel-cor即可。<br />
安装其他的babel依赖（babel真心是一个全家桶，具体的介绍去官网看吧..我后面再总结，这里反正全装上就是了）:<br />
npm install --save babel-polyfill - Babel includes a polyfill that includes a custom regenerator runtime and core.js. This will emulate a full ES6 environment<br />
npm install --save-dev babel-loader - webpack中需要用到的loader.<br />
npm install --save babel-runtime - Babel transform runtime 插件的依赖.<br />
npm install --save-dev babel-plugin-transform-runtime - Externalise references to helpers and builtins, automatically polyfilling your code without polluting globals.<br />
npm install --save-dev babel-preset-es2015 - Babel preset for all es2015 plugins.<br />
npm install --save-dev babel-preset-react - Strip flow types and transform JSX into createElement calls.<br />
npm install --save-dev babel-preset-stage-2 - All you need to use stage 2 (and greater) plugins (experimental javascript).<br />
打开 package.json 然后添加下面的scripts:<br />
"scripts": {<br />
  "start": "webpack-dev-server --hot --inline --colors --content-base ./build",<br />
  "build": "webpack --progress --colors"<br />
}<br />
命令行输入 npm start 将要启动webpack dev server.<br />

命令行输入 npm build 将会进行生产环境打包.<br />
4. 启动webpack<br />

Webpack是我们的打包工具，在我们的开发环境中具体很重要的作用，具有很多非常便捷的特性，尤其是热加载hot reloading. webpack.config.js 是如下所示的webpack的配置文件. 随着app的不断变化，配置文件也会不断的更新，这里我们就用默认的webpack.config.js来命名这个配置文件，假如你用别的名字比如webpack.config.prod.js那么上面的脚本build就需要相应的改变指定相应的配置文件名字："build": "webpack webpack.config.prod.js --progress --colors"

<code>
var webpack = require('webpack');
module.exports = {
  entry: './src/app.js',
  output: {
      path: __dirname + '/build',
      filename: "bundle.js"
  },
  module: {
      rules: [{
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
          query: {
              plugins: ['transform-runtime'],
              presets: ['es2015', 'react', 'stage-2']
          }
      }, {
          test: /\.css$/,
          loader: "style-loader!css-loader"
      }]
  }
};
</code>
OK,我们项目的基本配置终于完成了，是时候开始写Reac代码了.



<h2>问题：</h2>
webpack 编译报错 Couldn't find preset "env"

在 .babelrc 文件中设置了env 选项，这需要 babel-preset-env  

npm install babel-preset-env --save-dev 依赖引入

