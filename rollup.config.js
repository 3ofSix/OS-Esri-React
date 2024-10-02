import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import replace from '@rollup/plugin-replace';

export default {
    input: 'src/components/index.js', // This is the import/export file
    output: {
        file: 'dist/reactjs-components.bundle.js', // Adjust path and file name as required
        format: 'iife', // Output format as a self-executing function (Immediately-Invoked Function Expression)
        name: 'ReactJSComponents', // Global variable name for the component
        globals: {
            react: 'React', //External dependency globals that WILL be available at run time
            'react-dom': 'ReactDOM'
        } 
    },
    plugins: [
        resolve(),
        commonjs(),
        babel({
            presets: ['@babel/preset-react']
        }),
        replace({
            'process.env.NODE_ENV' : JSON.stringify('production')
        })
    ],
    external: ['react', 'react-dom'] // The externally available scripts, ie Do not bundle this
};