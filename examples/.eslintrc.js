var original = require('../.eslintrc');

module.exports = Object.assign(original, {
  "rules": Object.assign(original['rules'], {
    "flowtype/require-valid-file-annotation": [
      2,
      "never"
    ]
  })
});
