const path = require('path');

const dir = path.dirname(__dirname);

module.exports = {
  src: path.join(dir, 'src'),
  build: path.join(dir, 'target/dist'),
  node_modules: path.join(dir, 'node_modules'),
  test: path.join(dir, 'test'),
  translations: path.join(dir, 'translations')
};

console.log('myDir is:', dir);
console.log('exports are:', module.exports);