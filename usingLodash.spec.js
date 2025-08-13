import { dummy } from './usingLodash.js';

describe('lodash does not needs transformation', () => {
   it('should works', () => {
     const actual = dummy([1,2,3], [3]);
     expect(actual).toEqual([1,2]);
   });
})