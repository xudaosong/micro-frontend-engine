import babel from 'rollup-plugin-babel';
import nodeResolve from 'rollup-plugin-node-resolve';

module.exports = {
    input: './src/react-app.jsx',
    output: {
        file: './dist/react-app.js',
        format: 'umd',
        name: 'reactApp'
    },
    external: [ 'react','react-dom' ],
    plugins:[
        nodeResolve(),
        babel({
            exclude: 'node_modules/**'
        })
    ]
}
