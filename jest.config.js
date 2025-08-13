export default {
   clearMocks: true,
   restoreMocks: true,
   testEnvironment: 'jsdom',
   testEnvironmentOptions: {
      customExportConditions: ['node', 'node-addons']
   },

   testMatch: [
      '**/?(*.)+(spec.js)?',
      '**/?(*.)+(spec.ts)?'
   ],

   moduleFileExtensions: ['js', 'mjs'],
   transform: {
      '^.+\\.js$': 'babel-jest',
      '^.+\\.mjs$': 'babel-jest'
   },
   transformIgnorePatterns: ['/node_modules/(?!(\\@vueuse)/)'],

   setupFiles: [],
   setupFilesAfterEnv: []
};