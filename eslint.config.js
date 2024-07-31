// eslint.config.js
import antfu from '@antfu/eslint-config';

export default antfu({
  vue: {
    overrides: {
      'vue/operator-linebreak': ['error', 'before'],
      'vue/html-self-closing': 'off',
    },
  },
  typescript: {
    overrides: {
      'ts/consistent-type-definitions': ['error', 'interface'],
    },
  },
}, {
  // Remember to specify the file glob here, otherwise it might cause the vue plugin to handle non-vue files
  files: ['**/*.vue', '**/*.ts'],
  rules: {
    'style/semi': ['error', 'always'],
  },
}, {
  rules: {
    'style/semi': ['error', 'always'],
  },
});
