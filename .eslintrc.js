module.exports = {
  'env': {
    'browser': true,
    'es2021': true,
    'jest': true,
    'node': true,
  },
  'extends': [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
  ],
  'overrides': [
  ],
  'parserOptions': {
    'ecmaVersion': 'latest',
    'sourceType': 'module',
  },
  'plugins': [
    'react',
  ],
  'rules': {
    'indent': [
      'error',
      2,
      {'SwitchCase': 1},
    ],
    'linebreak-style': 0,
    'quotes': [
      'error',
      'single',
    ],
    'semi': [
      'error',
      'always',
    ],
    'react/jsx-tag-spacing': [
      'error',
      {
        'closingSlash': 'never',
        'beforeSelfClosing': 'always',
        'afterOpening': 'never',
        'beforeClosing': 'never',
      },
    ],
    'arrow-parens': ['error', 'as-needed'],
    'object-curly-spacing': ['error', 'never'],
    'react/react-in-jsx-scope': 'off',
    'react/jsx-filename-extension': [1, {'extensions': ['.js', '.jsx']}],
    'react/jsx-wrap-multilines': [
      'error',
      {
        'declaration': 'parens-new-line',
        'assignment': 'parens-new-line',
        'return': 'parens-new-line',
        'arrow': 'parens-new-line',
        'condition': 'parens-new-line',
        'logical': 'parens-new-line',
        'prop': 'parens-new-line',
      },
    ],
    'comma-dangle': ['error', 'always-multiline'],
    'comma-spacing': ['error', {'before': false, 'after': true}],
    'eol-last': ['error', 'always'],
    'no-multiple-empty-lines': ['error', {'max': 1, 'maxEOF': 0}],
    'sort-imports': ['error', {
      'ignoreCase': false,
      'ignoreDeclarationSort': true,
      'ignoreMemberSort': false,
      'memberSyntaxSortOrder': ['none', 'all', 'multiple', 'single'],
      'allowSeparatedGroups': false,
    }],
    'curly': 'error',
    'no-unused-vars': ['warn', {'args': 'none'}],
    'jsx-quotes': ['error', 'prefer-single'],
    'react/jsx-curly-brace-presence': ['error', {props: 'always', 'propElementValues': 'always'}],
  },
  'settings': {
    'react': {
      'version': 'detect', // React version. "detect" automatically picks the version you have installed.
    },
  },
};
