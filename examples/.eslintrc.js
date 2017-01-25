var original = require('../.eslintrc');

module.exports = Object.assign(original, {
  "settings": Object.assign({}, original['settings'] || {}, {
    "import/resolver": "webpack"
  })
});
