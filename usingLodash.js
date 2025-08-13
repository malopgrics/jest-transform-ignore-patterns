import { differenceWith, isEqual } from 'lodash';

export const dummy = (array1, array2) => {
    return differenceWith(array1, array2, isEqual);
}