module.exports = {
  extends: ['@commitlint/config-conventional'],
  parserPreset: './commitlint-parser-preset',
  rules: {
      'type-enum': [
          2,
          'always',
          [
              'build',
              'chore',
              'ci',
              'docs',
              'feat',
              'fix',
              'perf',
              'refactor',
              'revert',
              'style',
              'test',
              'merge',
          ],
      ],
      'subject-case': [
          0,
          'never',
          [
              'sentence-case',
              'start-case',
              'pascal-case',
              'upper-case',
          ],
      ],
  },
};
