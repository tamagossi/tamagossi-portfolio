/** @type {import('prettier').Config} */
const config = {
  plugins: ['@ianvs/prettier-plugin-sort-imports', 'prettier-plugin-tailwindcss'],
  importOrderParserPlugins: ['typescript', 'jsx', 'decorators-legacy'],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  semi: true,
  singleQuote: true,
  trailingComma: 'all',
  printWidth: 100,
  importOrder: [
    '^react$',
    '^next(/.*)?$',
    '',
    '<THIRD_PARTY_MODULES>',
    '',
    '^@/domain/(.*)$',
    '',
    '^@/shared/(.*)$',
    '',
    '^@/(.*)$',
    '',
    '^[./]',
  ],
};

export default config;
