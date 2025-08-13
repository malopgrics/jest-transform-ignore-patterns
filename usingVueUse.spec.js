import { dummy } from './usingVueUse.js';

describe('should transform @vueuse', () => {
   it('should works', () => {
     const actual = dummy([1,2,3], [3]);
     expect(actual).toEqual([1,2]);
   });
})