module.exports = {
  extends: ['@antfu/eslint-config'],
  plugins: ['turbo'],
  ignorePatterns: [
    'html',
    '**/html',
    '.nuxt',
    '**/.nuxt',
  ],
  rules: {
    'turbo/no-undeclared-env-vars': [
      'error',
      {
        allowList: ['^ENV_[A-Z]+$'],
      },
    ],
  },
}
