const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: {
        index: './src/index.js',

        saveLoadLocStorage: './src/utils/saveLoadLocStorage.js',
        recipeClass: './src/utils/recipeClass.js',
        createHTMLSkeleton: './src/utils/createHTMLSkel.js',
        groupBy: './src/utils/groupBy.js',

        recipeLibrary: './src/recipeLibrary/recipeLibrary.js',
        recipeHTML: './src/recipeLibrary/recipeHTML.js',
        recipeForm: './src/recipeLibrary/recipeForm.js',

        selectedRecipes: './src/selectedRecipes/selectedRecipes.js',

        groceryList: './src/groceryList/groceryList.js',
        groceryItem: './src/groceryList/groceryItem.js'
    },
    devtool: 'inline-source-map',
    devServer: {
        static: './dist',
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'recipes'
        })
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    optimization: {
        runtimeChunk: 'single',
        splitChunks: {
            chunks: 'all',
        }
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            }
        ]
    }
}