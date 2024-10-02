# What is this?
Template to create ReactJs components for us with Outsystems

This is used to test locally. Then wrap the required scripts into a bindel to be used within Outsystems

# Requirements
NodeJS
NPM
Offline React and ReactDOM
# Set up
If the project is not initialised run 
    `npn init -y`

Ensure react and react-dom are installed
    `npm install react react-dom`

To test locally install react-scripts
    `npm install react-scripts --save-dev`

The flag ensures this is not packaged to the release version

# Bundler
This template uses Rollup as the bundler. Install it
    `npm install rollup rollup-plugin-node-resolve rollup-plugin-commonjs rolllup-plugin-babel @babel/core @babel/preset-react --save-dev`

Again the flag will ensure these packages are not bundled to the release version
The bundler can be configured in `rollup.config.js` see [Rollup](https://rollupjs.org/configuration-options/ "Rollup configuration documentation")
