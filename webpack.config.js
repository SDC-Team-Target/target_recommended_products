// // import 'client/src/app.module.scss'
// const isDevelopment = process.env.NODE_ENV === 'development';
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');


// module.exports = {
//   entry: __dirname + '/client/src/index.jsx',
//   module: {
//     rules: [
//       {
//         test: [/\.jsx$/],
//         exclude: /node_modules/,
//         sideEffects: true,
//         use: {
//           loader: 'babel-loader',
//           options: {
//             presets: ['@babel/preset-react', '@babel/preset-env']
//           }
//         }
//       },
//       {
//                 test: /\.module\.s(a|c)ss$/,
//                 loader: [
//                   isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
//                   {
//                     loader: 'css-loader',
//                     options: {
//                       modules: true,
//                       sourceMap: isDevelopment
//                     },
//                   },
//                   {
//                     loader: 'sass-loader',
//                     options: {
//                       sourceMap: isDevelopment
//                     }
//                   }
//                 ]
//               },
//               {
//                 test: /\.s(a|c)ss$/,
//                 exclude: /\.module.(s(a|c)ss)$/,
//                 loader: [
//                   isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
//                   'css-loader',
//                   {
//                     loader: 'sass-loader',
//                     options: {
//                       sourceMap: isDevelopment
//                     }
//                   }
//                 ]
//               }
//     ]
//   },
//   resolve: {extensions: ['.js', '.jsx', '.scss']},
//   plugins: [
//     new MiniCssExtractPlugin({
//       filename: isDevelopment ? '[name].css' : '[name].[hash].css',
//       chunkFilename: isDevelopment ? '[id].css' : '[id].[hash].css'
//     })
//   ],
//   output: {
//     filename: 'bundle.js',
//     path: __dirname + '/public'
//   }
// };

module.exports = {
  entry: __dirname + '/client/src/index.jsx',
  module: {
    rules: [
      {
        test: [/\.jsx$/],
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env']
          }
        }
      },
      {
        test: /\.css?/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  output: {
    filename: 'bundle.js',
    path: __dirname + '/public'
  }
};