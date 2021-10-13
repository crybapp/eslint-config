module.exports = {
  extends: [
    'standard-with-typescript',
    'plugin:jsdoc/recommended'
  ],
  plugins: [
    'jsdoc',
    'prefer-arrow'
  ],
  rules: {
    // we prefer using arrow functions
    'prefer-arrow/prefer-arrow-functions': 'error',

    // arg => arg is better than (arg) => arg!
    'arrow-parens': ['error', 'as-needed'],

    // lines should generally be kept short but definitely shouldn't be over 120 characters
    // allow long strings and regexes though
    'max-len': ['error', {
      code: 120,
      ignoreUrls: true,
      ignoreStrings: true,
      ignoreTemplateLiterals: true,
      ignoreRegExpLiterals: true
    }],

    // console.log is fine
    'no-console': 'off',

    // no var. use `const` or `let`.
    'no-var': 'error',

    // we only are interested on Unix newlines
    'linebreak-style': ['error', 'unix'],

    // chained calls should be readable
    'newline-per-chained-call': ['error', { ignoreChainWithDepth: 2 }],

    // imports should be sorted out
    'sort-imports': ['error', {
      ignoreCase: false,
      ignoreDeclarationSort: true,
      ignoreMemberSort: false,
      memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
      allowSeparatedGroups: true
    }],

    // empty lines aren't nice unless needed
    'no-multiple-empty-lines': ['error', { max: 1, maxBOF: 0, maxEOF: 0 }],

    // we want === whether possible, except in cases like when we compare to null
    eqeqeq: ['error', 'smart'],

    // descriptions on params and return is often redundant
    'jsdoc/require-param-description': 'off',
    'jsdoc/require-returns-description': 'off',

    // not everything needs to be a complete sentence
    'jsdoc/require-description-complete-sentence': 'off',

    // most things explain themselves
    'jsdoc/require-example': 'off',

    // don't worry about whether a newline exists after jsdoc description
    'jsdoc/newline-after-description': 'off'
  }
}
