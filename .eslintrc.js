module.exports = {
  "extends": ["standard", "standard-react"],
  "installedESLint": true,
  "parser": "babel-eslint",
  "plugins": [
    "react",
    "standard",
    "promise",
    "import",
    "flowtype",
    "flowtype-errors"
  ],
  "rules": {
    "jsx-quotes": [
      "error",
      "prefer-double"
    ],
    "indent": [
      "warn"
    ],
    "semi": [
      "error",
      "always"
    ],
    "eol-last": [
      "warn",
      "always"
    ],
    "no-duplicate-imports": "off",
    "import/no-duplicates": "error",
    "no-unused-vars": [
      "warn",
      {
        "args": "all",
        "argsIgnorePattern": "^_",
        "varsIgnorePattern": "^_\\w+"
      }
    ],
    "flowtype/boolean-style": [
      "error",
      "boolean"
    ],
    "flowtype/define-flow-type": "warn",
    "flowtype/delimiter-dangle": [
      "error",
      "never"
    ],
    "flowtype/generic-spacing": [
      "error",
      "never"
    ],
    "flowtype/no-weak-types": [
      "warn",
      {
        "any": false
      }
    ],
    "flowtype/object-type-delimiter": [
      2,
      "comma"
    ],
    "flowtype/require-parameter-type": [
      "warn",
      {
        "excludeArrowFunctions": "expressionsOnly"
      }],
    "flowtype/require-return-type": [
      "warn",
      "always",
      {
        "annotateUndefined": "never",
        "excludeArrowFunctions": "expressionsOnly"
      }
    ],
    "flowtype/require-valid-file-annotation": [
      "warn",
      "always",
      {
        "annotationStyle": "block"
      }
    ],
    "flowtype/semi": [
      "error",
      "always"
    ],
    "flowtype/space-after-type-colon": [
      "warn",
      "always"
    ],
    "flowtype/space-before-generic-bracket": [
      "warn",
      "never"
    ],
    "flowtype/space-before-type-colon": [
      "warn",
      "never"
    ],
    "flowtype/union-intersection-spacing": [
      "warn",
      "always"
    ],
    "flowtype/use-flow-type": "error",
    "flowtype/valid-syntax": "warn",
    "flowtype-errors/show-errors": 2
  }
};
