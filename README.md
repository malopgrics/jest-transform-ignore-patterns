# bug reproduction for jest 'transformIgnorePatterns'

See [related issue](https://github.com/jestjs/jest/issues/15781).

Suggestions [from hainenber](https://github.com/jestjs/jest/issues/15781#issuecomment-3217805458) has been applied.

It seems that 'transformIgnorePatterns' is not taken into account.

This repo uses @vueuse/core v13.6.0. Since [v13.0.0](https://github.com/vueuse/vueuse/releases/tag/v13.0.0) this packages produces esm only, so it needs transformation for jest to run it.

As far as I know `transformIgnorePatterns: ['/node_modules/(?!(@vueuse)/)']` or ``transformIgnorePatterns: ['/node_modules/(?!(\\@vueuse)/)'],``  should do the trick, but neither works.

Steps to reproduce :

```shell
npm ci
npm run test
```
